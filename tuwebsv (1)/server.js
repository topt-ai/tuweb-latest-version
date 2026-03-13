import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001; // Modified to 3001 since Vite runs on 3000

app.use(cors({ origin: process.env.ALLOW_ORIGIN || '*' }));
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message, sessionId, key } = req.body;
  if (key !== process.env.CHAT_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  try {
    const response = await fetch(process.env.N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        action: 'sendMessage', 
        chatInput: message, 
        sessionId: sessionId 
      })
    });
    
    const text = await response.text();
    let finalOutput = '';
    
    // Attempt to parse NDJSON format from n8n streaming response
    const lines = text.split('\n');
    let isNdjson = false;
    for (const line of lines) {
      if (!line.trim()) continue;
      try {
        const obj = JSON.parse(line);
        isNdjson = true;
        if (obj.type === 'item' && obj.content !== undefined) {
          finalOutput += obj.content; // Streamed chunks
        } else if (obj.output !== undefined && !obj.type) {
          finalOutput += obj.output;
        }
      } catch (e) {
        // Not a JSON line
      }
    }
    
    if (!isNdjson || !finalOutput) {
      // Fallback: standard JSON or plain text
      try {
        const parsed = JSON.parse(text);
        finalOutput = parsed.output || parsed.text || parsed.response || JSON.stringify(parsed);
      } catch {
        finalOutput = text; // raw text if all parsing fails
      }
    }
    
    return res.json({ output: finalOutput });
  } catch (err) {
    console.error('Error forwarding to n8n:', err);
    return res.status(500).json({ error: 'No se pudo conectar con el servidor n8n' });
  }
});

app.listen(port, () => {
  console.log(`Express chat proxy server listening on port ${port}`);
});

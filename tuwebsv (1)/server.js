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
      body: JSON.stringify({ message, sessionId })
    });
    
    // n8n returns standard JSON text or an array
    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { text }; 
    }
    
    return res.json(data);
  } catch (err) {
    console.error('Error forwarding to n8n:', err);
    return res.status(500).json({ error: 'Server error parsing chat' });
  }
});

app.listen(port, () => {
  console.log(`Express chat proxy server listening on port ${port}`);
});

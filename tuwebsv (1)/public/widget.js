(function() {
  const currentScript = document.currentScript;
  const apiUrl = currentScript.getAttribute('data-api') || '/api/chat';
  const title = currentScript.getAttribute('data-title') || 'Chat';
  const chatKey = currentScript.getAttribute('data-key') || '';

  let sessionId = localStorage.getItem('n8n_chat_session');
  if (!sessionId) {
    sessionId = 'sess_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('n8n_chat_session', sessionId);
  }

  // Inject CSS
  const style = document.createElement('style');
  style.innerHTML = `
    #n8n-chat-widget {
      position: fixed; bottom: 24px; right: 24px; z-index: 9999;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    #n8n-chat-btn {
      width: 56px; height: 56px; border-radius: 50%;
      background: var(--terra, #c4622d); color: white;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; box-shadow: 0 4px 20px rgba(196,98,45,0.35);
      transition: transform 0.2s; border: none;
    }
    #n8n-chat-btn:hover { transform: scale(1.08); }
    #n8n-chat-btn svg { width: 28px; height: 28px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
    #n8n-chat-window {
      position: absolute; bottom: 80px; right: 0;
      width: 350px; height: 500px;
      background: white; border-radius: 16px;
      box-shadow: 0 8px 40px rgba(26,26,24,0.15);
      display: none; flex-direction: column; overflow: hidden;
      border: 1px solid rgba(26,26,24,0.08);
    }
    #n8n-chat-window.open { display: flex; }
    #n8n-chat-header {
      background: #1A1A18; color: #F5F0E8; padding: 16px;
      font-weight: 600; font-size: 16px;
      display: flex; justify-content: space-between; align-items: center;
    }
    #n8n-chat-close { cursor: pointer; border: none; background: none; color: #F5F0E8; font-size: 20px; }
    #n8n-chat-messages {
      flex: 1; padding: 16px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px;
      background: #F5F0E8;
    }
    .msg { max-width: 80%; padding: 10px 14px; border-radius: 12px; font-size: 14px; line-height: 1.4; word-wrap: break-word; }
    .msg.user { align-self: flex-end; background: #c4622d; color: white; border-bottom-right-radius: 4px; }
    .msg.bot { align-self: flex-start; background: white; color: #1A1A18; border-bottom-left-radius: 4px; border: 1px solid rgba(26,26,24,0.08); }
    .msg.system { align-self: center; background: transparent; color: #888; font-size: 12px; }
    #n8n-chat-input-area {
      padding: 12px; background: white; border-top: 1px solid rgba(26,26,24,0.08); display: flex; gap: 8px;
    }
    #n8n-chat-input {
      flex: 1; padding: 10px; border: 1px solid rgba(26,26,24,0.1); border-radius: 8px; outline: none; font-size: 14px;
    }
    #n8n-chat-input:focus { border-color: #c4622d; }
    #n8n-chat-send {
      background: #10261b; color: white; border: none; padding: 10px 16px; border-radius: 8px; cursor: pointer; font-weight: 500;
    }
    #n8n-chat-send:hover { background: #152e23; }
    .typing-indicator { align-self: flex-start; background: transparent; padding: 5px 14px; display: none; margin-bottom: 8px; }
    .typing-indicator span { display: inline-block; width: 6px; height: 6px; background: #c4622d; border-radius: 50%; margin: 0 2px; animation: bounce 1.4s infinite ease-in-out both; }
    .typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
    .typing-indicator span:nth-child(2) { animation-delay: -0.16s; }
    @keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }
    @media (max-width: 480px) {
      #n8n-chat-window {
        position: fixed; inset: 0; width: 100%; height: 100%; border-radius: 0; bottom: 0; right: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Widget HTML
  const container = document.createElement('div');
  container.id = 'n8n-chat-widget';
  container.innerHTML = `
    <div id="n8n-chat-window">
      <div id="n8n-chat-header">
        <span>${title}</span>
        <button id="n8n-chat-close">&times;</button>
      </div>
      <div id="n8n-chat-messages">
        <div class="msg bot">¡Hola! ¿En qué puedo ayudarte?</div>
        <div class="typing-indicator" id="n8n-chat-typing"><span></span><span></span><span></span></div>
      </div>
      <div id="n8n-chat-input-area">
        <input type="text" id="n8n-chat-input" placeholder="Escribe un mensaje..." autocomplete="off"/>
        <button id="n8n-chat-send">Enviar</button>
      </div>
    </div>
    <button id="n8n-chat-btn">
      <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    </button>
  `;
  document.body.appendChild(container);

  const btn = document.getElementById('n8n-chat-btn');
  const win = document.getElementById('n8n-chat-window');
  const close = document.getElementById('n8n-chat-close');
  const msgs = document.getElementById('n8n-chat-messages');
  const input = document.getElementById('n8n-chat-input');
  const send = document.getElementById('n8n-chat-send');
  const typing = document.getElementById('n8n-chat-typing');

  // Load history
  const history = JSON.parse(localStorage.getItem('n8n_chat_history_' + sessionId) || '[]');
  history.forEach(m => appendMessage(m.text, m.sender, false));

  function saveHistory(text, sender) {
    history.push({ text, sender });
    localStorage.setItem('n8n_chat_history_' + sessionId, JSON.stringify(history));
  }

  function appendMessage(text, sender, save=true) {
    const div = document.createElement('div');
    div.className = 'msg ' + sender;
    if (typeof text === 'object') text = JSON.stringify(text);
    div.textContent = text;
    msgs.insertBefore(div, typing);
    msgs.scrollTop = msgs.scrollHeight;
    if (save) saveHistory(text, sender);
  }

  btn.addEventListener('click', () => {
    win.classList.toggle('open');
    if (win.classList.contains('open')) input.focus();
  });

  close.addEventListener('click', () => win.classList.remove('open'));

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
  
  send.addEventListener('click', sendMessage);

  async function sendMessage() {
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    appendMessage(text, 'user');

    typing.style.display = 'block';
    msgs.scrollTop = msgs.scrollHeight;

    try {
      const resp = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, sessionId, key: chatKey })
      });
      const data = await resp.json();
      
      typing.style.display = 'none';
      if (data.error) {
        appendMessage('Error: ' + data.error, 'system');
      } else {
        const reply = data.output || data.response || data.text || data[0]?.output || JSON.stringify(data);
        appendMessage(reply, 'bot');
      }
    } catch (err) {
      typing.style.display = 'none';
      appendMessage('No se pudo conectar con el servidor.', 'system');
      console.error(err);
    }
  }

})();

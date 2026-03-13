import { createChat } from '@n8n/chat';
import '@n8n/chat/style.css';
import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://autom-8-ai.app.n8n.cloud/webhook/830ffd22-c1ac-49f3-b1d2-22329e462ed6/chat',
      mode: 'window',
      showWelcomeScreen: true,
      defaultLanguage: 'en',
      initialMessages: [
        '¡Hola! Soy el asistente de TuWebSV.',
        '¿En qué puedo ayudarte hoy?'
      ],
      i18n: {
        en: {
          title: 'TuWebSV',
          subtitle: 'Respuestas rápidas sobre nuestros servicios',
          footer: '',
          getStarted: 'Iniciar conversación',
          inputPlaceholder: 'Escribe tu pregunta...',
          closeButtonTooltip: 'Cerrar',
        }
      }
    });
  }, []);

  return null;
}

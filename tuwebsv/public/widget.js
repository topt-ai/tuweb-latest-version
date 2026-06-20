(function() {
  const existingApp = document.getElementById('n8n-chat-widget');
  if (existingApp) existingApp.remove();

  const a = document.createElement('a');
  a.href = "https://wa.me/50372018215";
  a.target = "_blank";
  a.rel = "noreferrer";
  
  // Apply native styles mapping to the global CSS variables
  a.style.cssText = "position: fixed; bottom: 24px; right: 24px; z-index: 9999; width: 56px; height: 56px; background: var(--terra, #c4622d); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; box-shadow: 0 4px 20px rgba(196,98,45,0.35); transition: transform 0.2s; cursor: pointer;";
  
  // Add hover effect identical to Tailwind `hover:scale-108`
  a.onmouseover = () => a.style.transform = "scale(1.08)";
  a.onmouseout = () => a.style.transform = "scale(1)";
  
  // Inject Lucide-react MessageCircle natively
  a.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>`;
  
  document.body.appendChild(a);
})();


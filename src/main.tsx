
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add global styles for animation
const style = document.createElement('style');
style.textContent = `
  .perspective-1000 {
    perspective: 1000px;
  }
  
  .backface-hidden {
    backface-visibility: hidden;
  }
  
  .preserve-3d {
    transform-style: preserve-3d;
  }
  
  .flip {
    transform: rotateY(180deg);
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './force-rebuild.ts' // Force rebuild

createRoot(document.getElementById("root")!).render(<App />);

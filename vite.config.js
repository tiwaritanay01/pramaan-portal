import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'configure-pptx-headers',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && (req.url.includes('.pptx') || req.url.endsWith('.pptx'))) {
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.presentationml.presentation');
            res.setHeader('Content-Disposition', 'attachment; filename="Galacticos_SIH2026_Edited_Presentation.pptx"');
          }
          next();
        });
      }
    }
  ],
})

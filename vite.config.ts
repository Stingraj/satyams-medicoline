import type { IncomingMessage } from 'node:http';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import sendEmailHandler from './api/send-email';

async function parseJsonBody(req: IncomingMessage) {
  const chunks: Buffer[] = [];

  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  if (chunks.length === 0) {
    return {};
  }

  const rawBody = Buffer.concat(chunks).toString('utf8');
  return rawBody ? JSON.parse(rawBody) : {};
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  if (!process.env.RESEND_API_KEY && env.RESEND_API_KEY) {
    process.env.RESEND_API_KEY = env.RESEND_API_KEY;
  }

  return {
    plugins: [
      react(),
      {
        name: 'local-api-send-email',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            const requestUrl = req.url?.split('?')[0] || '';

            if (requestUrl !== '/api/send-email') {
              next();
              return;
            }

            try {
              if (req.method === 'POST') {
                (req as IncomingMessage & { body?: unknown }).body = await parseJsonBody(req);
              }

              await sendEmailHandler(req, res);
            } catch (error) {
              console.error('[vite-api] /api/send-email middleware failed', error);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                success: false,
                error: error instanceof Error ? error.message : 'Unknown Vite API middleware error',
              }));
            }
          });
        },
      },
    ],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});

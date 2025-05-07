// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    shikiConfig: {
      theme: 'dracula', // Puedes elegir el tema que prefieras
      langs: ['astro', 'javascript', 'typescript', 'css', 'html', 'json'], // Asegúrate de incluir 'astro' y otros lenguajes que uses
    },
  },
});
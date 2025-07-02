import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    base: '/webadv/',
    plugins: [react(), tailwindcss()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import babel from 'vite-plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), 
    tailwindcss(),
    babel({
      babelConfig: {
        presets: ['@babel/preset-react'],
        plugins: ['babel-plugin-macros']
      }
    })
  ],
  base: './desserts'
})

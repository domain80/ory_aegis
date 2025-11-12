import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  imports: {
    autoImport: false
  },
  routeRules: {
    '/**': {
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*', // or specify allowed origins
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Credentials': 'true'
      }
    }
  },
  devServer: {
    port: 5173,
    cors: {
      origin: '*',
      allowHeaders: "*",
      methods: "*",
      credentials: true,
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },
  runtimeConfig: {
    oryGateway: "http://127.0.0.1:4455",
    public: {
    }
  },
})

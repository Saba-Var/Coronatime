import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import ReactDOM from 'react-dom/client'
import i18n from 'i18next'
import React from 'react'
import App from 'App'
import 'index.css'

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ge'],
    fallbackLng: 'en',
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  })

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

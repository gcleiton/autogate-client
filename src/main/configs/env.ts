export const env = {
  isProduction: process.env.NODE_ENV === 'production',
  app: {
    name: process.env.APP_NAME
  },
  apis: {
    autogate: {
      baseUrl: process.env.AUTOGATE_API_BASE_URL
    }
  },
  hubs: {
    transitoCatraca: process.env.HUB_TRANSITO_CANCELA
  }
}

export const config = {
  baseApiUri: 'http://localhost:3000/api',
  database: {
    host: process.env.DB_HOST || '',
    database: process.env.DB_NAME || '',
    user: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
    port: process.env.DB_PORT || '',
  },
};

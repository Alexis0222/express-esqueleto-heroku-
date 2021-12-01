
const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'ec2-23-23-162-138.compute-1.amazonaws.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'ilfaskzpsvkdmb',
    password: env.DB_PASSWORD || '89f5ecc3cfa094e9011bb18e504c4931a6a821e8aa4df8c42341a58cbb9bd5d9',
    database: env.DB_NAME || 'd354acjapi1f7d',
     ssl: {
      rejectUnauthorized: false
      },
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
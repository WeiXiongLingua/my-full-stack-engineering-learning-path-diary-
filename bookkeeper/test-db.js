require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

(async () => {
  const result = await pool.query('SELECT NOW() as now');
  console.log(result.rows[0]);
  await pool.end();
})();

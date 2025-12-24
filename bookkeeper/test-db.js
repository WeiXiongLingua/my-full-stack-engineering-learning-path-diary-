require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Test the db connection.
(async () => {
    const result = await pool.query('SELECT NOW() as now');
    const result2 = await pool.query('SELECT * FROM transactions');
    console.log(result.rows[0]);
    console.table(result2.rows)
  await pool.end();
})();


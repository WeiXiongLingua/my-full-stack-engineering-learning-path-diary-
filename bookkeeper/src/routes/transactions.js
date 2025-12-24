const express = require('express');
const db = require('../db');

const router = express.Router();

// List
router.get('/', async (req, res) => {
  const { rows } = await db.query(
    'SELECT * FROM transactions ORDER BY occurred_on DESC, id DESC'
  );
  res.render('transactions/index', { items: rows });
});

// New form
router.get('/new', (req, res) => {
  res.render('transactions/new', { error: null, form: null });
});

// Create
router.post('/', async (req, res) => {
  try {
    const { type, amount, category, occurred_on, note } = req.body;

    // basic validation
    if (!['income', 'expense'].includes(type)) throw new Error('Invalid type');
    if (!category || !occurred_on) throw new Error('Category/date required');

    const amountNumber = Number(amount);
    if (!Number.isFinite(amountNumber) || amountNumber <= 0) {
      throw new Error('Amount must be > 0');
    }
    const amount_cents = Math.round(amountNumber * 100);

    await db.query(
      `INSERT INTO transactions (type, amount_cents, category, occurred_on, note)
       VALUES ($1, $2, $3, $4, $5)`,
      [type, amount_cents, category.trim(), occurred_on, note || null]
    );

    res.redirect('/transactions');
  } catch (err) {
    res.status(400).render('transactions/new', {
      error: err.message,
      form: req.body
    });
  }
});

// Edit form
router.get('/:id/edit', async (req, res) => {
  const id = Number(req.params.id);
  const { rows } = await db.query('SELECT * FROM transactions WHERE id = $1', [id]);
  if (!rows[0]) return res.status(404).send('Not found');

  res.render('transactions/edit', { error: null, item: rows[0] });
});

// Update (simple POST)
router.post('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { type, amount, category, occurred_on, note } = req.body;

    if (!['income', 'expense'].includes(type)) throw new Error('Invalid type');
    const amountNumber = Number(amount);
    if (!Number.isFinite(amountNumber) || amountNumber <= 0) throw new Error('Amount must be > 0');
    const amount_cents = Math.round(amountNumber * 100);

    const result = await db.query(
      `UPDATE transactions
       SET type = $1,
           amount_cents = $2,
           category = $3,
           occurred_on = $4,
           note = $5,
           updated_at = NOW()
       WHERE id = $6
       RETURNING id`,
      [type, amount_cents, category.trim(), occurred_on, note || null, id]
    );

    if (!result.rows[0]) return res.status(404).send('Not found');
    res.redirect('/transactions');
  } catch (err) {
    // try reload old item for re-render
    const id = Number(req.params.id);
    const { rows } = await db.query('SELECT * FROM transactions WHERE id = $1', [id]);
    res.status(400).render('transactions/edit', {
      error: err.message,
      item: rows[0]
    });
  }
});

// Delete
router.post('/:id/delete', async (req, res) => {
  const id = Number(req.params.id);
  await db.query('DELETE FROM transactions WHERE id = $1', [id]);
  res.redirect('/transactions');
});

module.exports = router;

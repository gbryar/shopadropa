var express = require('express');
var pool = require('../database/db');
var router = express.Router();

/* GET book by id */
router.get('/:id', async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM books WHERE id = $1', [req.params.id]);
    res.status(200).json({
      status: 'success',
      data: {
        book: result.rows[0]
      }
    });
  }
  catch (expection) {
    console.error(expection);
  }
});

/* GET all books */
router.get('/', async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM books');
    res.status(200).json({
      status: 'success',
      results: result.rows.length,
      data: {
        books: result.rows
      }
    });
  }
  catch (expection) {
    console.error(expection);
  }
});

/* POST create new book */
router.post('/', async (req, res, next) => {
  try {
    const result = await pool.query('INSERT INTO books (name, author, publishing_year, isbn) VALUES($1, $2, $3, $4) RETURNING *', 
      [req.body.name, req.body.author, parseInt(req.body.publishing_year) || 0, req.body.isbn]
    );
    res.status(201).json({
      status: 'success',
      data: {
        book: result.rows[0]
      }
    });
  }
  catch (exception) {
    console.error(exception);
  }
});

/* PUT update book */
router.put('/:id', async (req, res, next) => {
  try {    
    const result = await pool.query('UPDATE books SET name=$1, author=$2, publishing_year=$3, isbn=$4 WHERE id=$5 RETURNING *', 
      [req.body.name, req.body.author, parseInt(req.body.publishing_year) || 0, req.body.isbn, req.params.id]
    );
    res.status(200).json({
      status: 'success',
      data: {
        book: result.rows[0]
      }
    });
  }
  catch (exception) {
    console.error(exception);
  }
});

/* DELETE book by id */
router.delete('/:id', async (req, res, next) => {
  try {
    console.log('api server delete');
    var deletedBook = await pool.query('DELETE FROM books WHERE id = $1', [req.params.id]);
    res.status(204).json({
      status: 'success'
    });
  }
  catch (expection) {
    console.error(expection);
  }
});

module.exports = router;

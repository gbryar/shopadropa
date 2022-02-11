var express = require('express');
var pool = require('../database/db');
var router = express.Router();

/* GET book by id */
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    var book = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
    res.json(book.rows[0]);
  }
  catch (expection) {
    console.error(expection);
  }
});

/* GET all books */
router.get('/', async (req, res, next) => {
  try {
    var allBooks = await pool.query('SELECT * FROM books');
    res.json(allBooks.rows);
  }
  catch (expection) {
    console.error(expection);
  }
});

/* POST create new book */
router.post('/', async (req, res, next) => {
  try {
    const { name } = req.body;
    const { author } = req.body;
    const { publishing_year } = req.body;
    const { isbn } = req.body;
    
    var newBook = await pool.query('INSERT INTO books (name, author, publishing_year, isbn) VALUES($1, $2, $3, $4) RETURNING *', 
      [name, author, publishing_year, isbn]
    );
    res.json(newBook.rows[0]);
  }
  catch (exception) {
    console.error(exception);
  }
});

/* PUT update book */
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const { author } = req.body;
    const { publishing_year } = req.body;
    const { isbn } = req.body;
    
    var updatedBook = await pool.query('UPDATE books SET name=$1, author=$2, publishing_year=$3, isbn=$4 WHERE id=$5', 
      [name, author, publishing_year, isbn, id]
    );
    res.json('Book updated!');
  }
  catch (exception) {
    console.error(exception);
  }
});

/* DELETE book by id */
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    var deletedBook = await pool.query('DELETE FROM books WHERE id = $1', [id]);
    res.json('Book deleted!');
  }
  catch (expection) {
    console.error(expection);
  }
});

module.exports = router;

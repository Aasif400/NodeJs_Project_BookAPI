const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/book');

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://Aasif:Aasif123@cluster0.5jgpgal.mongodb.net/bookDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
// Add a new book
app.post('/books', async (req, res) => {
    const book =await Book.create({
        title:req.title,
        author:req.author,
        summary:req.summary,
        
        })
        
        res.status(200).json({
        data:book
        })
    
});

// View all books
app.get('/books', async (req, res) => {
    try {
        const allBooks = await Book.find();
        res.json(allBooks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// View a specific book by ID
app.get('/books/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a book
app.put('/books/:id', async (req, res) => {
    try {
        const { title, author, summary } = req.body;
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, { title, author, summary }, { new: true });
        res.json(updatedBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a book
app.delete('/books/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.json({ message: 'Book deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const router = require("express").Router()
const Book = require("../models/book")

// FIND ALL BOOKS
router.get("/", async (_req, res) => {
    try {
        const foundBooks = await Book.find()
        res.status(200).json(foundBooks)
    } catch(error) {
        res.status(404).json({message: `ERROR: ${error}`})
    }
})

// FIND BOOK BY ID
router.get("/:id", async (req, res) => {
    try {
        const foundBook = await Book.findById(req.params.id)
        res.status(200).json(foundBook)
    } catch(error) {
        res.status(404).json({message: `Could not find book with id: ${req.params.id}`})
    }
})

// PUT BOOK
router.put("/:id", async (req, res) => {
    try {
        await Book.findByIdAndUpdate(req.params.id, req.body)
        const updatedBook = await Book.findById(req.params.id)
        res.status(200).json(updatedBook)
    } catch(error) {
        res.status(404).json({message: `Couldn't update book with id: ${req.params.id}`})
    }
})

// DELETE BOOK
router.delete("/:id", async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id)
        res.status(200).json({message: `{${deletedBook.title}} was successfully deleted`})
    } catch(error) {
        res.status(404).json({message: `Couldn't delete book with id: ${req.params.id}`})
    }
})

// POST BOOK
router.post("/", async (req, res) => {
    try {
        const createdBook = await Book.create(req.body)
        res.status(200).json(createdBook)
    } catch(error) {
        res.status(404).json({message: "Couldn't create book"})
    }
})

module.exports = router
const router = require("express").Router()
const Book = require("../models/book")

router.get("/", async (_req, res) => {
    try {
        const foundBooks = await Book.find()
        res.status(200).json(foundBooks)
    } catch(error) {
        res.status(404).json({message: `ERROR: ${error}`})
    }
})

module.exports = router
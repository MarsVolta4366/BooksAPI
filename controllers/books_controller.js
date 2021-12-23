const router = require("express").Router()
const Book = require("../models/book")

router.get("/", async (req, res) => {
    const foundBooks = await Book.find()
    res.json(foundBooks)
})

module.exports = router
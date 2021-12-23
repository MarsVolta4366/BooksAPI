const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use("/books", require("./controllers/books_controller"))

app.get("/", (req, res) => {
    res.send("HI")
})

app.listen(process.env.PORT)
const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use("/books", require("./controllers/books_controller"))

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(process.env.PORT)
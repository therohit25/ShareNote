const mongoose = require("../data/dbconfig")

const BookSchema = new mongoose.Schema({
    "AutherName": { type: String, required: true },
    "Book": { type: String, required: true },
    "BookDes": { type: String, required: true },
    "BookFile": { type: String, required: true },
    "Image": { type: String, default: "Nopreview.png" },
    "BookTime": { type: Date, default: Date.now() },
})

const BookModel = new mongoose.model("Book", BookSchema);
module.exports = BookModel;
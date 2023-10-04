const mongoose = require("../data/dbconfig")
const { ObjectId } = mongoose.Schema.Types;

const ReviewSchema = mongoose.Schema({
    "BookId": { type: ObjectId, ref: "Book" },
    "Uname": { type: String, required: true },
    "Review": { type: String, required: true },
    "ReviewTime": { type: Date, default: Date.now() },
})

const ReviewModel = mongoose.model("review", ReviewSchema);
module.exports = ReviewModel;
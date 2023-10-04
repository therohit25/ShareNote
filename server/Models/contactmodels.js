const mongoose = require("../data/dbconfig")

const ContactSchema = new mongoose.Schema({
    "Email": { type: String, required: true },
    "Subject": { type: String, required: true },
    "Comment": { type: String, required: true },
    "CommentDate": { type: Date, default: Date.now() },
});


const ContactModel = new mongoose.model("ContactModel", ContactSchema);
module.exports = ContactModel;
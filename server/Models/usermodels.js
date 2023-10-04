const mongoose = require("../data/dbconfig")
const UserSchema = new mongoose.Schema({
    Fullname: { type: String, required: true },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    RegTime: { type: Date, default: Date.now() },
}
)

const UserModel = new mongoose.model('userregistration', UserSchema);

module.exports = UserModel;


const BookModel = require('../Models/bookmodels');
module.exports = async (req, res) => {


    try {
        let rows;
        if (req.body.BookId) {

            rows = await BookModel.find({ "_id": req.body.BookId })
        }
        else {

            rows = await BookModel.find({})
        }
        res.send(rows);

    }
    catch (err) {
        console.log(err.message)
        res.status(400).json({ "message": err.message });
    }
}
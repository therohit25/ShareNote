const BookModel = require('../Models/bookmodels');
module.exports = async (req, res) => {
    console.log(req.body.BookId)
    let BookId = req.body.BookId;

    try {
        const row = await BookModel.find({ "_id": BookId })
        console.log("Row is " + row)
        res.download(`./uploads/${row[0].BookFile}`)
    }
    catch (err) {
        res.json({ "message": err.message })
    }

}
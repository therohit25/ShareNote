const ReviewModel = require('../Models/Reviewmodels');

module.exports = async (req, res) => {
    BookId = req.body.BookId;

    try {
        const rows = await ReviewModel.find({ "BookId": BookId });
        if (rows.length >= 1) {
            res.send(rows);
        }

    }
    catch (err) {
        res.json({ "message": err.message })
    }

}
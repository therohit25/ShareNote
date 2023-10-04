const ReviewModel = require('../Models/Reviewmodels');
module.exports = (req, res) => {

    let Review = req.body.review;

    try {

        const review = new ReviewModel({
            "BookId": BookId,
            "Uname": req.session.user[0].Fullname,
            "Review": Review
        })
        review.save();

        res.json({ "message": "Successfully" }).status(200)
    }
    catch (err) {

        res.json({ "message": err.message })
    }
}
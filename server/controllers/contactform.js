const ContactModel = require('../Models/contactmodels');
module.exports = async (req, res) => {
    let Email = req.body.Email;
    let Subject = req.body.Subject;

    let Comment = req.body.Commment;
    try {
        const Comments = await new ContactModel({
            "Email": Email,
            "Subject": Subject,
            "Comment": Comment
        })
        Comments.save();
        res.send("1");
    }
    catch (err) {
        res.json({ "message": err.message })
    }

}
const UserModel = require('../Models/usermodels');

const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (req, res) => {

    let Fullname = req.body.Fullname;

    let Email = req.body.Email;
    let Password = req.body.Password;
    bcrypt.hash(Password, saltRounds, async (err, hash) => {
        if (err) {
            console.log("Error is " + err)
            res.json(err).status(400)
        }
        const User = await new UserModel({
            "Fullname": Fullname,
            "Email": Email,
            "Password": hash
        })
        User.save()
    })

}
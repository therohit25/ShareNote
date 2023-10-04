const UserModel = require('../Models/usermodels');

const bcrypt = require('bcrypt');

module.exports = async (req, res) => {

    let Email = req.body.lEmail;
    let Password = req.body.lPassword;
    try {
        const row = await UserModel.find({ "Email": Email });

        if (row.length > 0) {
            bcrypt.compare(Password, row[0].Password, (err, result) => {
                if (result) {
                    req.session.user = row;

                    res.json(row)

                }
                else {

                    res.json({ "msg": "Wrong Credentials!.." })
                }
            })
        }
        else {

            res.send({ "msg": "User doesn't Exists"});
        }
    }
    catch (err) {
        res.json({ "message": err.message })
    }



}


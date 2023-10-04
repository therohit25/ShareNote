

const sendUserDetails = (req, res) => {
    if (req.session.user) {
        res.send(req.session.user);
    }
}

const isloggedin = (req, res, next) => {
    if (req.session.user) {

        next()
    }

}

module.exports = { isloggedin, sendUserDetails }
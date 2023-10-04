
module.exports = (req, res) => {


    req.session.cookie.expires = -1;
    req.session.destroy(() => console.log("Session Destroyed"));
    res.json({ 'loggedIn': false });
}
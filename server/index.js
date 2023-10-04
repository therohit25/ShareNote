const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { config } = require("dotenv");
const userroute = require('./routes/User/UserRoutes');
const bookroute = require('./routes/Book/BookRoutes');
config({
    path: "./data/config.env"
})



const app = new express();
// app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
    origin: [process.env.FRONTEND_URI],
    methods: ["GET", "POST"],
    credentials: true
}));

// Port
const port = process.env.PORT || 3004;


app.use(cookieParser());
app.use(session({
    key: process.env.SESSION_KEY,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 60 * 60
    }
}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('uploads'))


//Set Routes 
app.use("/user", userroute)
app.use("/book", bookroute)

// Set Port as 3001
app.listen(port, () => {
    console.log("Server Started on Port " + port);
})
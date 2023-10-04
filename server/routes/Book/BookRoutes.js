const AddBook = require('../../controllers/AddBook');
const BookLoad = require('../../controllers/BookLoad');
const FetchReviews = require('../../controllers/FetchReviews');
const InsertReviews = require('../../controllers/InsertReviews');
const download = require('../../controllers/download');
const { isloggedin } = require('../../controllers/isloggedin');

const bookroute = require('express').Router();

bookroute.route('/BookLoad').post(isloggedin, BookLoad)
bookroute.route('/FetchReviews').post(isloggedin, FetchReviews)
bookroute.route('/InsertReview').post(isloggedin, InsertReviews)
bookroute.route('/AddBook').post(isloggedin, AddBook)
bookroute.route('/download').post(isloggedin, download)

module.exports = bookroute
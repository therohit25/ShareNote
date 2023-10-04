const BookModel = require('../Models/bookmodels');

const multer = require('multer');
let savefilename1 = "";
let savefilename2 = "";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {


        cb(null, "uploads")
    },
    filename: function (req, file, cb) {

        if (file.fieldname === "bookFile") {
            savefilename1 = file.originalname + "-" + Date.now() + ".pdf";

            cb(null, savefilename1)
        }
        else {
            savefilename2 = file.originalname + "-" + Date.now() + ".jpg";

            cb(null, savefilename2)
        }

    }
})

// Define the maximum size for uploading
// picture i.e. 1 MB. it is optional
const maxSize = 20 * 1000 * 1000;

const upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {

        // Set the filetypes, it is optional
        if (file.fieldname === "bookFile") {
            if (file.mimetype == "application/pdf" ||
                file.mimetype == "application/msword") {

                return cb(null, true);
            }
            else {
                return cb(null, false);
            }
        }
        else {
            if (file.mimetype == "image/png" ||
                file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {

                return cb(null, true);
            }
            else {
                return cb(null, false);
            }
        }

    }


}).fields([
    {
        name: "bookFile",
        maxCount: 1
    },
    {
        name: "imgFile",
        maxCount: 1
    },

]);
module.exports = (req, res) => {


    upload(req, res, function (err) {

        if (err) {

            // ERROR occurred (here it can be occurred due
            // to uploading image of size greater than
            // 1MB or uploading different file type)
            // console.log(err)

            res.status(400).json({ message: err })
        }
        else {

            // SUCCESS, image successfully uploaded


            let autherName = req.body.autherName;
            let book = req.body.book;

            let bookDes = req.body.bookDes;

            if (req.fileValidationError) {
                console.log("erro called" + req.fileValidationError)

                return res.status(400);
            }

            let bookFile = savefilename1;
            let imgFile = savefilename2;



            if (imgFile !== "") {
                const Book = BookModel.create({
                    AutherName: autherName,
                    Book: book,
                    BookDes: bookDes,
                    BookFile: bookFile,
                    Image: imgFile
                })
            }
            else {
                const Book = BookModel.create({
                    AutherName: autherName,
                    Book: book,
                    BookDes: bookDes,
                    BookFile: bookFile
                })
            }
            // res.send("Success, Image uploaded!")
            res.json({ message: "Success" }).status(200)
        }
    })
}
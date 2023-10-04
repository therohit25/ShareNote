import axios from "axios";
import React from "react";
import swal from "sweetalert";
import { useState } from "react";
import { useEffect } from "react";
import BookCard from "./BookCard";

function Books() {
  const [data, setData] = useState([]);
  const [authorName, setAuthorName] = useState("");
  const [book, setBook] = useState("");
  const [bookDes, setBookDes] = useState("");
  const [bookFile, setBookFile] = useState("");
  const [imgFile, setImgFile] = useState("");
  const [imgerr, setImgerr] = useState("");
  const [fileerr, setFileerr] = useState("");

  const AddBook = () => {
    if (authorName !== "" && book !== "" && bookDes !== "" && bookFile !== "") {
      const formdata = new FormData();
      formdata.append("autherName", authorName);
      formdata.append("book", book);
      formdata.append("bookDes", bookDes);
      formdata.append("bookFile", bookFile);
      if (imgFile !== "") {
        formdata.append("imgFile", imgFile);
      }

      axios
        .post("http://localhost:3002/book/AddBook", formdata)
        .then((res) => {
          if (res) {
            console.log(res.data);
            swal({
              text: `Book Uploaded`,
            });

            setAuthorName("");
            setBook("");
            setBookDes("");
            setBookFile("");
          }
          BookLoad();
        })
        .catch((err) => {
          console.log("Error" + err);

          swal({
            text: "Upload .pdf files",
          });

          console.log(err);
        });
    } else {
      console.log("not caled");
    }
  };
  const BookLoad = () => {
    axios
      .post("http://localhost:3002/book/BookLoad")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    BookLoad();
  }, []);

  return (
    <div>
      <div className="container my-3">
        <div className="row my-2">
          <div className="h1 text-center semi-heading text-uppercase text-primary ">
            Notes <i className="fas fa-book px-1"></i>
          </div>
        </div>
        <div className="row justify-content-center my-5">
          {data.length === 0 ? (
            <p className="w-50 strong text-center bg-info rounded-5 p-3">
              No Books Yet
            </p>
          ) : (
            data?.map((item) => {
              return (
                <div className="col-md-3 my-2" key={item._id}>
                  <BookCard
                    BookId={item._id}
                    BookTitle={item.Book}
                    AuthorName={item.AutherName}
                    ImgFile={item.Image}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>

      <div
        className="modal fade"
        id="OrderModal"
        tabIndex="-1"
        aria-labelledby="OrderModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="OrderModalLabel">
                Order Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <p style={{ fontSize: "1.5rem" }}>
                Downloading!... <i className="fas fa-check-circle"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div className="container-fluid d-flex justify-content-center align-items-center py-4">
        <button
          type="button"
          className="btn btn-outline-info text-dark"
          data-bs-toggle="modal"
          data-bs-target="#LoginModal"
        >
          Add Book <i className="fas fa-book-open px-2"></i>
        </button>
      </div>

      <div
        className="modal fade"
        id="LoginModal"
        tabindex="-1"
        aria-labelledby="LoginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title semi-heading text-uppercase"
                id="LoginModalLabel"
              >
                Book Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="Author" className="form-label">
                    Author
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Author"
                    name="autherName"
                    value={authorName}
                    placeholder="Author Name"
                    onChange={(e) => {
                      setAuthorName(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Book" className="form-label">
                    Book
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Book"
                    name="book"
                    placeholder="Book Name"
                    value={book}
                    onChange={(e) => {
                      setBook(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="mb-3" htmlFor="Book_des" name="Book_des">
                    Book Description:
                  </label>
                  <div className="col-sm-10">
                    <textarea
                      className="form-control"
                      rows="5"
                      id="Book_des"
                      name="bookDes"
                      placeholder="Book Description"
                      value={bookDes}
                      onChange={(e) => {
                        setBookDes(e.target.value);
                      }}
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="mb-3 my-2">
                  <label htmlFor="Upload" className="form-label">
                    Upload Book{" "}
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="Upload"
                    placeholder="Choose Ebook"
                    name="bookFile"
                    onChange={(e) => {
                      setBookFile(e.target.files[0]);
                      console.log(e.target.files[0].type);
                      if (
                        e.target.files[0].type === "application/pdf" ||
                        e.target.files[0].type === "application/msword"
                      ) {
                        setFileerr("");
                      } else {
                        setFileerr("Upload Only .pdf,.doc files");
                      }
                    }}
                    required
                  />
                  {fileerr && <small className="form-text">{fileerr}</small>}
                </div>

                <div className="mb-3 my-2">
                  <label htmlFor="PreviewimgUpload" className="form-label">
                    Book Preview Image(Optional)
                  </label>

                  <input
                    type="file"
                    className="form-control"
                    id="PreviewimgUpload"
                    placeholder="Choose First Page Preview Image"
                    name="imgFile"
                    onChange={(e) => {
                      setImgFile(e.target.files[0]);
                      if (
                        e.target.files[0].type === "image/png" ||
                        e.target.files[0].type === "image/jpg" ||
                        e.target.files[0].type === "image/jpeg"
                      ) {
                        setImgerr("");
                      } else {
                        setImgerr("Upload Only jpeg,jpg,png files");
                      }
                    }}
                    required
                  />
                  {imgerr && <small className="form-text">{imgerr}</small>}
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  AddBook();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books;

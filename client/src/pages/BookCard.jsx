import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FileDownload from "js-file-download";

function BookCard(props) {
  const Download = (id) => {
    axios
      .post(
        "http://localhost:3002/book/download",
        { BookId: id },
        { responseType: "blob" }
      )
      .then((res) => {
        FileDownload(res.data, "download.pdf");
      });
  };

  return (
    <div className="card">
      <img
        src={`http://localhost:3002/${props.ImgFile}`}
        className="rounded d-block"
        alt="..."
      />

      <div className="card-body text-center">
        <h5 className="card-title">{props.BookTitle}</h5>
        <div className="d-flex gap-2 w-100 flex-wrap justify-content-center align-items-center">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#OrderModal"
            onClick={() => Download(props.BookId)}
          >
            Download<i className="fas fa-file-download px-2"></i>
          </button>
          <button type="button" className="btn btn-warning">
            <Link
              to={`/Reviews/${props.BookId}`}
              className="text-decoration-none"
            >
              Reviews<i className="fas fa-eye px-2"></i>
            </Link>
          </button>
        </div>
      </div>
      <div className="card-footer">
        <small className="text-muted">~{props.AuthorName}</small>
      </div>
    </div>
  );
}

export default BookCard;

import React from "react";
import { Link, useParams } from "react-router-dom";

import "../css/reviews.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import swal from "sweetalert";

function Reviews() {
  const [data, setData] = useState([]);

  const [review, setReview] = useState("");
  const [bookdata, setBookdata] = useState([]);

  const { BookId } = useParams();
  const InsertReview = () => {
    console.log("Message Sending");
    axios
      .post("http://localhost:3002/book/InsertReview", { review: review })
      .then((res) => {
        if (res.data === "Failed to Insert Review") {
          swal({
            text: res.data,
          });
        } else {
          console.log("Message Sent");

          FetchReviews();
          setReview("");
        }
      });
  };

  let ip = { BookId: BookId };
  const FetchReviews = () => {
    axios
      .post("http://localhost:3002/book/FetchReviews", ip)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // let count = 0;

  useEffect(() => {
    // axios.defaults.withCredentials = true;
    // if (count === 0) {
    axios.post("http://localhost:3002/book/BookLoad", ip).then((res) => {
      setBookdata(res.data[0]);
    });
    //   count++;
    // }
    FetchReviews();
  }, []);

  return (
    <div>
      <div className="main-container">
        <div className="make-flex-column make-align-center ">
          <div className="book-img imgsize">
            <img
              src={`http://localhost:3002/${bookdata.Image}`}
              alt=""
              srcset=""
              className="w-100 h-100"
            />
          </div>
          <d className="px-4  position-relative w-100 d-flex justify-content-between">
            <p className="book-des text-center w-100">{bookdata.BookDes}</p>
            <div>
              <button type="button" className="btn btn-dark ">
                <Link
                  to={`/Preview/${bookdata.BookFile}`}
                  className="text-decoration-none"
                >
                  Preview
                </Link>
              </button>
            </div>
          </d>
          <div className="review-box make-flex justify-content-center ">
            <input
              type="text"
              name="review"
              id="review"
              placeholder="Write Review"
              className="form-control w-50"
              value={review}
              onChange={(e) => {
                setReview(e.target.value);
                console.log(review);
              }}
            />
            <button className="btn btn-primary" onClick={InsertReview}>
              Submit
            </button>
          </div>
        </div>
        <div className="make-flex-column">
          <h1 className="w-100 text-center semi-heading text-uppercase">
            Reviews
          </h1>

          <div className="reviews make-flex-column">
            {data?.length !== 0 ? (
              data?.map((item) => {
                return (
                  <div
                    key={item.ReviewId}
                    className="review-list make-flex-column"
                  >
                    <div className="prof-sec d-flex gap-2 align-items-center ">
                      <div className="d-flex user-prof">
                        <i className="far fa-user w-100"></i>
                      </div>
                      <div className="uname" style={{ fontWeight: "Bold" }}>
                        {item.Uname}
                      </div>
                    </div>
                    <div className="user-review">
                      <input
                        type="text"
                        name="review"
                        id="review"
                        disabled
                        value={item.Review}
                        className="form-control w-100 p-3"
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="strong text-center bg-info rounded-5 p-3">
                No Reviews Yet
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;

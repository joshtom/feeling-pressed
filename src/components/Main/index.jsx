import React from "react";
import { Link } from 'gatsby'
import "./main.scss";

const bgImage = {
  background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url('https://res.cloudinary.com/john-pels/image/upload/v1590805830/jack-sharp-OptEsFuZwoQ-unsplash.png') center center no-repeat`,
  backgroundSize: "cover",
};
export default function Main() {
  return (
    <div className="main" style={bgImage}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto col-md-12 col-sm-12">
            <h1 className="text-center text-white"> ILLUMINATING THE WORLD THROUGH THE WORD. </h1>
            <p className="col-lg-8 col-md-12 col-sm-12 p-0 text-center m-auto mb-4">
              {" "}
              "And it came to pass, that, as the people pressed upon Him to hear
              the word of GOD, he stood by the lake of Gennesaret"{" "}
            </p>
            <div className="col-lg-8 d-flex m-auto mt-4 learn-more-link">
            <Link to="/blog" className="m-auto">
              <button className="learn-btn">
              Learn More
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

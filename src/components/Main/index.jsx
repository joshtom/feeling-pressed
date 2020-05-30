import React from "react";
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
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h1 className="display-4"> BE INSPIRED </h1>
            <p className="col-lg-8 col-md-6 col-sm-12 p-0">
              {" "}
              "And it came to pass, that, as the people pressed upon Him to hear
              the word of GOD, he stood by the lake of Gennesaret"{" "}
            </p>
            {/* <button className="mr-4 btn-signup"> Signup </button>
            <button className="btn-learn-more"> Learn More </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

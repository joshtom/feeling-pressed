import React from "react";
import "./styles.scss";
import { Link } from "gatsby";

export default function Mission() {
  return (
    <div className="mission">
      <div className="container">
        <div className="">
          <h3> Why Feeling Pressed? </h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-12 no-gutters">
            <div className="mission-card" id="card-1">
              <header>
                <span className="cube"></span>Purpose
              </header>
              <article>
                To inspire believers of Jesus, to walk a closer and exciting
                Journey with Christ.
              </article>
              <Link to="/about">
                {" "}
                Read More <i className="fa fa-angle-right ml-2" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 no-gutters">
            <div className="mission-card" id="card-2">
              <header>
                <span className="cube"></span>Mission
              </header>
              <article>
                To reveal to seekers on how they can begin a Journey with Jesus Christ
              </article>{" "}
              <br />
              <Link to="/about">
                {" "}
                Read More <i className="fa fa-angle-right ml-2" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 no-gutters">
            <div className="mission-card" id="card-3">
              <header>
                <span className="cube"></span>Values
              </header>
              <article>
                To provide resources for Jesus' followers so that they can grow.
              </article>{" "}
              <br />
              <Link to="/about">
                {" "}
                Read More <i className="fa fa-angle-right ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

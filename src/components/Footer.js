import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faTwitter,
//   faInstagram
// } from "@fortawesome/free-brands-svg-icons";
// import { faChevronRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./footer.styles.scss";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <h1 className="footer__brand text-center">Feeling Pressed</h1>

      <div className="row">
        <div className="col-lg-8 offset-lg-2 col-sm-12">
          <p className="footer- mb-5 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            tenetur quas iure doloremque? Qui illum deserunt, nostrum,
            doloremque quaerat obcaecati unde ut nihil itaque commodi blanditiis
            non minima neque harum.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-sm-12">
          <section className="footer__form-wrap">
            <h6 className="form-heading text-center">Subscribe</h6>
            <form action="" className="footer-form">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Email..."
                  className="form-input"
                />{" "}
                <button className="btn-submit">
                  {" "}
                  {/* <FontAwesomeIcon icon={faChevronRight} /> */}
                  <i className="fa fa-chevron-right">  </i>
                  
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-sm-12">
          <section className="social-media">
            <div className="media-handles mt">
              {/* <FontAwesomeIcon icon={faFacebookF} className="icon facebook" /> */}
              <i className="fa fa-facebook-f icon facebook">  </i>
            </div>
            <div className="media-handles mt">
              {/* <FontAwesomeIcon icon={faTwitter} className="icon twitter" /> */}
              <i className="fa fa-twitter icon twitter">  </i>
            </div>

            <div className="media-handles mt">
              {/* <FontAwesomeIcon icon={faEnvelope} className="icon envelope" /> */}
              <i className="fa fa-envelope icon envelope">  </i>
            </div>
            <div className="media-handles">
              {/* <FontAwesomeIcon icon={faInstagram} className="icon instagram" /> */}
              <i className="fa fa-instagram icon instagram">  </i>
            </div>
          </section>
        </div>
      </div>
      <p className="copyright text-center">
        2020 Copyright &copy; Feeling Pressed International
      </p>
    </div>
  </footer>
);
export default Footer;

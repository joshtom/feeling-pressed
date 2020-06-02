import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faTwitter,
//   faInstagram
// } from "@fortawesome/free-brands-svg-icons";
// import { faChevronRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby"
import "./footer.styles.scss";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <h1 className="footer__brand text-center">Feeling Pressed</h1>

      <div className="row footer__row">
        <div className="col-lg-8 offset-lg-2 col-sm-12">
          <p className="footer- text-center">
            Quick Links
          </p>
          <ul className="text-center mb-3 footer__quickLinks">
            <li>
              <Link to="/about" className="links">ABOUT</Link>
            </li>
            <li>
              <Link to="/blog" className="links">BLOG</Link>
            </li>
            <li>
              <Link to="/contact" className="links">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-sm-12">
          {/* <section className="footer__form-wrap">
            <h6 className="form-heading text-center">Subscribe</h6>
            <form action="" className="footer-form">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Email..."
                  className="form-input"
                />
                <button className="btn-submit">
                  <i className="fa fa-chevron-right">  </i>
                  
                </button>
              </div>
            </form>
          </section> */}
          <h5 className="text-center"> Email Newsletter coming soon </h5>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-sm-12">
          <section className="social-media">
            <a href="#" target="_blank">
            <div className="media-handles mt">
              <i className="fa fa-facebook-f icon facebook">  </i>
            </div>
            </a>
            <a href="https://twitter.com/feelpressed" target="_blank">
            <div className="media-handles mt">
              <i className="fa fa-twitter icon twitter">  </i>
            </div>
            </a>
            <a href="https://twitter.com/feelpressed" target="_blank">
            <div className="media-handles mt">
              <i className="fa fa-envelope icon envelope">  </i>
            </div>
            </a>
            <a href="#" target="_blank">
            <div className="media-handles">
              <i className="fa fa-instagram icon instagram">  </i>
            </div>
            </a>
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

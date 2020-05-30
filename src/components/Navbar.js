import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";
import "./Navbar.styles.scss";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar  is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand" style={{ width: "100%" }}>
            <Link
              to="/"
              className="navbar-item"
              style={{ float: "left", display: "block" }}
              title="Logo"
            >
              <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/about" id="nav__item">
                About
              </Link>
              <Link className="navbar-item" to="/products" id="nav__item">
                Products
              </Link>
              <Link className="navbar-item" to="/blog" id="nav__item">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact" id="nav__item">
                Contact
              </Link>
              <Link
                className="navbar-item"
                to="/contact/examples"
                id="nav__item"
              >
                Form Examples
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;

import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import "./contact.styles.scss";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
      <>
    <main className="contact-page">
      <section className="people-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4 col-sm-12 ">
              <h2 className="h2 text-center">Contact Us</h2>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="white-bg">
          <div className="row">
            <div className="col-lg-6 col-sm-12 ">
              <div className="right-col">
                <h3 className="r-col-h3">Let's get in touch</h3>
                <p className="grey-text">
                  Our team is fast to respond to messages. Get in touch with us today!
                </p>
                <div className="contact-details m-top">
                  <div className="icon">
                    <i className="fa fa-phone icon mt-3"></i>
                  </div>
                  <div className="phone-no">
                    <span>+234 816 622 314 </span> <br />
                    <span>+234 816 622 314</span>
                  </div>
                </div>
                <div className="contact-details m-top">
                  <div className="icon">
                    <i className="fa fa-envelope icon"></i>
                  </div>
                  <div className="phone-no">
                    <span>feelingpressed.com</span>
                  </div>
                </div>
                <section className="social-media">
                  <div className="media-handles mt">
                    <i className="fa fa-facebook icon"></i>
                  </div>
                  <div className="media-handles mt">
                    <i className="fa fa-twitter icon"></i>
                  </div>

                  <div className="media-handles mt">
                    <i className="fa fa-envelope icon"></i>
                  </div>
                  <div className="media-handles">
                    <i className="fa fa-instagram icon"></i>
                  </div>
                </section>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="left-col">
                <form 
                action="" 
                className="contact-form"
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                  <h3 className="form-h3 text-center pb-4">
                    Send us a Message
                  </h3>
                  <input
                    placeholder="FullName"
                    className="form-input"
                    type={'text'}
                    name={'name'}
                    onChange={this.handleChange}
                    id={'name'}
                    required={true}
                  />
                  {/* <input
                    type="text"
                    placeholder="Last Name"
                    className="form-input"
                  /> */}
                  <input
                    placeholder="Email"
                    className="form-input"
                    type={'email'}
                    name={'email'}
                    onChange={this.handleChange}
                    id={'email'}
                    required={true}
                  />
                  <label htmlFor="message">Message</label>
                  <textarea
                    cols="30"
                    rows="10"
                    className="message-input"
                    name={'message'}
                    onChange={this.handleChange}
                    id={'message'}
                    required={true}
                  ></textarea>

                  <button className="btn-send" type="submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </>
      </Layout>
    )
  }
}

import React from "react";
import Layout from '../components/Layout'
import "./about.styles.scss";

const AboutPage = () => (
  <>
  <Layout>
    <main className="about-page">
      <section className="people-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4 col-sm-12 ">
              <h2 className="h2 text-center">About Us</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="vision">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-sm-12">
              <h1 className=" h1 text-center">Our Vision</h1>
              <p className="p">
              We are a platform centered around illuminating hearts and reshaping Earth through the Word of God. We believe every lives can be touched and transformed by being exposed to the right content and making it free of charge to every individuals, irrespective of gender, tribe, or religion.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mission">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-sm-12">
              <h1 className="h1 text-center">Our Mission</h1>
              <p className="p">
              We are not denominational and never want to be. As we move faster to wiping away the cosmos, we intensify the need to break denominational barriers and bring as many million souls to the reality of heaven and hell thereby defeating the struggling lord of this world.
               <br />
               <br />

With a passion and zeal for the lost, we ensure the reality of heaven is enjoyed here on earth. Our strategy is to reach, win, and grow a soul and that singular soul reaches, wins and grows another through every available godly means.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="values">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-sm-12">
              <h1 className="h1 text-center">Our Values</h1>
              <p className="p d-flex">
                <ul className="m-auto" type="circle">
                  <li> I am a SERVANT to all men, therefore, no  COMPETITION/RIVALRY </li>
                  <li> I speak to EXPRESS God not to OPPRESS or PLEASE men  </li>
                  <li> I live by FAITH Not by FATE </li>
                  <li> No one is too bad for God to blend. </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </Layout>
  </>
);

export default AboutPage;

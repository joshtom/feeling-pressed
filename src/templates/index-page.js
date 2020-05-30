import React from "react";
import Main from "../components/Main";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Welcome from "../components/Welcome";
import Mission from "../components/Mission";
import BlogRoll from "../components/BlogRoll";

export default function IndexPage() {
  return (
    <div>
      <Layout>
        <Main />
        <Welcome />
        <Mission />
        <section className=" section--gradient">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}

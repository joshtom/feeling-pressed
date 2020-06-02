import React from "react";
import TeamCard from "./TeamCard";
import { Data } from "../../components/teamData/teamData";
import Layout from '../../components/Layout'
import "./team.styles.scss";

const OurTeam = () => (
  <>
  <Layout>
  <main className="our-team">
    <div className="container">
      <h1 className="team-heading text-center">Meet Our Team</h1>
      <div className="row">
        {Data.map((team) => (
          <div className="col-md-4 m-auto" key={team.id}>
            <TeamCard
              imgUrl={team.imgUrl}
              name={team.name}
              role={team.role}
              text={team.text}
              twHandle={team.twHandle}
              fbHandle={team.fbHandle}
              mdHandle={team.mdHandle}
            />
          </div>
        ))}
      </div>
    </div>
  </main>
  </Layout>
  </>
);

export default OurTeam;

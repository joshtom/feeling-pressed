import React from "react";
import "./team.styles.scss";

const TeamCard = ({ imgUrl, name, role, text }) => (
  <div className="team-card">
    <div className="img">
      <img src={imgUrl} alt="img" className="team-img" />
    </div>
    <span className="name">{name}</span>
    <span className="role">{role}</span>
    <p className="text">{text}</p>
    <div className="social-media">
      <div className="media-handles mt">
        <i className="icon facebook fa fa-facebook"></i>
      </div>
      <div className="media-handles mt">
        <i className="icon twitter fa fa-twitter"></i>
      </div>

      <div className="media-handles">
        <i className="icon envelope fa fa-envelope"></i>
      </div>
    </div>
  </div>
);

export default TeamCard;

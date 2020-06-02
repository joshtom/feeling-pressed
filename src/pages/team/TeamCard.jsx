import React from "react";
import { Link } from "react-router-dom";
import "./team.styles.scss";

const TeamCard = ({ imgUrl, name, role, text, twHandle, fbHandle, mdHandle }) => (
  <div className="team-card">
    <div className="img">
      <img src={imgUrl} alt="img" className="team-img" />
    </div>
    <span className="name">{name}</span>
    <span className="role">{role}</span>
    <p className="text">{text}</p>
    <div className="social-media">
      <a href={fbHandle} target="_blank">
      <div className="media-handles mt">
        <i className="icon facebook fa fa-facebook"></i>
      </div>
      </a>
      <a href={twHandle} target="_blank">
      <div className="media-handles mt">
        <i className="icon twitter fa fa-twitter"></i>
      </div>
      </a>
      <a href={mdHandle} target="_blank">
      <div className="media-handles">
        <i className="icon envelope fa fa-envelope"></i>
      </div>
      </a>
    </div>
  </div>
);

export default TeamCard;

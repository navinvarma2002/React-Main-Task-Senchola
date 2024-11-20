import React from "react";
import "./styles.css";
const TourCard = ({ image, title, subtitle }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title text-uppercase">{title}</h5>
        <p className="card-text">{subtitle}</p>
        <a href="#" className="btn btn-success">
          Info
        </a>
      </div>
    </div>
  );
};

export default TourCard;

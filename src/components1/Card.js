import React, { Fragment } from "react";

function Card(props) {
  return (
    <Fragment>
      <div className="card bottom-card">
        <div className="cardTitle">
          <h5 className="card-title">{props.title}</h5>
          <i className="fa-solid fa-plus"></i>
        </div>
        <img src={props.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;

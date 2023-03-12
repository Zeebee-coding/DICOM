import React, { Fragment } from "react";
// import { Button } from "@mui/material";

import "./card.css";

const Card = ({ avatar, name, time, type, message }) => {
  const isFile = type === "file";
  return (
    <Fragment>
      <div className="cards">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="content">
          <div className="name">{name}</div>
          <div className="message">{message}</div>
          <div className="actions">
            {isFile ? (
              <a href={message} download>
                <button>Download</button>
              </a>
            ) : (
              <>
                <button>Reply</button>
              </>
            )}
          </div>
        </div>
        <div className="time">{time}</div>
      </div>
    </Fragment>
  );
};

export default Card;

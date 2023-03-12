import React, { Fragment } from "react";
import image from "../../images/card1.jpg";
import person1 from "../../images/Person1.png";
import person2 from "../../images/Person2.jpg";
import person3 from "../../images/Person3.jpg";
import Card from "../Card";
import "./body.css";

function Body() {
  return (
    <Fragment>
      <div className="body-container body">
        <div className="main-body">
          {/* -------------Main Card-------------  */}
          <div className="card main-card">
            <div className="cardTitle">
              <h5 className="card-title">CBCT</h5>
              <i className="fa-solid fa-plus"></i>
            </div>
            <img src={image} className="card1 card-img-top" alt="..." />
            <div className="card1-footer my-3">
              <img src={image} className="card1-images" alt="" />
              <img src={image} className="card1-images" alt="" />
              <img src={image} className="card1-images" alt="" />
              <img src={image} className="card1-images" alt="" />
              <img src={image} className="card1-images" alt="" />
              <img src={image} className="card1-images" alt="" />
              <img src={image} className="card1-images" alt="" />
              <a href="/" className="card-link">
                View all
              </a>
            </div>
          </div>

          {/* ---------------Comments Section---------------  */}

          <div className="card">
            <div className="cardTitle">
              <h5 className="card-title">Comments</h5>
              <i className="fa-solid fa-plus"></i>
            </div>
            <div className="comment-section">
              <div className="comment-head">
                <p>Radiological</p>
                <i
                  className="fa-solid fa-comment"
                  style={{ color: "#DC518Fff" }}
                ></i>
              </div>
              <div className="comment-body">
                <p className="profile-name my-1">
                  <strong>Ahmad Ali Asghar</strong>
                </p>
                <div className="comments">
                  <img className="profile-pics" src={person1} alt="" />
                  <div className="comment-box px-1 mx-1">
                    <p>
                      It is clearly seen there that carious cavities are
                      locate...
                    </p>
                  </div>
                </div>
                <div className="comments my-1">
                  <div className="comment-box px-1 mx-1">
                    <p>Jerome, Have you seen the report? What do you think?</p>
                  </div>
                  <img className="profile-pics" src={person2} alt="" />
                </div>
                <p className="profile-name my-1">
                  <strong>Hamza Bin Shafqat</strong>
                </p>
                <div className="comments">
                  <img className="profile-pics" src={person3} alt="" />
                  <div className="comment-box px-1 mx-1">
                    <p>Chewing surface of teeth 16 and 12, are located</p>
                  </div>
                </div>
              </div>
            </div>
            <a href="/" className="card-link my-3">
              View all
            </a>
          </div>
          {/* </div> */}

          {/* ---------------Tasks Section---------------  */}
          <div className="card">
            <div className="cardTitle">
              <h5 className="card-title">Tasks</h5>
              <i className="fa-solid fa-plus"></i>
            </div>
            <div className="card-3">
              <button className="btn btn-sm btn-primary card3-buttons">
                My 6
              </button>
              <button className="btn btn-sm btn-outline-primary mx-2 card3-buttons">
                All 23
              </button>
              {/* Item One  */}
              <div className="card3-items">
                <div className="task-left">
                  <i
                    className="fa-sharp fa-regular fa-circle"
                    style={{ color: "grey" }}
                  ></i>
                </div>
                <div className="task-right">
                  <p>Therapist</p>

                  <div className="task-right-bottom">
                    <img className="task-profile-pics" src={person2} alt="" />
                    <i
                      className="task-bottom-icon fa-solid fa-comment"
                      style={{ color: "#DC518Fff" }}
                    ></i>
                    <p>
                      <strong>May 4</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* -----------Item 02  */}
            <div className="card3-items">
              <div className="task-left">
                <i
                  className="fa-solid fa-circle-check"
                  style={{ color: "#7A69F5ff" }}
                ></i>
              </div>
              <div className="task-right">
                <p>Therapist</p>

                <div className="task-right-bottom">
                  <img className="task-profile-pics" src={person2} alt="" />
                  <i className="task-bottom-icon fa-solid fa-comment"></i>
                  <p>
                    <strong>May 4</strong>
                  </p>
                </div>
              </div>
            </div>
            {/* --------------Item 03  */}
            <div className="card3-items">
              <div className="task-left">
                <i
                  className="fa-sharp fa-regular fa-circle"
                  style={{ color: "grey" }}
                ></i>
              </div>
              <div className="task-right">
                <p className="card-title">Therapist</p>

                <div className="task-right-bottom">
                  <img className="task-profile-pics" src={person2} alt="" />
                  <i className="task-bottom-icon fa-solid fa-comment"></i>
                  <p>
                    <strong>May 4</strong>
                  </p>
                </div>
              </div>
            </div>
            {/* ---------------Item 04  */}
            <div className="card3-items">
              <div className="task-left">
                <i
                  className="fa-solid fa-circle-notch"
                  style={{ color: "#7A69F5ff" }}
                ></i>
              </div>
              <div className="task-right">
                <p>Therapist</p>

                <div className="task-right-bottom">
                  <img className="task-profile-pics" src={person2} alt="" />
                  <p style={{ color: "grey" }}>
                    <strong>May 4</strong>
                  </p>
                </div>
              </div>
            </div>
            <a href="/" className="card-link">
              View all
            </a>
          </div>

          {/* ---------------Bottom Card Items---------------  */}

          <Card title="Docs" imageUrl={image} />
          <Card title="PANO, FMX" imageUrl={image} />
          <Card title="IOS" imageUrl={image} />
          <Card title="Dental Photos" imageUrl={image} />
        </div>
      </div>
    </Fragment>
  );
}

export default Body;

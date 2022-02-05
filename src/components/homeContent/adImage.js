import React from "react";
import "../../components/homeContent/adImage.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

function AdImage() {
  return (
    <div className="adImageDiv">
      <div className="offerDiv">
        <h2>Learn according to schedule</h2>

        <p>Study any topic, anywhere. Explore thousands of Mentors.</p>

        <div className="searchBarDiv">
          <input
            className="searchBar"
            placeholder="What do you want to learn?"
          ></input>
          <div className="searchIconDiv">
            <SearchOutlinedIcon className="searchIcon" />
          </div>
        </div>
      </div>
      <img
        className="adImage"
        src="https://reputationtoday.in/wp-content/uploads/2020/09/Mentoring.png"
        alt="AdImage"
      />
    </div>
  );
}

export default AdImage;

import React from "react";
import { Link } from "react-router-dom";

const Main = ({ getInput, value }) => {
   
  return (
    <div className="main-page">
      <h1>Area he visited yesterday for marketing</h1>

      <input
        type="text"
        name="city"
        id="city"
        onChange={(e) => getInput(e.target.value)}
        value={value}
      />
      <div className="button">
        <Link to={"/next"}>Next</Link>
      </div>
   
      
    </div>
  );
};

export default Main;

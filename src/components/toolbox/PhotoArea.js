import React, { useEffect, useState } from "react";
import Circles7x10 from "./Circles7x10";
import { useMediaQuery } from "react-responsive";

function PhotoArea({ data }) {
  return (
  <div className="photoArea">
      <div className="circleArea">
        <Circles7x10></Circles7x10>
      </div>
      <img src={data.src} alt={data.alt}></img>
      {data.bar === "bar" ? (
        <div className="resultArea">
          <div className="box">
         
          </div>
          <p>Corredora Certificada</p>
        </div>
      ) : null}
    </div>
  );
}

export default PhotoArea;

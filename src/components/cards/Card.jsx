import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
import img1 from "../../img/photo_2024-02-03_09-47-36.jpg";
import img2 from "../../img/photo_2024-02-03_09-47-31.jpg";
import img3 from "../../img/photo_2024-02-03_09-50-56.jpg";
import img4 from "../../img/photo_2024-02-03_09-50-51.jpg";
import Cards from "./Cards";

function Card() {
  return (
    <>
      <div className="container-card">
        <Cards
          name={"Alisher"}
          img={img1}
          imgLink={
            "https://img.icons8.com/material-outlined/100/535353/code.png"
          }
          style={"hidden"}
        />
        <Cards
          name={"Shohjahon"}
          img={img2}
          imgLink={
            "https://img.icons8.com/material-outlined/100/535353/code.png"
          }
          imgLink2={
            "https://img.icons8.com/fluency-systems-regular/48/designer.png"
          }
          style={
            "code-img1 inline-block inline-block bg-white rounded-full p-1"
          }
        />
        <Cards
          name={"Mustafo"}
          img={img3}
          imgLink={
            "https://img.icons8.com/material-outlined/100/535353/code.png"
          }
          style={"hidden"}
        />
        <Cards
          name={"Jony"}
          img={img4}
          imgLink={
            "https://img.icons8.com/material-outlined/50/535353/code.png"
          }
          style={"hidden"}
        />
        <Cards
          name={"Oyqiz"}
          img={img4}
          imgLink={
            "https://img.icons8.com/material-outlined/100/535353/code.png"
          }
          style={"hidden"}
        />
      </div>
    </>
  );
}

export default Card;

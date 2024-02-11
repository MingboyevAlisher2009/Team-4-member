import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

function Cards({ img, name, imgLink, imgLink2, style }) {
  return (
    <div className="card glass">
      <div className="hover-card absolute bg-white hidden flex-wrap  px-4 py-3 rounded-3xl w-64">
        <div className="img-html p-2 mt-1 drop-shadow-xl ml-1 bg-white rounded-full hover:scale-110">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/ios-filled/45/535353/html-5--v1.png"
            alt="html-5--v1"
          />
        </div>
        <div className="img-css p-2 drop-shadow-xl ml-1 bg-white rounded-full hover:scale-110">
          <img
            width="39"
            height="39"
            src="https://img.icons8.com/ios-filled/45/535353/css3.png"
            alt="css3"
          />
        </div>
        <div className="img-js p-2 drop-shadow-xl ml-1 bg-white rounded-full hover:scale-110">
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/ios-filled/45/535353/javascript.png"
            alt="javascript"
          />
        </div>
        <div className="img-bootstrap p-2 drop-shadow-xl ml-1 bg-white rounded-full hover:scale-110">
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/ios/45/535353/bootstrap.png"
            alt="bootstrap"
          />
        </div>
        <div className="img-tailwind p-2 drop-shadow-xl ml-1 bg-white rounded-full mt-3 hover:scale-110">
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/material-rounded/45/535353/tailwind_css.png"
            alt="tailwind_css"
          />
        </div>
        <div className="img-react p-2 drop-shadow-xl ml-1 bg-white rounded-full mt-3 hover:scale-110">
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/ios/45/535353/react-native--v1.png"
            alt="react-native--v1"
          />
        </div>
        <div className="img-redux p-2 drop-shadow-xl ml-1 bg-white rounded-full mt-3  hover:scale-110">
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/windows/45/535353/redux.png"
            alt="redux"
          />
        </div>
      </div>
      <div className="cards-container">
        <div className="card-img">
          <img src={img} />
        </div>
        <div>
          <p className="card-title text-2xl mt-4">{name}</p>
        </div>
        <div className="code">
          <div className="code-img1 inline-block bg-white rounded-full p-2 drop-shadow-xl ml-1 my-5 mx-2">
            <img
              className="inline-block"
              width="35"
              height="35"
              src={imgLink}
              alt="code"
            />
          </div>
          <div className={style}>
            <img
              width="40"
              height="40"
              className="inline-block"
              src={imgLink2}
              alt="code"
            />
          </div>
        </div>
      </div>
      <div className="card-footer mt-2">
        <Link className=" text-xl text-white hover:underline">Batafsil</Link>
      </div>
    </div>
  );
}

export default Cards;

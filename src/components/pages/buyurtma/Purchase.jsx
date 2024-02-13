import React from "react";
import "./purchase.css";
import Navbar from "../../nabar/Navbar";
import Footer from "../../footer/Footer";
import { Link } from "react-router-dom";
import Control from "../../../controls/Control";

function Purchase() {
  const props = "Contact";

  return (
    <>
      <header>
        <Navbar props={props} />

        <div className="form-prodact w-5/6 mx-auto mt-5 p-16 flex justify-center items-center flex-col">
          <h1 className="text-white text-4xl">Hizmat buyurma qilish</h1>
          <div className="user-select mt-20">
            <div>
              <img
                width="55"
                height="55"
                src="https://img.icons8.com/color/55/html-5--v1.png"
                alt="html-5--v1"
              />
            </div>
            <div>
              <img
                width="55"
                height="55"
                src="https://img.icons8.com/color/55/css3.png"
                alt="css3"
              />
            </div>
            <div>
              <img
                width="55"
                height="55"
                src="https://img.icons8.com/color/55/javascript--v1.png"
                alt="javascript--v1"
              />
            </div>
            <div>
              <img
                width="55"
                height="55"
                src="https://img.icons8.com/ios/55/bootstrap.png"
                alt="bootstrap"
              />
            </div>
            <div>
              <img
                width="55"
                height="55"
                src="https://img.icons8.com/color/55/tailwindcss.png"
                alt="tailwindcss"
              />
            </div>
            <div>
              <img
                width="55"
                height="55"
                src="https://img.icons8.com/color/55/react-native.png"
                alt="react-native"
              />
            </div>
            <div>
              <img
                width="55"
                height="55"
                src="https://img.icons8.com/color/55/redux.png"
                alt="redux"
              />
            </div>
          </div>
          <Link to="/prodact" className="btn-pur mt-16 ml-auto text-black font-bold py-2 px-4 rounded-full">
            <img
              className="inline-block"
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/ffffff/plus--v1.png"
              alt="plus--v1"
            />
            Buyurtma berish
          </Link>
        </div>
      </header>
      <Control/>
      <Footer />
    </>
  );
}

export default Purchase;

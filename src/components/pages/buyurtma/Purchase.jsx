import React from "react";
import "./purchase.css";
import Navbar from "../Abaut/navbar-about/Navbar";
import Footer from "../../footer/Footer";

function Purchase() {
  const props = "Contact";

  return (
    <>
      <header>
        <Navbar props={props} />

        <div className="form-prodact w-5/6 mx-auto mt-5 p-16 flex justify-center items-center flex-col">
          <h1 className="text-white text-4xl">Hizmat buyurma qilish</h1>
          <p className="text-white text-2xl mt-5">Tanlang</p>
          <div className="user-select mt-20">
            <div>
              <img
                width="70"
                height="70"
                src="https://img.icons8.com/color/70/html-5--v1.png"
                alt="html-5--v1"
              />
            </div>
            <div>
              <img
                width="70"
                height="70"
                src="https://img.icons8.com/color/70/css3.png"
                alt="css3"
              />
            </div>
            <div>
              <img
                width="70"
                height="70"
                src="https://img.icons8.com/color/70/javascript--v1.png"
                alt="javascript--v1"
              />
            </div>
            <div>
              <img
                width="70"
                height="70"
                src="https://img.icons8.com/ios/50/bootstrap.png"
                alt="bootstrap"
              />
            </div>
            <div>
              <img
                width="70"
                height="70"
                src="https://img.icons8.com/color/70/tailwindcss.png"
                alt="tailwindcss"
              />
            </div>
            <div>
              <img
                width="70"
                height="70"
                src="https://img.icons8.com/color/70/react-native.png"
                alt="react-native"
              />
            </div>
            <div>
              <img
                width="70"
                height="70"
                src="https://img.icons8.com/color/70/redux.png"
                alt="redux"
              />
            </div>
          </div>
          <button className="btn-pur mt-16 ml-auto text-black font-bold py-2 px-4 rounded-full">
            <img
              className="inline-block"
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/ffffff/plus--v1.png"
              alt="plus--v1"
            />
            Buyurtma berish
          </button>
        </div>
      </header>
      <Footer />
    </>
  );
}

export default Purchase;

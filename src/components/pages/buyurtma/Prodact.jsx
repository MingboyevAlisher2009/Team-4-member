import Navbar from "../../nabar/Navbar";
import "./prodact.css";
import Footer from "../../footer/Footer";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Control from "../../../controls/Control";

function Prodact() {
  const [test, setTest] = useState("");
  const [test1, setTest1] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigate();
  const props = "Contact";

  useEffect(() => {
    if (test.length) {
      setNumber(true);
    } else {
      setNumber(false);
    }
    if (test1.length) {
      setEmail(true);
    } else {
      setEmail(false);
    }
  }, [test, test1]);

  return (
    <>
      <header className="prodact">
        <Navbar props={props} />
        <div className="form-prodact w-5/6 mx-auto mt-5 p-16 flex justify-center items-center flex-col">
          <h1 className="text-white text-4xl">Hizmat buyurma qilish</h1>
          <form className="w-full px-16">
            <label
              className="block text-white text-lg mt-16 mb-2"
              htmlFor="phoneNumber"
            >
              Telefon raqam
            </label>
            <input
              className="block w-full h-14 text-2xl px-5 rounded-full outline-none	"
              type="number"
              id="phoneNumber"
              required
              onChange={(e) => setTest(e.target.value)}
            />
            <label
              className="block text-white text-lg mt-10 mb-2"
              htmlFor="email"
            >
              Elektron pochta
            </label>
            <input
              className="block w-full h-14 text-2xl px-5 rounded-full outline-none	"
              type="email"
              id="email"
              required
              onChange={(e) => setTest1(e.target.value)}
            />
          </form>
          {number && email ? (
            <NavLink to="/" className="w-full flex justify-end mt-12">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/ffffff/circled-chevron-right--v1.png"
                alt="circled-chevron-right--v1"
              />
            </NavLink>
          ) : (
            <NavLink className="w-full flex justify-end mt-12">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/ffffff/circled-chevron-right--v1.png"
                alt="circled-chevron-right--v1"
              />
            </NavLink>
          )}
        </div>
      </header>
      <Control/>
      <Footer />
    </>
  );
}

export default Prodact;

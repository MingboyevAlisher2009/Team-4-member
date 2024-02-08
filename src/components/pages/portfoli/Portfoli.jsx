import "./portfoli.css";
import React, { useEffect, useState } from "react";

// import required modules
function Portfoli({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length * 2 - 1 ? 0 : prevSlide + 1
      );
    }, 2000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSlideClick = (index) => {
    setCurrentSlide(index);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length * 2 - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length * 2 - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="slider-container">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${currentSlide === index ? "active" : ""}`}
          >
            <img src={slide.image} alt={`Slide ${index}`} />
          </div>
        ))}
        {slides.map((slide, index) => (
          <div
            key={index + slides.length}
            className={`slide ${
              currentSlide === index + slides.length ? "active" : ""
            }`}
          >
            <img src='{slide.image}' alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="cards">
        {slides[currentSlide % slides.length].cards.map((card, index) => (
          <div key={index} className="card">
            {card}
          </div>
        ))}
      </div>
      <div className="buttons">
        <button className="prev-button" onClick={handlePrevSlide}>
          Previous
        </button>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`button ${currentSlide === index ? "active" : ""}`}
            onClick={() => handleSlideClick(index)}
          />
        ))}
        <button className="next-button" onClick={handleNextSlide}>
          Next
        </button>
      </div>
    </div>
  );
}
export default Portfoli;

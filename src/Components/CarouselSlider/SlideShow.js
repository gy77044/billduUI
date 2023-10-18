import React from "react";
import "./SlideShow.css";
const delay = 2500;

export default function Slideshow({ slides }) {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, slides.length]);

  return (
    <>
      <div className="slider-container md:-my-32 ">
        <div className=" flex item-center  ">
          <div className="absolute w-[1.5vh] h-[1.5vh] bg-blue-700 z-[50] left-0 top-[1.6vh] mr-0.4 rounded-full"></div>
          <div className="absolute w-[1.5vh] h-[1.5vh] bg-blue-700 z-[50] left-4 top-[1.6vh] mr-0.4 rounded-full"></div>
          <div className="absolute w-[1.5vh] h-[1.5vh] bg-blue-700 z-[50] left-8 top-[1.6vh] mr-0.4 rounded-full"></div>
        </div>
        <div className="slideshow-1 shadow-xl">
          <div
            className="slideshowSlider"

            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {slides.map((data, index) => {
              return (
                <div className="slide" key={index}>
                  <img src={data.image} alt="slide" />
                  <img src={data.image} alt="slide" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="slideshow">

          <div
            className="slideshowSlider"

            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {slides.map((data, index) => {
              return (
                <div className="slide" key={index}>
                  <img src={data.image} alt="slide" />
                  <img src={data.image} alt="slide" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

import { portada } from "../constants";
import { useState, useEffect } from "react";
import Button from "../components/Button";

const HeroSlider = () => {
  const [slide, setSlide] = useState(0);
  const delay = 2500;

  useEffect(() => {
    setTimeout(
      () =>
        setSlide((prevSlide) =>
          prevSlide === portada.length - 1 ? 0 : prevSlide + 1
        ),
      delay
    );

    return () => {};
  }, [slide]);

  return (
    <div>
      {portada.map((item, idx) => {
        return (
          <div
            key={idx}
            className={
              slide === idx
                ? "flex flex-col justify-center items-center w-full h-[100vh] bg-center bg-cover md:bg-contain  md:bg-repeat"
                : "hidden"
            }
            style={{ backgroundImage: `url(${item.src})` }}
            id="home"
          >
            {item.titulo && (
              <h1
                className={
                  slide === 2
                    ? "text-3xl font-bree bold text-center text-white mb-[280px] px-5 md:text-6xl"
                    : "text-3xl font-bree bold text-center text-white mb-[60px] px-5 md:text-6xl"
                }
              >
                {item.titulo}
              </h1>
            )}

            {item.label && (
              <Button
                label={item.label}
                icon1={item.icon1}
                icon2={item.icon2}
              />
            )}
          </div>
        );
      })}
      {/* <div className="flex justify-center relative bottom-10">
        <span className="flex absolute bottom-[35px] md:bottom-[70px]">
          {portada.map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                className={
                  slide === idx
                    ? "bg-black w-[25px] h-[5px] md:w-[16px] md:h-[16px] border-none outline-none mx-2 cursor-pointer"
                    : "w-[25px] h-[5px] md:w-[16px] md:h-[16px] rounded-full border-none outline-none mx-2 cursor-pointer bg-white"
                }
              ></button>
            );
          })}
        </span>
      </div> */}
    </div>
  );
};

export default HeroSlider;

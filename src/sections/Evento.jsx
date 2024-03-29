// import { flechaEventoD, flechaEventoI } from "../assets/icons";
import { eventos } from "./../constants/index";
import { useState, useEffect } from "react";

const Evento = () => {
  const [slide, setSlide] = useState(0);
  const delay = 2500;

  useEffect(() => {
    setTimeout(
      () =>
        setSlide((prevSlide) =>
          prevSlide === eventos.length - 1 ? 0 : prevSlide + 1
        ),
      delay
    );

    return () => {};
  }, [slide]);

  /*const nextSlide = () => {
    setSlide(slide === eventos.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? eventos.length - 1 : slide - 1);
  };*/

  return (
    <section className="flex flex-col justify-center items-center bg-black pt-11">
      <h1 className="font-bree text-3.5xl text-white uppercase md:text-[75px] md:my-8">
        Principales Eventos
      </h1>

      <div className="flex justify-center w-full h-[180px] relative items-center md:h-auto">
        {/*<img
          src={flechaEventoD}
          alt="flecha izquierda"
          className="absolute md:left-[30px] w-[30px] h-[30px] left-[20px] cursor-pointer md:w-[80px] md:h-[80px] "
          onClick={prevSlide}
        />*/}
        <div className="mb-5">
          {eventos.map((item, idx) => {
            return (
              <img
                key={idx}
                src={item.img}
                alt={item.alt}
                className={
                  slide === idx
                    ? "border-2 border-black rounded-lg object-cover w-full h-[130px] md:h-[400px]"
                    : "hidden"
                }
              />
            );
          })}
        </div>
        {/* <img
          src={flechaEventoI}
          alt="flecha derecha"
          className="absolute w-[30px] h-[30px] right-[30px] cursor-pointer md:w-[80px] md:h-[80px]"
          onClick={nextSlide}
        /> */}
        {/* <span className="flex absolute bottom-[20px]">
          {eventos.map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                className={
                  slide === idx
                    ? "bg-red-500 w-[8px] h-[8px] md:w-[16px] md:h-[16px] rounded-full border-none outline-none mx-2 cursor-pointer"
                    : "w-[8px] h-[8px] md:w-[16px] md:h-[16px] rounded-full border-none outline-none mx-2 cursor-pointer bg-white"
                }
              ></button>
            );
          })}
        </span> */}
      </div>
    </section>
  );
};

export default Evento;

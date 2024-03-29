import { Link } from "react-router-dom";
import {
  flechaRegresar,
  flechaEventoD,
  flechaEventoI,
} from "../../assets/icons";
import { slideCapi } from "../../constants";
import { useState } from "react";

const Capi = () => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === slideCapi.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? slideCapi.length - 1 : slide - 1);
  };

  return (
    <div className="flex flex-col bg-black w-full h-auto pb-11">
      <div className="flex flex-col items-center justify-evenly bg-bannerCapi bg-cover w-full h-[200px]">
        <h1 className="text-3.5xl text-white font-bree px-7 text-center md:text-[75px]">
          "CAPI" ALBERTO ORTIZ
        </h1>
      </div>
      <p className=" text-justify text-lora text-xl px-10 py-8 text-white">
        Since his childhood in his beginnings as a runner in his native country
        Mexico always had athletics as a passion in his mind and heart,
        competing since the age of 10 with many dreams and desires to one day be
        able to be and represent Mexico as an athlete. Due to lack of economic
        factors, he never managed to be one, however he emigrated to this Great
        Nation and brought with him his passion that never left his mind, always
        interacting within the sports circle, athletics to be exact, thus
        forming one of the most competitive teams in all of history. of the
        teams not only in New York but from the entire American union,
        potentially forming the United Mexican Runners Of New York, being the
        only team to reach the Top 5 within the potions tables of the NYRR
        organization for its acronym in English, and becoming a great boost not
        only for the Latin community in New York City but also supporting
        high-performance Mexican athletes and new talents who dream of one day
        being able to grow and represent their country.
      </p>
      {/* Galeria */}
      <div className="flex justify-center relative">
        <img
          src={flechaEventoD}
          alt="flecha izquierda"
          className="absolute w-[30px] h-[30px] left-[20px] md:left-[10px] top-[50%] cursor-pointer md:w-[50px] md:h-[50px] "
          onClick={prevSlide}
        />
        <img
          src={flechaEventoI}
          alt="flecha derecha"
          className="absolute w-[30px] h-[30px] right-[20px] md:right-[10px] top-[50%] cursor-pointer md:w-[50px] md:h-[50px]"
          onClick={nextSlide}
        />

        {/* Fotos Slide */}
        <div className="flex justify-center w-[350px] h-[700px] items-center md:w-[600px] md:h-auto">
          {slideCapi.map((item, idx) => {
            return (
              <img
                key={idx}
                src={item.img}
                alt={item.alt}
                className={
                  slide === idx
                    ? "object-cover w-[330px] h-[620px] md:w-[700px] md:h-[400px]"
                    : "hidden"
                }
              />
            );
          })}
        </div>
      </div>
      {/* Boton regresar */}
      <div className="flex justify-end pr-11">
        <Link to="/english">
          <button className="bg-black border-4 border-double text-white p-2">
            <div className="flex gap-3 items-centere justify-between">
              <img
                src={flechaRegresar}
                alt="flecha"
                className="w-[20px] h-[20px]"
              />
              <h2>BACK</h2>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Capi;

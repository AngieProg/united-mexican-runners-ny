import { Link } from "react-router-dom";
import {
  flechaRegresar,
  flechaIzq,
  flechaDer,
  flechaEventoD,
  flechaEventoI,
} from "../assets/icons";
import { slideCapi } from "../constants";
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
        Su líder y creador de esta gran familia deportiva Alberto Ortiz, quien
        desde su infancia en sus inicios como corredor en su país natal, México,
        siempre tuvo como pasión el atletismo, en su mente y corazón,
        compitiendo desde la edad de 10 años con muchos sueños y anhelos de
        poder algún día representar a México como atleta. Por falta de factores
        económicos nunca logro serlo, sin embargo emigro a esta gran nación y
        trajo consigo su pasión que nunca salio de su mente, interactuando
        siempre dentro del círculo deportivo, atletismo para ser exactos,
        formando así uno de los grupos más competitivos de toda la historia de
        los equipos, no solamente en New York, si no de toda la unión americana,
        formando potencialmente United Mexican Runners of New York.
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
        <Link to="/">
          <button className="bg-black border-4 border-double text-white p-2">
            <div className="flex gap-3 items-centere justify-between">
              <img
                src={flechaRegresar}
                alt="flecha"
                className="w-[20px] h-[20px]"
              />
              <h2>REGRESAR</h2>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Capi;

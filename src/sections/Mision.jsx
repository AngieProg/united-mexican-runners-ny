import { Parallax } from "react-parallax";
import { background } from "../assets/images";

const Mision = () => (
  <section id="mision">
    <Parallax
      bgImage={background}
      strength={800}
      className="relative h-[100vh]"
    >
      <div
        className="flex items-center justify-center flex-col absolute h-[100vh] w-[100%]"
        data-aos="zoom-in"
      >
        <div className="flex flex-col bg-black opacity opacity-65 px-8 md:px-[100px] md:py-10">
          <h2 className="text-white uppercase font-bree text-3.5xl text-center md:text-6xl">
            Misión
          </h2>
          <p className=" text-white  font-lora leading-7 text-xl py-5  text-justify md:text-4xl">
            Fortalecer nuestra comunidad latina dentro del mundo deportivo ,
            generando atletas tanto recreativos como de alto rendimiento,
            conformando una comunidad de apoyo, convivencia, lealtad,
            generosidad y sobre todo humanidad
          </p>
        </div>
      </div>
    </Parallax>
  </section>
);

export default Mision;

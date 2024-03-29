import { lema } from "../assets/images";

const Mensaje = () => {
  return (
    <div className="flex flex-col justify-center items-center px-10 py-8 md:flex-row md:gap-8 md:px-[200px]">
      <img src={lema} alt="lema" className="w-[90%] md:w-[50%] h-auto" />
      <div className="flex flex-col">
        <p className="text-justify font-lora text-xl mb-3 md:text-2xl">
          Siempre en nuestro club tenemos mentalidad leal y de admiración hacia
          nuestros compañeros y atletas motivándonos uno al otro calurosamente y
          siempre fuertes.
        </p>
        <h2 className="font-bold font-bree text-xl md:text-3xl text-center">
          - Alberto -{" "}
        </h2>
      </div>
    </div>
  );
};

export default Mensaje;

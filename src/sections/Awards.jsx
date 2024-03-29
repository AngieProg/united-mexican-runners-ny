import { award } from "../assets/images";

const Awards = () => {
  return (
    <div className="flex flex-col bg-black pt-5 justify-center items-center">
      <h1 className="text-3.5xl text-white font-bree px-7 text-center md:text-[75px] md:mb-10 uppercase">
        Reconocimientos
      </h1>
      <div className="flex flex-col md:flex-row mt-3 justify-center items-center">
        {/* left size */}
        <div className="flex justify-center md:justify-start md:w-[35%]">
          <ul className="text-lora text-xl md:text-2xl px-5 text-center py-8 text-white leading-10 md:leading-[40px] list-disc list-inside md:list-none">
            <li>Segundo lugar en el Maratón de NYC TCS como equipo</li>
            <li>Mejores Corredores de Queens en el Maratón de NYC TCS</li>
            <li>Mejores corredores de Bronxen el Maratón de NYC TCS</li>
            <li>Campeonato Munidal de Atletismo</li>
            <li>¡Y en muchas categorias en general!</li>
          </ul>
        </div>
        {/* Center */}
        <div className="flex justify-center mb-5">
          <img
            src={award}
            alt="award"
            className="w-[300px] h-[300px] md:w-[600px] md:h-[600px]"
          />
        </div>
        {/* Right Size */}
        <div className="md:w-[35%]">
          <h2 className="text-xl text-white font-bree text-center mb-4 md:text-[40px] md:leading-10 uppercase">
            Club standings{" "}
          </h2>
          <ul className="text-center text-lora text-xl px-10 pb-8 text-white leading-8 list-disc list-inside md:list-none md:text-2xl md:leading-[40px]">
            <li>Top 10</li>
            <li>Top 9</li>
            <li>Top 8</li>
            <li>Top 7</li>
            <li>Top 6</li>
            <li>Top 5</li>
            <li>Top 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Awards;

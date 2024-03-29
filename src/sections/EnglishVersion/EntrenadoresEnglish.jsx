import { Adri, RodolfoGomez, coachCapi } from "../../assets/images";
import { Link } from "react-router-dom";
import { flecha, instagram } from "../../assets/icons";

const Entrenadores = () => {
  const Entrenador = ({ img, nombre, funcion, subfuncion, label, inst }) => (
    <div className="flex flex-col items-center mb-10">
      <img
        src={img}
        alt="coach capi"
        className="w-[200px] h-[200px] object-cover mb-3 md:w-[350px] md:h-[350px]"
      />
      <h2 className="text-white mb-2 font-bree text-2xl md:text-3xl">
        {nombre}
      </h2>
      <h3 className="text-white font-lora mb-1 md:text-2xl">{funcion}</h3>
      {subfuncion && (
        <h3 className="text-white font-lora mb-3 md:text-xl">{subfuncion}</h3>
      )}

      {inst && (
        <div className="flex gap-3 items-center justify-center mb-3 mt-2">
          <a href={inst}>
            <img
              src={instagram}
              alt="Instagram"
              className="w-3 h-3 md:w-[30px] md:h-[30px]"
            />
          </a>
          <h3 className="font-lora text-base text-white  md:text-xl">
            Instagram
          </h3>
        </div>
      )}

      {label && (
        <Link to="/capi-english">
          <button className="bg-black border-4 border-double text-white p-2  md:border-6 md:p-4">
            <div className="flex gap-3 items-centere justify-between md:text-2xl">
              <h2>KNOW HIM</h2>
              <img
                src={flecha}
                alt="flecha"
                className="w-[20px] h-[20px] md:w-[35px] md:h-[35px]"
              />
            </div>
          </button>
        </Link>
      )}
    </div>
  );

  return (
    <section
      className="flex flex-col justify-center items-center bg-black py-8"
      id="entrenadores"
    >
      <h1 className="text-3.5xl font-bree text-center px-10 text-white uppercase mb-5 md:text-[75px] md:my-8">
        Our Coaches
      </h1>
      <div className="flex flex-col md:flex-row md:gap-11 justify-center md:mt-8">
        <Entrenador
          img={coachCapi}
          nombre="Alberto Ortiz"
          funcion="Head Coach"
          subfuncion="(Lider)"
          label="KNOW HIM"
          inst="https://www.instagram.com/the_ortiz_project?igsh=MXQwM3BvY3FrMnd5aA%3D%3D&utm_source=qr"
        />
        <Entrenador
          img={Adri}
          nombre="Adriana Fernández"
          funcion="Coach"
          inst="https://www.instagram.com/la_dama_del_maraton_oficial/"
        />
        <Entrenador img={RodolfoGomez} nombre="Rodolfo Gómez" funcion="Coach" />
      </div>
    </section>
  );
};

export default Entrenadores;

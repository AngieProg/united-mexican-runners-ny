import { Teams } from "../../constants";
import { Link } from "react-router-dom";
import { flechaRegresar } from "../../assets/icons";

const Team = () => {
  return (
    <section className="bg-black text-white">
      {Teams.map((team, index) => {
        return (
          <div key={index} className="">
            <img
              src={team.image}
              alt={team.nombre}
              className="h-[200px] w-full md:hidden"
            />
            <h1 className="text-3.5xl font-bree text-center pt-5 pb-3 uppercase">
              {team.nombre}
            </h1>
            <div className="pb-5">
              <ul>
                {team.members.map((member, index) => (
                  <li
                    key={index}
                    className="text-center py-2 text-xl text-lora"
                  >
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
      {/* Boton regresar */}
      <div className="flex justify-end pr-11 py-8">
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
    </section>
  );
};

export default Team;

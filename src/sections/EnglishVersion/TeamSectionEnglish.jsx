import { Link } from "react-router-dom";
import { flecha } from "../../assets/icons";
import { Teams } from "../../constants";

const TeamSection = () => {
  return (
    <section
      className="flex flex-col justify-center items-center bg-black pt-11 pb-2"
      id="team"
    >
      <h1 className="text-3.5xl font-bree text-center px-10 mb-4 text-white uppercase md:text-[75px] md:my-8">
        Our Team
      </h1>
      <div className="flex flex-col items-center mb-10">
        {Teams.map((team, index) => {
          return (
            <div key={index} className="py-3">
              <img
                src={team.image}
                alt="platinum team"
                className="w-[400px] h-[200px] object-cover mb-3 md:w-[700px] md:h-[400px]"
              />
              <h2 className="text-white md:text-3xl mb-1 pt-3 font-bree text-center text-2xl">
                {team.nombre}
              </h2>
            </div>
          );
        })}
        <Link to="/team-english">
          <button className="bg-black border-4 border-double text-white p-2 mt-3 md:border-6 md:p-4">
            <div className="flex gap-3 items-centere justify-between md:text-2xl">
              <h2>KNOW THEM</h2>
              <img src={flecha} alt="flecha" className="w-[20px] h-[20px]" />
            </div>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TeamSection;

import { facebook, instagram } from "../../assets/icons";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row md:gap-8 md:justify-center md:py-11 md:bg-black">
      {/* Primer banner  */}
      <div className="">
        <Link to="entrenadores">
          <div className="flex items-center justify-evenly cursor-pointer bg-bannerFuerza bg-cover bg-center w-full h-[250px] md:h-[300px] md:w-[500px]">
            <h1 className="text-3.5xl text-white uppercase font-bree md:text-[50px]">
              Coaches
            </h1>
          </div>
        </Link>
      </div>

      {/* Segundo banner  */}
      <div className="">
        <Link to="team">
          <div className="flex items-center justify-evenly cursor-pointer bg-bannerEquipo bg-cover bg-center w-full h-[250px] md:h-[300px] md:w-[500px]">
            <h1 className="text-3.5xl text-white uppercase font-bree md:text-[50px]">
              Athletes
            </h1>
          </div>
        </Link>
      </div>

      {/* Tercer banner  */}
      <div className="">
        <Link to="contacto">
          <div className="flex flex-col items-center justify-evenly cursor-pointer bg-bannerContacto bg-cover bg-center w-full h-[250px] md:h-[300px] md:w-[500px]">
            <h1 className="text-3.5xl text-white uppercase font-bree md:text-[50px]">
              Contact us
              <div className="flex gap-5 justify-center items-center mt-2">
                <img
                  src={facebook}
                  alt="facebook"
                  className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] md:mt-8"
                />
                <img
                  src={instagram}
                  alt="instagram"
                  className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] md:mt-8"
                />
              </div>
            </h1>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Banner;

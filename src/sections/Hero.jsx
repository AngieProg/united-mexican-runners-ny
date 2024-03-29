import Button from "../components/Button";
import { facebook, instagram } from "./../assets/icons";

const Hero = () => {
  return (
    <section
      className="bg-hero md:bg-heroLarge w-full h-[100vh] bg-cover bg-center flex justify-center items-center flex-col"
      id="home"
    >
      <h1 className="text-3.5xl font-bree bold text-center text-white mb-8 px-5 md:text-6xl">
        UNITED MEXICAN RUNNERS OF NEW YORK
      </h1>
      <Button label="Contáctanos" icon1={facebook} icon2={instagram} />
    </section>
  );
};

export default Hero;

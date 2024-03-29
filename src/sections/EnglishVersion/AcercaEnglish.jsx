import { galeria10 } from "../../assets/images";

const Acerca = () => {
  return (
    <div className="flex flex-col bg-black py-5">
      <h1 className="text-3.5xl text-white font-bree px-7 text-center md:text-[75px] uppercase">
        About Us
      </h1>
      <div className="flex flex-col md:flex-row md:gap-10 md:justify-center md:items-center mt-4">
        {/* left size */}
        <div className="flex justify-center">
          <img
            src={galeria10}
            alt="foto grupal"
            className="w-[400px] h-[250px] md:w-[700px] md:h-[500px]"
          />
        </div>
        {/* right size */}
        <div className="md:w-[50%]">
          <p className="text-justify text-lora text-xl px-10 py-8 text-white md:text-2xl">
            We are a registered Running Club and formed in 2016 with a unique
            trajectory in the entire history of Latin and competitive teams
            throughout the city of New York. Its leader and creator of this
            great sports family Alberto Ortiz Who since his childhood in his
            beginnings as a runner in his native country Mexico always had
            athletics as a passion in his mind and heart, competing since the
            age of 10 with many dreams and desires to one day be able to be and
            represent Mexico as an athlete. Due to lack of economic factors, he
            never managed to be one, however he emigrated to this Great Nation
            and brought with him his passion that never left his mind, always
            interacting within the sports circle, athletics to be exact, thus
            forming one of the most competitive teams in all of history. of the
            teams not only in New York but from the entire American union,
            potentially forming the United Mexican Runners Of New York, being
            the only team to reach the Top 5 within the potions tables of the
            NYRR organization for its acronym in English, and becoming a great
            boost not only for the Latin community in New York City but also
            supporting high-performance Mexican athletes and new talents who
            dream of one day being able to grow and represent their country.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Acerca;

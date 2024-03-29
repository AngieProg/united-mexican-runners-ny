import { galeria10 } from "../assets/images";

const Acerca = () => {
  return (
    <div className="flex flex-col bg-black py-5">
      <h1 className="text-3.5xl text-white font-bree px-7 text-center md:text-[75px] uppercase">
        ¿Quienes Sómos?
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
            Somos un equipo registrado y formado en el año 2016 con una
            trayectoria única en toda la historia de los equipos latinos y
            competitivos en toda la cd de New York. Su líder y creador de esta
            gran familia deportiva Alberto Ortiz Quien desde su infancia en sus
            inicios como corredor en su país natal México siempre tuvo como
            pasión el atletismo en su mente y corazón compitiendo desde la edad
            de 10 años con muchos sueños y anhelos de poder algún día ser y
            representar a México como atleta. Por falta de factores económicos
            nunca logro serlo sin embargo emigro a esta Gran nación y trajo
            consigo su pasión que nunca salió de su mente interactuando siempre
            dentro del círculo deportivo, atletismo para ser exactos, formando
            así uno de los equipos mas competitivos de toda la historia de los
            equipos no solamente en New York si no de toda la unión americana
            formando potencialmente United Mexican Runners Of New York siendo el
            único equipo llegando a ser el Top 5 dentro de las tablas de
            pociones de la organización NYRR por sus siglas en inglés, y
            convirtiéndose en un gran impulso no solo para la comunidad latina
            en la cd de Nueva York sino también apoyando a atletas mexicanos de
            alto rendimiento y nuevos talentos que sueñan con un día poder
            crecer y representar a su pais .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Acerca;

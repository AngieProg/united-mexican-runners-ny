import { facebookBlack, instagramBlack } from "../assets/icons";

const Contacto = () => {
  return (
    <section
      className="px-8 py-10 flex flex-col justify-center items-center"
      id="contacto"
    >
      <h1 className="font-bree text-3.5xl mb-3 md:text-[75px] md:my-11">
        CONTÁCTANOS
      </h1>
      <p className="mb-4 text-lora text-xl md:text-3xl">
        Dejanos un mesaje y nos pondremos en contacto contigo.
      </p>
      <div className="flex flex-col items-start gap-4">
        {/* Facebook */}
        <div className="flex gap-5 items-center justify-center">
          <a href="https://www.facebook.com/profile.php?id=100046928414692&mibextid=9R9pXO">
            <img
              src={facebookBlack}
              alt="facebook"
              className="w-6 h-6 cursor-pointer md:w-[50px] md:h-[50px]"
            />
          </a>
          <h3 className="font-lora text-xl font-bold md:text-3xl">Facebook</h3>
        </div>
        {/* Instagram */}
        <div className="flex gap-5 items-center justify-center">
          <a href="https://www.instagram.com/unitedmexicanrunnersny?igsh=NHU5eXdmaXMzOWZ2&utm_source=qr">
            <img
              src={instagramBlack}
              alt="Instagram"
              className="w-6 h-6 md:w-[50px] md:h-[50px]"
            />
          </a>
          <h3 className="font-lora text-xl font-bold md:text-3xl">Instagram</h3>
        </div>
        {/* Dirección
        <div className="flex gap-5 items-center">
          <img src={gps} alt="gps" className="w-6 h-6" />
          <div className="flex flex-col justify-center">
            <h3 className="font-lora text-xl font-bold">Dirección</h3>
            <p className="font-lora text-base">
              405 Lexington Avenue, Planta 44
            </p>
          </div>
        </div>
        Telefono
        <div className="flex justify-start items-center gap-5">
          <img src={celular} alt="gps" className="w-6 h-6" />
          <div className="flex flex-col justify-center items-start">
            <h3 className="font-lora text-xl font-bold">Telefono</h3>
            <p className="font-lora text-base">+1 212-661-4959</p>
          </div>
        </div>
        Email
        <div className="flex justify-start items-center gap-5">
          <img src={celular} alt="gps" className="w-6 h-6" />
          <div className="flex flex-col justify-center items-start">
            <h3 className="font-lora text-xl font-bold">Email</h3>
            <p className="font-lora text-base">unitedmexianrunner@gmail.com</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contacto;

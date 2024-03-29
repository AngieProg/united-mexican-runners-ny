import { facebook, instagram } from "../assets/icons";

const Footer = () => {
  return (
    <div className="w-full bg-black px-8 flex justify-between items-center md:flex-row flex-col py-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-lora font- text-normal text-center text-white [18px] leading-[27px] md:text-xl">
        Copyright Ⓒ 2024 United Mexican Runners of New York. All Rights
        Reserved.
      </p>
      <div className="flex flex-row gap-5 md:mt-0 mt-3 ">
        <a>
          <img
            src={facebook}
            alt="facebook"
            className="w-[21px] h-[21px] md:w-[30px] md:h-[30px] object-contain cursor-pointer"
          />
        </a>
        <a>
          <img
            src={instagram}
            alt="instagram"
            className="w-[21px] h-[21px] md:w-[30px] md:h-[30px] object-contain cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;

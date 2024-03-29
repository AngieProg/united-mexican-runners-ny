import { NavLink } from "react-router-dom";
import { hamburguer, close, logoBlanco, banderaEU } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [toogle, setToogle] = useState(false);
  return (
    <header className="px-8 py-3 md:py-5 w-full bg-black">
      <nav className="flex justify-between items-center">
        <a href="/">
          <img
            src={logoBlanco}
            alt="logo"
            width={30}
            height={30}
            className="md:w-[50px] md:h-[50px]"
          />
        </a>
        <ul className="sm:flex flex-1 justify-center items-center sm:gap-16 hidden ">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                smooth={true}
                spy={true}
                duration={500}
                className="font-lora leading-normal md:text-2xl text-lg text-white cursor-pointer"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <NavLink to="/english">
            <img
              src={banderaEU}
              alt="idioma ingles"
              className="w-[50px] h-[30px]"
            />
          </NavLink>
        </ul>
        {/* <Nav cuando esta en small extendida */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toogle ? close : hamburguer}
            alt="menu"
            width={25}
            height={25}
            className="cursor-pointer"
            onClick={() => setToogle((prev) => !prev)}
          />
          <div
            className={`${
              toogle ? "flex" : "hidden"
            } py-6 bg-black absolute top-12 right-0  w-full rounded-lg`}
          >
            <ul className="list-none flex flex-col justify-center items-center flex-1">
              {navLinks.map((link, index) => (
                <li key={index} className="py-3 uppercase">
                  <Link
                    to={link.href}
                    smooth={true}
                    spy={true}
                    duration={500}
                    className={`font-lora font-normal text-white  cursor-pointer text-[16px] ${
                      index === navLinks.length - 1 ? "mr-0" : "mb-4"
                    }`}
                    onClick={() => setToogle(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <NavLink to="/english">
                <img
                  src={banderaEU}
                  alt="idioma ingles"
                  className="w-[40px] h-[25px]"
                />
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

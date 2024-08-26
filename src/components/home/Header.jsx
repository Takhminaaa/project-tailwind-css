import ManImage from "../../assets/images/Ellipse 1 (1).png";
import Manu from "../../assets/icons/menu.svg";

const Header = () => {
  return (
    <header className="flex flex-col gap-[135px] p-[15px]">
      <nav className="flex justify-end gap-[30px] pt-[25px] pr-[65px]  ">
        <a
          href="#"
          className="font-bold text-[19px] hidden sm:block md:block lg:block xl:block 2xl:block "
        >
          Works
        </a>
        <a
          href="#"
          className="font-bold text-[19px] hidden sm:block md:block lg:block xl:block 2xl:block"
        >
          Blog
        </a>
        <a
          href="#"
          className="font-bold text-[19px] hidden sm:block md:block lg:block xl:block 2xl:block "
        >
          Contact
        </a>
        <img
          src={Manu}
          alt=""
          className="w-[30px] h-[30px] flex justify-end  sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
        />
      </nav>
      <div className=" w-[100%] flex justify-center  sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
        <img className="w-[200px] h-[200px]  " src={ManImage} alt="" />
      </div>

      <section className="flex w-[100%] justify-evenly gap-[120px] ">
        <div className="flex flex-col gap-[40px]">
          <div className="">
            <h1 className=" font-bold text-[30px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px]  ">
              Hi, I am John,
            </h1>
            <h1 className="font-bold text-[30px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px]">
              Creative Technologist
            </h1>
          </div>

          <div className="w-[100%] flex flex-col justify-center flex-wrap">
            <p className="text-left">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet
            </p>
            <p>
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam
            </p>
            <p> consequat sunt nostrud amet.</p>
          </div>
          <button className="w-[208px] py-[10px] bg-[#FF6464] text-[white] flex justify-center sm:w-[167px] md:w-[167px] lg:w-[167px] xl:w-[167px] 2xl:w-[167px]">
            Download Resume
          </button>
        </div>
        <div className=" flex justify-center hidden sm:block md:block lg:block xl:block 2xl:block">
          <img className="w-[245px] h-[245px]  " src={ManImage} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;

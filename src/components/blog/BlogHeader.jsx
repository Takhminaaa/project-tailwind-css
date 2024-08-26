import Manu from "../../assets/icons/menu.svg";

const BlogHeader = () => {
  return (
    <header>
      <nav className="flex justify-end gap-[30px] pt-[25px] pr-[65px]  ">
        <a
          href="#"
          className="font-bold text-[19px] hidden sm:block text-[#FF6464] md:block text-[#FF6464] lg:block text-[#FF6464] xl:block text-[#FF6464] 2xl:block text-[#FF6464] "
        >
          Blog
        </a>
        <a
          href="#"
          className="font-bold text-[19px] hidden sm:block md:block lg:block xl:block 2xl:block"
        >
          Works
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
    </header>
  );
};

export default BlogHeader;

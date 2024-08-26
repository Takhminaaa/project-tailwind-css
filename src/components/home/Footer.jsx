import fb from "../../assets/icons/fb.svg";
import insta from "../../assets/icons/insta.svg";
import tw from "../../assets/icons/fb.svg";
import Linkedin from "../../assets/icons/Linkedin.svg";
const Footer = () => {
  return (
    <>
      <footer className=" h-[200px] flex justify-center items-end ">
        <div className="flex flex-col gap-[30px] ">
          <div className="flex gap-[40px]">
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={tw} alt="" />
            <img src={Linkedin} alt="" />
          </div>
          <a className="flex justify-center " href="#">
            Copyright ©2020 All rights reserved{" "}
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;

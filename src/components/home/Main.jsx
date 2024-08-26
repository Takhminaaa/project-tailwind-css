import Designing from "../../assets/images/Rectangle 30.png";
import Vibrant from "../../assets/images/Rectangle 32.png";
import Typography from "../../assets/images/Rectangle 34.png";
const Main = () => {
  return (
    <>
      <section className="w-[100%] h-[750px] bg-[#EDF7FA] sm:h-[750px] md:h-[750px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] ">
        <div className=" w-[100%] flex justify-around p-[25px]">
          <h1 className="text-[22px] font-normal ">Recent posts</h1>
          <a className="text-[#00A8CC] text-center hidden sm:block md:block lg:block xl:block 2xl:block">
            View all
          </a>
        </div>

        <div className=" w-[100%] flex gap-[50px] flex justify-center flex-wrap p-[10px]">
          <div className="w-[354px] h-[fit-content] bg-[#fff] flex flex-col p-[20px] gap-[12px] sm:w-[420px]h-[fit-content] flex flex-col p-[20px] gap-[20px]  md:w-[420px] h-[fit-content] flex flex-col p-[20px] gap-[20px] lg:w-[420px] h-[fit-content] flex flex-col p-[20px] gap-[20px] xl:w-[420px] h-[fit-content] flex flex-col p-[20px] gap-[20px]  2xl:w-[420px] h-[fit-content] flex flex-col p-[20px] gap-[20px] ">
            <div>
              <h1 className="font-bold text-[20px] sm:text-[26px] md:text-[26px] lg:text-[26px] xl:text-[26px] 2xl:text-[26px] ">
                Making a design system from{" "}
              </h1>
              <h1 className="font-bold text-[20px] sm:text-[26px] md:text-[26px] lg:text-[26px] xl:text-[26px] 2xl:text-[26px]">
                scratch
              </h1>
            </div>
            <article className="flex gap-[26px]">
              <p className="text-[18px]">12 Feb 2020</p>
              <span>|</span>
              <p className="text-[18px]">Design, Pattern</p>
            </article>
            <div>
              <p>Amet minim mollit non deserunt ullamco est sit</p>
              <p>aliqua dolor do amet sint. Velit officia consequat</p>
              <p>duis enim velit mollit. Exercitation veniam</p>
              <p>consequat sunt nostrud amet.</p>
            </div>
          </div>

          <div className="w-[354px] h-[fit-content] bg-[#fff] flex flex-col p-[20px] gap-[12px] sm:w-[420px]h-[fit-content] flex flex-col p-[20px] gap-[20px]  md:w-[420px] h-[fit-content] flex flex-col p-[20px] gap-[20px] lg:w-[420px] h-[fit-content] flex flex-col p-[20px] gap-[20px] xl:w-[420px] h-[fit-content] flex flex-col p-[20px] gap-[20px]  2xl:w-[420px] h-[fit-content] flex flex-col p-[20px] gap-[20px] ">
            <div>
              <h1 className="font-bold text-[20px] sm:text-[26px] md:text-[26px] lg:text-[26px] xl:text-[26px] 2xl:text-[26px] ">
                Creating pixel perfect icons in
              </h1>
              <h1 className="font-bold text-[20px] sm:text-[26px] md:text-[26px] lg:text-[26px] xl:text-[26px] 2xl:text-[26px]">
                Figma
              </h1>
            </div>
            <article className="flex gap-[26px]">
              <p className="sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]">
                12 Feb 2020
              </p>
              <span>|</span>
              <p className=" sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]">
                Design, Pattern
              </p>
            </article>
            <div>
              <p>Amet minim mollit non deserunt ullamco est sit</p>
              <p>aliqua dolor do amet sint. Velit officia consequat</p>
              <p>duis enim velit mollit. Exercitation veniam</p>
              <p>consequat sunt nostrud amet.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-[100%] flex justify-center">
        <article className="flex flex-col gap-[18px] sm:gap-[20px] flex flex-col gap-[22px]  md:gap-[20px] flex flex-col gap-[22px]  lx:gap-[20px] flex flex-col gap-[22px]  2xl:gap-[22px]">
          <p className="font-normal text-[18px] w-[100%] flex justify-center sm:w-[50%] flex justify-center text-[20px] md:w-[50%] flex justify-center text-[20px] lg:w-[50%] flex justify-center text-[20px] xl:w-[50%] flex justify-center text-[20px] 2xl:w-[50%] flex justify-center text-[20px]">
            Featured works
          </p>

          <section className="  flex justify-center gap-[20px] flex-wrap sm:flex-nowrap	md:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap p-[10px] ">
            <img
              src={Designing}
              alt=""
              className="w-[350px] h-[auto] sm:w-[264px] h-[auto] md:w-[264px] h-[auto] lg:w-[264px] h-[auto] xl:w-[264px] h-[auto] 2xl:w-[264px] h-[auto]"
            />

            <div className=" w-[78%] flex flex-col gap-[20px] ">
              <p className="  font-bold text-[24px] sm:text-[30px] flex md:text-[30px] xl:text-[30px] 2xl:text-[30px] ">
                Designing Dashboards
              </p>

              <section className=" w-[78%] flex gap-[26px]">
                <button className="w-[65px] bg-[#142850] text-[white] rounded-[16px] font-bold">
                  2020
                </button>

                <p className="text-[#8695A4] ">Dashboard</p>
              </section>
              <article>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit
                </p>
                <p>
                  officia consequat duis enim velit mollit. Exercitation veniam
                  consequat sunt
                </p>
                <p>nostrud amet.</p>
              </article>
            </div>
          </section>
        </article>
      </div>
      <hr className="hidden sm:block md:block lg:block xl:block 2xl:block" />

      <article className="flex flex-col gap-[22px] hidden sm:block md:block lg:block xl:block 2xl:block">
        <section className="flex justify-center gap-[20px] ">
          <img src={Vibrant} alt="" />

          <div className="flex flex-col gap-[20px]">
            <p className="font-bold text-[30px]">Vibrant Portraits of 2020</p>

            <section className="flex gap-[26px]">
              <button className="w-[65px] bg-[#142850] text-[white] rounded-[16px] font-bold">
                2018
              </button>

              <p className="text-[#8695A4]">Illustration</p>
            </section>
            <article>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit
              </p>
              <p>
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt
              </p>
              <p>nostrud amet.</p>
            </article>
          </div>
        </section>
      </article>
      <hr className="hidden sm:block md:block lg:block xl:block 2xl:block" />

      <article className="flex flex-col gap-[22px] hidden sm:block md:block lg:block xl:block 2xl:block">
        <section className="flex justify-center gap-[20px] ">
          <img src={Typography} alt="" />

          <div className="flex flex-col gap-[20px]">
            <p className="font-bold text-[30px]">36 Days of Malayalam type</p>

            <section className="flex gap-[26px]">
              <button className="w-[65px] bg-[#142850] text-[white] rounded-[16px] font-bold">
                2018
              </button>

              <p className="text-[#8695A4]">Typography</p>
            </section>
            <article>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit
              </p>
              <p>
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt
              </p>
              <p>nostrud amet.</p>
            </article>
          </div>
        </section>
      </article>
      <hr className="hidden sm:block md:block lg:block xl:block 2xl:block" />
    </>
  );
};

export default Main;

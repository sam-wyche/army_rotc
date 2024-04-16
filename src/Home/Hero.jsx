import React from "react";
import CountUp from "react-countup";
import battalion_logo from '../assets/Images/battalion_logo.png';

const Hero = () => {
    const year = new Date().getFullYear();

    const handleClick = e => {
        e.preventDefault();

        const targetAttr = e.target.getAttribute("href");
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            top: location - 80,
            left: 0
        })
    }

    return (
        <section className="pt-0" id="about">
            <div className="container pt-14">
                <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
                    {/* ========== hero left start ========== */}
                    <div className="w-full md:basis-1/2">
                        <h5 data-aos="fade-right"
                            data-aos-duration="1500"
                            className="text-headingColor font-[600] text-[16px]">
                                Be All You Can Be
                        </h5>
                        <h1 data-aos="fade-up"
                            data-aos-duration="1500"
                            className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
                            >
                            University of Cincinnati <br />Army ROTC
                        </h1>

                        <div data-aos="fade-up"
                            data-aos-duration="1800"
                            data-aos-delay="200"
                            className="flex items-center gap-6 mt-7"
                            >
                            <a href="#contact">
                                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                                    <i class="ri-mail-line"> Contact us</i>
                                </button>
                            </a>
                            <a onClick={handleClick}
                                href="#portfolio"
                                className="text-black font-[600] text-[16px] border-b border-solid border-smallTextColor"
                                >
                                Learn about branching options
                            </a>
                        </div>
                        <p data-aos="fade-left"
                            data-aos-duration="1500"
                            className="flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-0 sm:pr-10"
                            >
                                UC Army ROTC identifies, recruits, develops, and commissions leaders of character for tomorrow’s globally responsive, regionally engaged Army, Army Reserve, and Army National Guard; and provides support, motivation, and encouragement for local Junior ROTC programs as they develop the mentorship to future leaders.
                        </p>
                        <div className="flex items-center gap-9 mt-14">
                            <span className="text-smallTextColor text-[15px] font-[600]">
                                Follow UC Army ROTC
                            </span>
                            <span>
                                <a href="https://www.instagram.com/ucarmyrotc/" className="text-smallTextColor text-[15px] font-[600]">
                                    <i class="ri-instagram-line"></i>
                                </a>
                            </span>
                            <span>
                                <a href="https://www.facebook.com/UCArmyROTC/" className="text-smallTextColor text-[15px] font-[600]">
                                    <i class="ri-facebook-fill"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                    {/* ========== hero left end ============ */}
                    {/* ========== hero image start ========= */}
                    <div className="basis-1/3 mt-10 sm:mt-0">
                        <figure className="flex items-center justify-center">
                            <img src={battalion_logo} alt="" />
                        </figure>
                    </div>
                    {/* ========== hero image end =========== */}

                    {/* ========== hero right start ========= */}
                    <div className="md:basis-1/3 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md: text-end">
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp start={0} end={year - 1919} duration={4} />
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Years of of training future officers
                            </h4>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp start={0} end={18} duration={4} />
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Different branches
                            </h4>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp start={0} end={70} duration={4} suffix="+" />
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Current Cadets
                            </h4>
                        </div>
                        {/* <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                ∞
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Opportunities
                            </h4>
                        </div> */}
                    </div>
                    {/* ========== hero right end =========== */}
                </div>
            </div>
        </section>
    )
}


export default Hero;
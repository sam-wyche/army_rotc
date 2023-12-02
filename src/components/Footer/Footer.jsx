import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#151515] pt-12">

            {/* =========== footer top =========== */}
            <div className="container">
                <div className="sm:flex items-center justify-between md:gap-8">
                    <div className="w-full sm:w-1/2">
                        <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
                            Be All You Can Be
                        </h2>

                        <a href="#contact">
                            <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                                <i class="ri-mail-line"></i>Contact us
                            </button>
                        </a>
                    </div>

                    <div className="w-full sm:w-1/2">
                        <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!
                        </p>

                         <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
                            <span className="text-gray-300 font-[600] text-[15px]">
                                Follow UC Army ROTC:
                            </span>

                            <span className="w-[35px] rounded-[50px] cursor-pointer text-center">
                                <a href="#youtube" className="text-gray-300 font-[500] text-[18px]">
                                    <i class="ri-youtube-line"></i>
                                </a>
                            </span>
                            <span className="w-[35px] rounded-[50px] cursor-pointer text-center">
                                <a href="#github" className="text-gray-300 font-[500] text-[18px]">
                                    <i class="ri-github-fill"></i>
                                </a>
                            </span>
                            <span className="w-[35px] rounded-[50px] cursor-pointer text-center">
                                <a href="#facebook" className="text-gray-300 font-[500] text-[18px]">
                                    <i class="ri-facebook-circle-line"></i>
                                </a>
                            </span>
                            <span className="w-[35px] rounded-[50px] cursor-pointer text-center">
                                <a href="#instagram" className="text-gray-300 font-[500] text-[18px]">
                                    <i class="ri-instagram-line"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>

                <div>
                    <ul className="flex items-center justify-center gap-10 p-3">
                        <li>
                            <a className="text-gray-400 font-[600]" href="#about">About</a>
                        </li>
                        <li>
                            <a className="text-gray-400 font-[600]" href="#services">Timeline</a>
                        </li>
                        <li>
                            <a className="text-gray-400 font-[600]" href="#portfolio">Branches</a>
                        </li>
                        <li>
                            <a className="text-gray-400 font-[600]" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* =========== footer bottom =========== */}

            <div className="bg-[#202020] py-5">
                <div className="container">
                    <div className="flex items-center sm:justify-between">
                        <div className="hidden sm:block">
                            <div className="flex items-center gap-[10px]">
                                <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">
                                    UC
                                </span>

                                <div className="leading-[20px]">
                                    <h2 className="text-gray-200 font-[500] text-[18px]">Army ROTC</h2>
                                    <p className="text-gray-400 text-[14px] font-[500]">Bearcat Battalion</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </footer>
)}


export default Footer;
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
                        To be a U.S. Army Soldier is to be a part of the strongest fighting force in the world. You’ll spend your days training, working and serving together to protect America’s freedoms. But you’ll also have time after work for family, friends and personal interests. From recruitment to retirement, the U.S. Army provides a unique and diverse lifestyle for Soldiers.
                        </p>

                        <div className="flex items-center gap-9 mt-14">
                            <span className="text-white text-[15px] font-[600]">
                                Follow UC Army ROTC
                            </span>
                            <span>
                                <a href="https://www.instagram.com/ucarmyrotc/" className="text-white text-[15px] font-[600]">
                                    <i class="ri-instagram-line"></i>
                                </a>
                            </span>
                            <span>
                                <a href="https://www.facebook.com/UCArmyROTC/" className="text-white text-[15px] font-[600]">
                                    <i class="ri-facebook-fill"></i>
                                </a>
                            </span>
                        </div>
                    </div>
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
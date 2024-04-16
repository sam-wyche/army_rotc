import React from "react";
import one from "../assets/Images/one.png";
import two from "../assets/Images/two.png";
import three from "../assets/Images/three.png";
import four from "../assets/Images/four.png";

const Services = () => {
    return (
        <section id="services">
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
                        Cadet Timeline
                    </h2>
                    <p className="lg:max-auto text-headingColor font-[500] text-[16px] leading-7">
                        Up to 2 years with no commitment! Give it a try today.<br/><br/>
                        There are 4 year, 3 year, and 2 year options depending on your academic timeline.<br/>
                        Most Cadets follow the 4 year timeline, however, if you decide later in your college career that Army ROTC is for you then there are also 3 and 2 year options.<br></br>
                        With these options, cadets would spend 32-days in Fort Knox, Kentucky at Basic Camp to get up to speed and prepare for Cadet Summer Training. 
                    </p>
                </div>

                <div className="flex flex-col justify-center sm:py-12">
                    <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
                        <div className="relative text-gray-700 antialiased text-sm font-semibold">
                            {/* ======== vertical line middle ======== */}
                            <div className="hidden absolute w-1 sm:block bg-primaryColor h-full left-1/2 transform -translate-x-1/2"></div>
                            {/* ======== left card =========== */}
                            <div className="mt-6  sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                    
                                    <div className="flex justify-start w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos="fade-right"
                                                data-aos-duration="1200"
                                                className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                                                >
                                                <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                                                    1st Year
                                                </h3>
                                                <p className="text-[15px] text-black group-hover:text-white group-hover:font-[500] leading-7">
                                                    Fall Semester: Introduction to the Army and Critical Thinking<br/><br/>
                                                    Spring Semester: Introduction to the Profession of Arms
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img className="h-6" src={one} alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            {/* ======== right card ========== */}
                            <div className="mt-6  sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                    <div className="flex justify-end w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div data-aos="fade-left"
                                                data-aos-duration="1200"
                                                className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                                                >
                                                <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                                                    2nd Year
                                                </h3>
                                                <p className="text-[15px] text-black group-hover:text-white group-hover:font-[500] leading-7">
                                                    Fall Semester: Foundations of Leadership<br/><br/>
                                                    Spring Semester: Army Doctrine and Decision Making
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img className="h-12" src={two} alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            {/* ======== left card =========== */}
                            <div className="mt-6  sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                    
                                    <div className="flex justify-start w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos="fade-right"
                                                data-aos-duration="1200"
                                                className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                                                >
                                                <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                                                    3rd Year
                                                </h3>
                                                <p className="text-[15px] text-black group-hover:text-white group-hover:font-[500] leading-7">
                                                    Fall Semester: Adaptive Team Leadership<br/><br/>
                                                    Spring Semester: Applied Team Leadership<br/><br/>
                                                    Summer Semester: Fort Knox, Kentucky - Cadet Summer Training
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img className="h-4" src={three} alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            {/* ======== right card ========== */}
                            <div className="mt-6  sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                    <div className="flex justify-end w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div data-aos="fade-left"
                                                data-aos-duration="1200"
                                                className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                                                >
                                                <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                                                    4th Year
                                                </h3>
                                                <p className="text-[15px] text-black group-hover:text-white group-hover:font-[500] leading-7">
                                                    Fall Semester: Mission Command and the Army Profession<br/><br/>
                                                    Spring Semester: Mission Command and Army Profession II
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img src={four} alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}


export default Services;
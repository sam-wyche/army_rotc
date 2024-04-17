import Opportunities from "./Opportunities/Opportunities"
import Cadre from "./Cadre/Cadre";
import WhatIsROTC from "./WhatIsROTC";
import Ranger from "./Ranger/Ranger"
// import { useState } from "react";
// import {AiOutlineCaretUp, AiOutlineCaretDown} from "react-icons/ai"
// import AboutModal from "./AboutModal"

export function About() {

    // const [isOpen1, setIsOpen1] = useState(false);
    // const [isOpen2, setIsOpen2] = useState(false);
    // const [isOpen3, setIsOpen3] = useState(false);
    // const [isOpen4, setIsOpen4] = useState(false);


    return(
        <>
        <section className="About id=/about">

            <div className="container flex flex-col">
                <h1 className="pb-10 text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5">
                    About
                </h1>

                {/* <div className="relative flex flex-col items-center pb-1 rounded-l">
                    <button onClick={() => setIsOpen1((prev) => !prev)}
                        className="p-10 bg-gray-400 flex items-center justify-between font-bold rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white w-full text-[1.8rem] font-[800] text-left">
                        What is ROTC?
                        { !isOpen1 ? (
                            <AiOutlineCaretDown className="h-8" />
                            ) : (
                                <AiOutlineCaretUp className="h-8" />
                            )
                        }
                    </button>
                    {isOpen1 && <div className="bg-blue-400 absolute top-40 flex flex-col">
                            <WhatIsROTC />
                        </div>}
                </div> */}

                {/* <div className="relative flex flex-col items-center pb-5 rounded-lg">
                    <button onClick={() => setIsOpen2((prev) => !prev)}
                        className="p-10 bg-gray-400 flex items-center justify-between font-bold rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white w-full text-[1.8rem] font-[800] text-left">
                        Cadre Leadership
                        { !isOpen2 ? (
                            <AiOutlineCaretDown className="h-8" />
                            ) : (
                                <AiOutlineCaretUp className="h-8" />
                            )
                        }
                    </button>
                    {isOpen2 && <div className="bg-blue-400 absolute top-40 flex flex-col">
                            <Cadre />
                        </div>}
                </div> */}

                {/* <div className="relative flex flex-col items-center pb-5 rounded-lg">
                    <button onClick={() => setIsOpen3((prev) => !prev)}
                        className="p-10 bg-gray-400 flex items-center justify-between font-bold rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white w-full text-[1.8rem] font-[800] text-left">
                        Cadet Summer Opportunities
                        { !isOpen3 ? (
                            <AiOutlineCaretDown className="h-8" />
                            ) : (
                                <AiOutlineCaretUp className="h-8" />
                            )
                        }
                    </button>
                    {isOpen3 && <div className="bg-blue-400 absolute top-40 flex flex-col">
                            <Opportunities />
                        </div>}
                </div> */}

                {/* <div className="relative flex flex-col items-center pb-5 rounded-lg">
                    <button onClick={() => setIsOpen4((prev) => !prev)}
                        className="p-10 bg-gray-400 flex items-center justify-between font-bold rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white w-full text-[1.8rem] font-[800] text-left">
                        Ranger Challenge
                        { !isOpen4 ? (
                            <AiOutlineCaretDown className="h-8" />
                            ) : (
                                <AiOutlineCaretUp className="h-8" />
                            )
                        }
                    </button>
                    {isOpen4 && <div className="bg-blue-400 absolute top-40 flex flex-col">
                            <Ranger />
                        </div>}
                </div> */}



                {/* ======================= Main Container ======================= */}
                <div className="md:flex justify-between sm:flex-col md:flex-row gap-3">

                    {/* ======================= Right Side of the Container ======================= */}
                    <div className="md:basis-4/4 flex justify-between text-left mt-10 flex-wrap gap-3 md:mt-0 md:flex-col">
                        {/* ======================= Populate with content ======================= */}


                        {/* what is rotc */}
                        <div className="pb-0">
                            <h1 className="pb-0 text-headingColor font-[800] text-[1.8rem] sm:text-[30px] leading-[35px] sm:leading-[0px] mt-5">
                                What is ROTC?
                            </h1>
                            <WhatIsROTC />
                        </div>


                        {/* Cadre */}
                        <div className="pb-10">
                            <h1 className="pb-5 text-headingColor font-[800] text-[1.8rem] sm:text-[30px] leading-[35px] sm:leading-[46px] mt-5">
                                Cadre
                            </h1>
                            <Cadre />
                        </div>


                        {/* Summer opportunities */}
                        <div className="pb-10">
                            <h1 className="pb-5 text-headingColor font-[800] text-[1.8rem] sm:text-[30px] leading-[35px] sm:leading-[46px] mt-5">
                                Cadet Summer Opportunities
                            </h1>
                            <Opportunities />
                        </div>


                        {/* Ranger Challenge */}
                        <div className="pb-10">
                            <h1 className="pb-5 text-headingColor font-[800] text-[1.8rem] sm:text-[30px] leading-[35px] sm:leading-[46px] mt-5">
                                Ranger Challenge
                            </h1>
                            <Ranger />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About;
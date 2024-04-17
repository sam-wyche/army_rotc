import Opportunities from "./Opportunities/Opportunities"
import Cadre from "./Cadre/Cadre";
import WhatIsROTC from "./WhatIsROTC";
import Ranger from "./Ranger/Ranger"
// import AboutModal from "./AboutModal"

export function About() {

    return(
        // <AboutModal />
        <>
        <section className="About id=/about">

            <div className="container">
                <h1 className="pb-10 text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5">
                    About
                </h1>
                {/* ======================= Main Container ======================= */}
                <div className="border-2 md:flex justify-between sm:flex-col md:flex-row gap-3">
                    {/* ======================= Left Side of the container ======================= */}
                    <div className="w-full md:basis-1/4">
                        {/* ======================= Side Menu ======================= */}
                        <div className="max-w-xs fixed flex flex-col rounded-lg shadow-sm">
                            <button className="py-3 px-4 inline-flex items-center gap-x-2 rounded-t-md text-sm border border-gray-200 shadow-sm hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
                                What is ROTC?
                            </button>
                            <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm border border-gray-200 shadow-sm hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
                                Cadre
                            </button>
                            <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm border border-gray-200 shadow-sm hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
                                Cadet Summer Opportunities
                            </button>
                            <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm border border-gray-200 shadow-sm hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
                                Ranger Challenge
                            </button>
                            <button className="py-3 px-4 inline-flex items-center gap-x-2 rounded-b-md text-sm border border-gray-200 shadow-sm hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
                                Pershing Rifles
                            </button>
                            <button className="py-3 px-4 inline-flex items-center gap-x-2 rounded-b-md text-sm border border-gray-200 shadow-sm hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
                                Clubs
                            </button>
                        </div>
                    </div>

                    {/* ======================= Right Side of the Container ======================= */}
                    <div className="md:basis-3/4 flex justify-between text-left mt-10 flex-wrap gap-3 md:mt-0 md:flex-col border-4">
                        {/* ======================= Populate with content ======================= */}


                        {/* what is rotc */}
                        <div className="border-2 pb-0">
                            <h1 className="pb-0 text-headingColor font-[800] text-[1.8rem] sm:text-[30px] leading-[35px] sm:leading-[0px] mt-5">
                                What is ROTC?
                            </h1>
                            <WhatIsROTC />
                        </div>


                        {/* Cadre */}
                        <div className="border-2 pb-10">
                            <h1 className="border-2 pb-5 text-headingColor font-[800] text-[1.8rem] sm:text-[30px] leading-[35px] sm:leading-[46px] mt-5">
                                Cadre
                            </h1>
                            <Cadre />
                        </div>


                        {/* Summer opportunities */}
                        <div className="border-2 pb-10">
                            <h1 className="pb-5 text-headingColor font-[800] text-[1.8rem] sm:text-[30px] leading-[35px] sm:leading-[46px] mt-5">
                                Cadet Summer Opportunities
                            </h1>
                            {/* Modal Style */}
                            <Opportunities />
                        </div>


                        {/* Ranger Challenge */}
                        <div className="border-2 pb-10">
                            <h1 className="pb-5 text-headingColor font-[800] text-[1.8rem] sm:text-[30px] leading-[35px] sm:leading-[46px] mt-5">
                                Ranger Challenge
                            </h1>
                            <Ranger />
                            <div>
                                <div>
                                    {/* Top Image */}
                                    {/* Main Description */}
                                </div>
                                <div>
                                    {/* Tug o war image*/}
                                    {/* Description of team vs team/day 1 */}
                                </div>
                                <div>
                                    {/* Alpha course description */}
                                    {/* alpha course pic */}
                                </div>
                                <div>
                                    {/* Bravo course pic */}
                                    {/* Bravo course description */}
                                </div>
                            </div>
                        </div>


                        {/* Pershing Rifles */}
                        <div className="border-2 pb-10">
                            <h1 className="pb-5 text-headingColor font-[800] text-[1.8rem] sm:text-[30px] leading-[35px] sm:leading-[46px] mt-5">
                                Pershing Rifles
                            </h1>
                            {/* Football games */}
                            {/* Color Guard */}
                        </div>


                        {/* Clubs */}
                        <div className="border-2">
                            <h1 className="pb-5 text-headingColor font-[800] text-[1.8rem] sm:text-[30px] leading-[35px] sm:leading-[46px] mt-5">
                                Clubs
                            </h1>
                            {/* Modal Style */}
                                {/* Military history */}
                                {/* Tactics */}
                                {/* Ruck */}
                            <p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About;
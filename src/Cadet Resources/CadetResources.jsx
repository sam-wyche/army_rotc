export function CadetResources() {

    return(
        <>
        <section className="CadetResources id=/cadetresources">

            <div className="container">
                <h1 className="pb-10 text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5">
                    Cadet Resources
                </h1>
                {/* ======================= Main Container ======================= */}
                <div className="md:flex items-center justify-between sm:flex-col md:flex-row gap-3">
                    {/* ======================= Left Side of the container ======================= */}
                    <div className="w-full md:basis-1/4">
                        {/* ======================= Side Menu ======================= */}
                        <div className="max-w-xs flex flex-col rounded-lg shadow-sm">
                            <button className="py-3 px-4 inline-flex items-center gap-x-2 rounded-t-md text-sm border border-gray-200 shadow-sm hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
                                Announcements
                            </button>
                            <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm border border-gray-200 shadow-sm hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
                                This Week's Training Plan
                            </button>
                            <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm border border-gray-200 shadow-sm hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
                                Links to Doctrine
                            </button>
                            <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm border border-gray-200 shadow-sm hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
                                Cadet Chatbot
                            </button>
                            <button className="py-3 px-4 inline-flex items-center gap-x-2 rounded-b-md text-sm border border-gray-200 shadow-sm hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
                                Echo
                            </button>
                        </div>
                    </div>

                    {/* ======================= Right Side of the Container ======================= */}
                    <div className="md:basis-3/4 flex justify-between text-left mt-10 flex-wrap gap-3 md:mt-0 md:flex-col border-4">
                        <p classname="">Testing</p>
                        {/* ======================= Populate with content ======================= */}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default CadetResources;
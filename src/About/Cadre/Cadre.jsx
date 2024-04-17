import React,{useState} from "react";
import data from "./CadreData"
import Modal from "./CadreModal";

const Cadre = () => {

    const [nextItems] = useState(6)
    const [portfolios] = useState(data)
    const [showModal, setShowModal] = useState(false)
    const [activeID, setActiveID] = useState(null)

    const showModalHandler = id => {
        setShowModal(true)
        setActiveID(id)
    }

    return (
    <section id="cadre">
        <div className="container">

            <div className="flex items-center gap-4 flex-wrap mt-0">
                {
                    portfolios?.slice(0, nextItems)?.map((portfolio,index)=>(
                        <div key={index}
                            data-aos="fade-zoom-in"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[%] relative z-[1] border border-[2px] rounded-[5px]"
                        >
                            <figure>
                                <img className="rounded-[8px] p-1" src={portfolio.imgUrl} alt="" />
                            </figure>
                            <h4 className="text-center text-[1.25rem] font-[600] text-black">
                                {portfolio.name}
                            </h4>

                            <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                                <div className="w-full h-full flex items-center justify-center">
                                    <button onClick={()=>showModalHandler(portfolio.id)}
                                        className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200">
                                        See Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>

        {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>)
}


export default Cadre;
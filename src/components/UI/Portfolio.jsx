import React,{useState, useEffect} from "react";
import data from "../../assets/Data/portfolioData"
import Modal from "./Modal";

const Portfolio = () => {

    const [nextItems, setNextItems] = useState(6)
    const [portfolios, setPortfolios] = useState(data)
    const [selectTab, setSelectTab] = useState('all')
    const [showModal, setShowModal] = useState(false)
    const [activeID, setActiveID] = useState(null)

    const loadMoreHandler = () => {
        setNextItems(prev=> prev + 3)
    };

    const showModalHandler = id => {
        setShowModal(true)
        setActiveID(id)
    }

    useEffect(()=>{
        if(selectTab === 'all') {
            setPortfolios(data)
        }

        if(selectTab === 'combat-arms') {
            const filteredData = data.filter(item => item.category === 'combat-arms')
            setPortfolios(filteredData)
        }

        if(selectTab === 'combat-support') {
            const filteredData = data.filter(item => item.category === 'combat-support')
            setPortfolios(filteredData)
        }

        if(selectTab === 'combat-service-support') {
            const filteredData = data.filter(item => item.category === 'combat-service-support')
            setPortfolios(filteredData)
        }

        if(selectTab === 'special-branches') {
            const filteredData = data.filter(item => item.category === 'special-branches')
            setPortfolios(filteredData)
        }
    },[selectTab])

    return (
    <section id="portfolio">
        <div className="container">
            <div className="flex items-center justify-between flex-wrap">
                <div className="mb-7 sm:mb-0">
                    <h3 className="text-headingColor text-[2rem] font-[700]">
                        Branches
                    </h3>
                </div>

                <div className="flex gap-3">
                    <button onClick={()=>setSelectTab('all')}
                        className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
                        All
                    </button>
                    <button onClick={()=>setSelectTab('combat-arms')}
                        className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
                        Combat Arms
                    </button>
                    <button onClick={()=>setSelectTab('combat-support')}
                        className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
                        Combat Support
                    </button>
                    <button onClick={()=>setSelectTab('combat-service-support')}
                        className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
                        Combat Service Support
                    </button>
                    <button onClick={()=>setSelectTab('special-branches')}
                        className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
                        Special Branches
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap mt-12">
                {
                    portfolios?.slice(0, nextItems)?.map((portfolio,index)=>(
                        <div key={index}
                            data-aos="fade-zoom-in"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1] border border-[2px] rounded-[5px]"
                        >
                            <figure>
                                <img className="rounded-[8px] p-1" src={portfolio.imgUrl} alt="" />
                            </figure>
                            <h4 className="text-center text-[1.25rem] font-[600] text-primaryColor">
                                {portfolio.title}
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

            <div className="text-center mt-6">
            {
                nextItems < portfolios.length && data.length >6 && (
                <button onClick={loadMoreHandler}
                className="text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200">
                    Load More
                </button>)
            }
            </div>

        </div>

        {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>)
}


export default Portfolio;
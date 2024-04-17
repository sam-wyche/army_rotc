import React from "react";
import portfolios from "./CadreData";

const Modal = ({activeID, setShowModal}) => {

    const portfolio = portfolios.find(portfolio=> portfolio.id === activeID)

    return (
        <div className="overflow-auto w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
            <div className="w-11/12 md:max-w-[600px] md:w-full absolute top-20 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1 p-5">
                <div className="">
                    <figure>
                        <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" />
                    </figure>
                </div>

                <div>
                    <h2 className="text-2xl text-headingColor font-[700] my-0">
                        {portfolio.name}
                    </h2>

                    <p className="text-[20px] leading-7 text-black">
                        {portfolio.position}
                    </p>

                    <p className="text-[15px] leading-7 text-black">
                        {portfolio.branch}
                    </p>

                    <p className="text-[12px] leading-7 text-smallTextColor">
                        {portfolio.bio}
                    </p>
                </div>

                <button onClick={()=>setShowModal(false)}
                    className="w-[1.8rem] h-[1.8rem] bg-[white] absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer"
                >
                    &times;
                </button>

            </div>
        </div>
    )
}


export default Modal;
import Portfolio from "../UI/Portfolio"

export function Branches() {

    return(
        <>
        <section className="Branches id=/branches">

            <div className="container">
                <h1 className="pb-10 text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5">
                    Branching Options
                </h1>
                <Portfolio />
            </div>
        </section>
        </>
    )
}

export default Branches;
import React, {useRef, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "../../Home/Home"
import About from "../../About/About";
import Branches from "../Pages/BranchesPage"
import Contact from "../Pages/Contact"

const Header = () => {

    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const stickyHeaderFunc = ()=>{
        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
                headerRef.current.classList.add('sticky_header')
            }else{
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }

    useEffect(()=>{
        stickyHeaderFunc()

        return window.removeEventListener('scroll', stickyHeaderFunc)
    },[])

    // const handleClick = e => {
    //     e.preventDefault();

    //     const targetAttr = e.target.getAttribute("href");
    //     const location = document.querySelector(targetAttr).offsetTop;

    //     window.scrollTo({
    //         top: location - 80,
    //         left: 0
    //     })
    // }

    const toggleMenu = ()=> menuRef.current.classList.toggle('show_menu')

    return (
        <header ref={headerRef} className="w-full h-[80px] leading-[80] flex intems-center bg-[#151515]">
            <div className="container">
                <div className="flex items-center justify-between">
                    {/* ============ logo start ========= */}
                    <div className="flex items-center gap-[10px]">
                        <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
                            UC
                        </span>

                        <div className="leading-[20px]">
                            <h2 className="text-xl text-headerTextColor font-[700]">Army ROTC</h2>
                            <p className="text-headerTextColor text-[14px] font-[500]">
                                Bearcat Battalion
                            </p>
                        </div>
                    </div>
                    {/* ============ logo end ========== */}

                    {/* ============ menu start ========== */}
                    <Router>
                        <div className="menu">
                            <nav>
                                <ul className="flex items-center gap-10 h-[80px]">
                                    <li>
                                        <Link to="/" className="text-headerTextColor font-[600]">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about" className="text-headerTextColor font-[600]">About</Link>     
                                    </li>
                                    <li>
                                        <Link to="/branches" className="text-headerTextColor font-[600]">Branches</Link>
                                    </li>
                                </ul>
                            </nav>
                            <main>
                                <Routes>
                                    <Route path= "/" element={Home} />
                                    <Route path= "/about" element={About} />
                                    <Route path = "/branches" element={Branches} />
                                    <Route path = "/contact" element={Contact} />
                                </Routes>
                            </main>
                        </div>
                    </Router>
                    {/* ============ menu end ========== */}

                    {/* ============ menu right start ============ */}
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-headerTextColor font-[600] border border-solid border-smallTextColor border-2 py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[600] ease-in duration-300">
                            <i class="ri-send-plane-line">Let's Talk</i>
                        </button>

                        <span onClick={toggleMenu} className="text-2xl text-smallTextColor md:hidden cursor-pointer">
                            <i class="ri-menu-line"></i>
                        </span>
                    </div>
                    {/* ============ menu right end ============ */}

                </div>
            </div>
        </header>
    )
}

export default Header;
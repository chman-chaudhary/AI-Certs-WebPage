import React, { useState } from 'react'
import { SquareBtn } from './Button'

function Navbar() {

    const [mode, setMode] = useState("light");
    const [isOpen, setIsOpen] = useState(false);
    const hoverText = "hover:text-[rgb(207,169,53)] duration-500 ease";
    const modText = document.getElementsByClassName("modText");
    const modBg = document.getElementsByClassName("modBg");

    const handleMode = (e) => {
        if (e.target.value === "light") {
            document.body.style.backgroundColor = "#000";
            for (let i = 0; i < modText.length; i++) {
                modText[i].style.color = "#FFF";
            }
            for (let i = 0; i < modBg.length; i++) {
                modBg[i].style.backgroundColor = "#000";
            }
            setMode("dark");
        } else {
            document.body.style.backgroundColor = '#FFF';
            for (let i = 0; i < modText.length; i++) {
                modText[i].style.color = "#000";
            }
            for (let i = 0; i < modBg.length; i++) {
                modBg[i].style.backgroundColor = "#FFF";
            }
            setMode("light");
        }
        console.log(mode);
    }



    return (
        <>
            <div className='w-full min-h-24 h-fit text-white lg:flex md:flex items-center justify-start gap-5 z-10 mx-0 px-10 fixed bg-black'>
                <div className='text-4xl flex items-center'><span className='text-[rgb(207,169,53)] font-bold'>AI</span> &nbsp;CERTs<sup className='text-xl'>TM</sup></div>
                <div className="lg:hidden flex justify-end items-center w-full ">
                    <div className="lg:hidden fixed">
                        <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`lg:flex justify-between items-center w-full ${isOpen ? "block" : "hidden"}`}>
                    <ul className='lg:flex block justify-between gap-5 items-center'>
                        <li className='text-sm font-bold text-[rgb(207,169,53)] '>About <i className="fa-solid fa-caret-down"></i></li>
                        <li className='text-sm font-bold text-[rgb(207,169,53)]'>Certification <i className="fa-solid fa-caret-down"></i></li>
                        <li className={`text-sm font-bold ${hoverText}`}>Authorized Partners</li>
                        <li className={`text-sm font-bold ${hoverText}`}>Authorized Traning</li>
                        <li className='text-sm font-bold text-[rgb(207,169,53)]'>Resources <i className="fa-solid fa-caret-down"></i></li>
                        <li className={`text-sm font-bold ${hoverText}`}>AI CERTs Labs</li>
                        <li className={`text-sm font-bold ${hoverText}`}>Store</li>
                    </ul>
                    <div className='lg:flex block items-center gap-3'><label className="switch">
                        <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
                        <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>
                        <input type="checkbox" className="input" onChange={handleMode} value={mode} />
                        <span className="slider"></span>
                    </label>
                        <SquareBtn text={"Get Certified"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar

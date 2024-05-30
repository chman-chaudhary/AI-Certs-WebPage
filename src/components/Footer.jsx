import React from 'react'

export default function Footer() {
    const hoverText = "hover:text-[rgb(207,169,53)] duration-500 ease modText";
    return (
        <>
            <div className='modText mt-20 px-10 lg:flex gap-20 cursor-pointer'>
                <div>
                    <div className='text-5xl flex items-center'><span className='text-[rgb(207,169,53)] font-bold'>AI</span> &nbsp;CERTs<sup className='text-xl'>TM</sup></div>
                    <div className='mt-32'>
                        <h3 className='text-3xl font-semibold mb-10'>Newsletter Signup</h3>
                        <form className='flex items-end modText'>
                            <input type="email" className='modBg border-b-[0.5px] py-3 px-5 text-2xl border-gray-400 w-96 focus:outline-none' placeholder='Enter your Email' />
                            <button type='submit' ><i className="fa-solid fa-arrow-right border-b-[0.5px] text-2xl p-2 border-gray-400"></i></button>
                        </form>
                        <ul className='flex gap-10 py-10 text-2xl'>
                            <li><i className="fa-brands fa-facebook-f"></i></li>
                            <li><i className="fa-brands fa-youtube"></i></li>
                            <li><i className="fa-brands fa-instagram"></i></li>
                            <li><i className="fa-brands fa-linkedin-in"></i></li>
                            <li><i className="fa-brands fa-x-twitter"></i></li>
                        </ul>
                    </div>
                </div>
                <div className='w-full lg:flex md:flex justify-evenly'>
                    <ul className='mb-10'>
                        <li className='text-3xl font-semibold mb-8'>About</li>
                        <li className={`mb-5 text-lg text-gray-400 ${hoverText}`}>Why AI CERTs™</li>
                        <li className={`mb-5 text-lg text-gray-400 ${hoverText}`}>Accreditation</li>
                        <li className={`mb-5 text-lg text-gray-400 ${hoverText}`}>Meet Our Team</li>
                        <li className={`mb-5 text-lg text-gray-400 ${hoverText}`}>Trademarks</li>
                        <li className={`mb-5 text-lg text-gray-400 ${hoverText}`}>Blogs</li>
                        <li className={`mb-5 text-lg text-gray-400 ${hoverText}`}>Press Release</li>
                        <li className={`mb-5 text-lg text-gray-400 ${hoverText}`}>Testimonials</li>
                        <li className={`mb-5 text-lg text-gray-400 ${hoverText}`}>Careers</li>
                        <li className={`mb-5 text-lg text-gray-400 ${hoverText}`}>Privacy Policy</li>
                        <li className={`mb-5 text-lg text-gray-400 ${hoverText}`}>Terms & Conditions</li>
                        <li className={`mb-5 text-lg text-gray-400 ${hoverText}`}>Contact</li>
                    </ul>
                    <ul className='mb-10'>
                        <li className='text-4xl font-semibold mb-8'>Certifications</li>
                        <li className={`mb-5 text-lg text-gray-400 ${hoverText}`}>AI+ Professional™</li>
                        <li className={`mb-5 text-lg text-gray-400 ${hoverText}`}>AI+ Technical™</li>
                        <li className={`mb-5 text-lg text-gray-400 ${hoverText}`}>Blockchain+ Technical™</li>
                        <li className={`mb-5 text-lg text-gray-400 ${hoverText}`}>Blockchain+ Professional™</li>
                        <li className={`mb-5 text-lg text-gray-400 ${hoverText}`}>View All</li>
                    </ul>
                    <ul className='mb-10'>
                        <li className='text-3xl font-semibold mb-8'>Authorized</li>
                        <li className={`mb-5 text-lg text-gray-400 ${hoverText}`}>Authorized</li>
                        <li className={`mb-5 text-lg text-gray-400 ${hoverText}`}>Partners</li>
                    </ul>
                </div>
            </div>
            <div className='border-t-[0.5px] border-gray-600 flex items-center text-gray-400 py-6 px-10'>Copyright © AI Certs™, Inc. All Rights Reserved</div>
        </>
    )
}

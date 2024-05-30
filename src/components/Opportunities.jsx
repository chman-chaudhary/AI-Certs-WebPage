import React from 'react'

export default function Opportunities() {
    return (
        <div id='opportunities'>
            <h2 className='text-5xl font-bold py-24 modText px-5'>Industry Opportunities after Course Completion</h2>
            <div className='w-full text-white px-10 overflow-hidden container mx-auto'>
                <div className='overflow-hidden w-full'>
                    <ul className='lg:flex md:flex block hover:transtion overflow-x-auto snap-x snap-mandatory duration-500 ease-in-out gap-4 scroll-cards'>
                        <li className='min-w-[32%] p-5 text-center py-5 flex flex-col gap-5 items-center bg-[rgb(23,26,36)] rounded-xl mb-10'>
                            <i className="fa-solid fa-briefcase text-5xl my-6"></i>
                            <h3 className='text-2xl text-center font-semibold'>Security Reseacher</h3>
                            <p className='text-center text-lg text-gray-400'>Investigates AI-driven security solutions, explores emerging threats, and develops innovative cybersecurity defense mechanisms.</p>
                        </li>
                        <li className='min-w-[32%] p-5 text-center py-5 flex flex-col gap-5 items-center bg-[rgb(23,26,36)] rounded-xl mb-10'>
                            <i className="fa-solid fa-briefcase text-5xl my-6"></i>
                            <h3 className='text-2xl text-center font-semibold'>Penetration Tester</h3>
                            <p className='text-center text-lg text-gray-400'>Uses AI to identify and exploit vulnerabilities in systems, ensuring robustness against potential cyberattacks.</p>
                        </li>
                        <li className='min-w-[32%] p-5 text-center py-5 flex flex-col gap-5 items-center bg-[rgb(23,26,36)] rounded-xl mb-10'>
                            <i className="fa-solid fa-briefcase text-5xl my-6"></i>
                            <h3 className='text-2xl text-center font-semibold'>Vulnerability Assessment Specialist</h3>
                            <p className='text-center text-lg text-gray-400'>Specializes in AI-powered assessments to identify, analyze, and prioritize security vulnerabilities in technology infrastructures.</p>
                        </li>
                        <li className='min-w-[32%] p-5 text-center py-5 flex flex-col gap-5 items-center bg-[rgb(23,26,36)] rounded-xl mb-10'>
                            <i className="fa-solid fa-briefcase text-5xl my-6"></i>
                            <h3 className='text-2xl text-center font-semibold'>Cybersecurity Analyst</h3>
                            <p className='text-center text-lg text-gray-400'> Analyzes cyber threats using AI tools, monitors security systems, and recommends solutions to enhance network safety.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

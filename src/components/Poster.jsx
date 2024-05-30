import React from 'react'
import { SquareBtn } from './Button'
function Poster() {
    return (
        <div className='modText py-16 w-full px-5 pt-24'>
            <div className='flex justify-between gap-20'>
                <div className='w-10/12'>
                    <h2 className='text-7xl'><span className='text-[rgb(207,169,53)]'>AI</span>+ <br />Ethical Hacker™</h2>
                    <p className='text-gray-400 font-medium my-10 text-lg'>
                        The AI+ Ethical Hacker certification delves into the intersection of cybersecurity and artificial intelligence, a pivotal juncture in our era of rapid technological progress. Tailored for budding ethical hackers and cybersecurity experts, it offers comprehensive insights into AI's transformative impact on digital offense and defense strategies. Unlike conventional ethical hacking courses, this program harnesses AI's power to enhance cybersecurity approaches. It caters to tech enthusiasts eager to master the fusion of cutting-edge AI methods with ethical hacking practices amidst the swiftly evolving digital landscape. The curriculum encompasses four key areas, from course objectives and prerequisites to anticipated job roles and the latest AI technologies in Ethical Hacking.
                    </p>
                </div>
                <div className={`hidden xl:flex lg:flex justify-center items-center mt-20 w-2/5 h-80 bg-gradient-to-b from-[rgb(207,169,53)] to-[rgb(23,26,36)]`}>
                    <img src="https://www.aicerts.io/wp-content/uploads/2024/02/Badge-AI-Ethical-Hacker.svg" alt="Image" className='h-48 w-48' />
                </div>
            </div>
            <div className='lg:flex md:flex gap-10 text-xl'>
                <SquareBtn text={"Buy Exam Bundle"} />
                <SquareBtn text={"Download Blueprint"} />
            </div>
        </div>
    )
}

export default Poster

import React from 'react'

export default function ExamDetails() {
    return (
        <div className='text-white px-5 w-full pt-24 pb-14 min-w-fit bg-[rgb(23,26,36)]' id='examDetails'>
            <h2 className='text-5xl py-10 font-bold'>Exam Details</h2>
            <div className='lg:flex gap-14'>
                <div className='video-container mt-10'>
                    <iframe className='lg:w-[35rem] lg:h-80 md:w-[35rem] md:h-80 w-96 h-60' width="580" height="325" src="https://www.youtube.com/embed/vsWxs1tuwDk?si=1X6pdkBHIr4ICMDz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className='container px-auto sm:flex flex-wrap justify-between w-full content-between mt-10'>
                    <div className='lg:w-64 lg:h-36 lg:mr-0 md:mr-0 mr-10 pr-10 w-full flex flex-col justify-center items-center bg-[rgb(42,46,54)] rounded-3xl max-w-[36rem] min-h-32 lg:mb-0 mb-10 text-xl font-semibold'><p>Module</p><p>12</p></div>
                    <div className='lg:w-64 lg:h-36 lg:mr-0 md:mr-0 mr-10 pr-10 w-full flex flex-col justify-center items-center bg-[rgb(42,46,54)] rounded-3xl max-w-[36rem] min-h-32 lg:mb-0 mb-10 text-xl font-semibold'><p>Examination</p><p>1</p></div>
                    <div className='lg:w-64 lg:h-36 lg:mr-0 md:mr-0 mr-10 pr-10 w-full flex flex-col justify-center items-center bg-[rgb(42,46,54)] rounded-3xl max-w-[36rem] min-h-32 lg:mb-0 mb-10 text-xl font-semibold'><p>50 MCQs</p><p>90 Minutes</p></div>
                    <div className='lg:w-64 lg:h-36 lg:mr-0 md:mr-0 mr-10 pr-10 w-full flex flex-col justify-center items-center bg-[rgb(42,46,54)] rounded-3xl max-w-[36rem] min-h-32 lg:mb-0 mb-10 text-xl font-semibold'><p>Passing Score</p><p>70%</p></div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'

function NavLink() {

    const hoverText = "hover:text-[rgb(207,169,53)] duration-500 ease";

    return (
        <>
            <div className='xl:block lg:block md:block hidden'>
                <hr />
                <div className='modText px-5'>
                    <ul className='flex gap-14 my-7 text-lg'>
                        <li className={`font-semibold ${hoverText}`}><a href='#prerequisite'>Prerequisite</a></li>
                        <li className={`font-semibold ${hoverText}`}><a href='#examDetails'>Exam Details</a></li>
                        <li className={`font-semibold ${hoverText}`}><a href='#modules'>Modules</a></li>
                        <li className={`font-semibold ${hoverText}`}><a href='#skills'>Skills</a></li>
                        <li className={`font-semibold ${hoverText}`}><a href='#opportunities'>Opportunities</a></li>
                    </ul>
                </div>
                <hr />
            </div>
            <div className='container modText px-5 lg:hidden md:hidden flex flex-wrap gap-x-5'>
                <div className={`bg-[rgb(207,169,53)] rounded-3xl w-fit px-3 pb-2 my-1 min-w-fit flex justify-center items-center ${hoverText}`}><a href='#prerequisite'>Prerequisite</a></div>
                <div className={`bg-[rgb(207,169,53)] rounded-3xl w-fit px-3 pb-2 my-1 min-w-fit flex justify-center items-center ${hoverText}`}><a href='#examDetails'>Exam Details</a></div>
                <div className={`bg-[rgb(207,169,53)] rounded-3xl w-fit px-3 pb-2 my-1 min-w-fit flex justify-center items-center ${hoverText}`}><a href='#modules'>Modules</a></div>
                <div className={`bg-[rgb(207,169,53)] rounded-3xl w-fit px-3 pb-2 my-1 min-w-fit flex justify-center items-center ${hoverText}`}><a href='#skills'>Skills</a></div>
                <div className={`bg-[rgb(207,169,53)] rounded-3xl w-fit px-3 pb-2 my-1 min-w-fit flex justify-center items-center ${hoverText}`}><a href='#opportunities'>Opportunities</a></div>
            </div>
        </>
    )
}

export default NavLink

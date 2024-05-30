import React from 'react'

export default function Skills() {
    return (
        <div className='text-white px-5 py-24 bg-[rgb(23,26,36)] w-full' id='skills'>
            <h2 className='mb-10 text-5xl font-bold'>What will you Learn ?</h2>
            <div className='flex flex-wrap justify-between'>
                <div className='max-w-[32rem] mb-10'>
                    <div className='flex gap-2 items-start'><i className="fa-regular fa-circle-check text-5xl text-[rgb(207,169,53)]"></i><h3 className='text-2xl font-semibold'>AI-Integrated Cybersecurity Techniques</h3></div>
                    <p className='pl-12 mt-2 text-gray-400 text-lg'>Learners will develop the ability to integrate AI tools and technologies into cybersecurity practices. This includes using AI for ethical hacking tasks such as reconnaissance, vulnerability assessments, penetration testing, and incident response.</p>
                </div>
                <div className='max-w-[32rem] mb-10'>
                    <div className='flex gap-2 items-start'><i className="fa-regular fa-circle-check text-5xl text-[rgb(207,169,53)]"></i><h3 className='text-2xl font-semibold'>Threat Analysis and Anomaly Detection</h3></div>
                    <p className='pl-12 mt-2 text-gray-400 text-lg'>Students will gain skills in applying machine learning algorithms to detect unusual patterns and behaviors that indicate potential security threats. This skill is crucial for preemptively identifying and mitigating risks before.</p>
                </div>
                <div className='max-w-[32rem] mb-10'>
                    <div className='flex gap-2 items-start'><i className="fa-regular fa-circle-check text-5xl text-[rgb(207,169,53)]"></i><h3 className='text-2xl font-semibold'>AI for Identity and Access Management (IAM)</h3></div>
                    <p className='pl-12 mt-2 text-gray-400 text-lg'>Learners will understand how to apply AI to enhance IAM systems, crucial for maintaining secure access to resources within an organization. This involves using AI to improve authentication processes and manage user permissions more dynamically and securely.</p>
                </div>
                <div className='max-w-[32rem] mb-10'>
                    <div className='flex gap-2 items-start'><i className="fa-regular fa-circle-check text-5xl text-[rgb(207,169,53)]"></i><h3 className='text-2xl font-semibold'>Automated Security Protocol Optimization</h3></div>
                    <p className='pl-12 mt-2 text-gray-400 text-lg'>Students will be equipped to utilize AI to dynamically adjust and optimize security protocols based on real-time data analysis and threat assessment. Learners will explore how AI algorithms can predict and respond to potential security breaches by automatically tweaking firewall rules, security configurations, and other protective measures.</p>
                </div>
            </div>
        </div>
    )
}

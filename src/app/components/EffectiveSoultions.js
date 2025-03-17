import React from "react"
import Link from 'next/link';

export default function EffectiveSolutions(){
    return (
        <>
        <h1 className="mt-5 text-center">Fast and Effective Solutions to Drive Your Growth</h1>
        <div className="hero-chat rakuten-box p-3">
            <div
                className='solution-item mb-2'
                data-aos='fade-up'
                data-aos-duration='800'
            >
            <div className='row align-items-center'>
                <div className='col-md-3 pr-47'>
                    <h4>MVP for Startups</h4>
                </div>
                <div className='col-md-4 pr-47'>
                    <p className='mx-850 mb-5'>
                        Transforming Business with AI-Driven Intelligence in <span>Saudi Arabia!</span>
                    </p>
                    <p>Let's Build Something Great!</p>
                    <Link href='./integrations' className='btn btn-secondary'>
                      Connect with us!
                    </Link>
                </div>
                <div className='col-md-4 pl-47'>
                <ul>
                    <li>Conceptualizations & Prototyping</li>
                    <li>Product Design</li>
                    <li>Quality Assurance</li>
                    <li>Mobile App Development</li>
                    <li>Web Development</li>
                    <li>Product Team Expansion</li>
                </ul>
                </div>
            </div>
            </div>
            <div
                className='solution-item mb-2'
                data-aos='fade-up'
                data-aos-duration='800'
            >
            <div className='row align-items-center'>
                <div className='col-md-3 pr-47'>
                    <h4>Agile Product Team for Scaling Startups</h4>
                </div>
                <div className='col-md-4 pr-47'>
                    <p className='mx-850 mb-5'>
                        Whether you need full-cycle development or team augmentation, we accelerate your growth with agile strategies for faster, smarter product development
                    </p>
                    <p>Let's Scale Together!</p>
                    <Link href='./integrations' className='btn btn-secondary'>
                      Connect with us!
                    </Link>
                </div>
                <div className='col-md-4 pl-47'>
                <ul>
                    <li>Mobile & Web Development</li>
                    <li>Product Design</li>
                    <li>Cloud Services</li>
                    <li>Quality Assurance</li>
                    <li>Product Management</li>
                </ul>
                </div>
            </div>
            </div>
            <div
                className='solution-item'
                data-aos='fade-up'
                data-aos-duration='800'
            >
            <div className='row align-items-center'>
                <div className='col-md-3 pr-47'>
                    <h4>Enterprise Digital Transformation</h4>
                </div>
                <div className='col-md-4 pr-47'>
                    <p className='mx-850 mb-5'>
                        Streamline operations and innovate with custom enterprise solutions - whether modernizing legacy systems or building new products, we've got you covered.
                    </p>
                    <p>Let's Transform Together!</p>
                    <Link href='./integrations' className='btn btn-secondary'>
                      Connect with us!
                    </Link>
                </div>
                <div className='col-md-4 pl-47'>
                <ul>
                    <li>Product Design & Modernization</li>
                    <li>Web & Mobile Development</li>
                    <li>Cloud Solutions & Testing</li>
                    <li>Agile Team Expansion</li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
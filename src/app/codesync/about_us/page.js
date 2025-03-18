"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import CouterBlock from "@/app/components/CouterBlock";

export default function AboutUs() {
    useEffect(() => {
      // Initialize AOS for animations on scroll
      AOS.init({});
    }, []);
    return (
      <>
      <div className="container">
        <div className='feature-area mt-192'>
            <div className='container'>
                <div className='row' data-aos='fade-up' data-aos-duration='1000'>
                    <div className='col-md-12'>
                    <h2 className='title-2'>
                        ABOUT US  <span>with our solutions</span>
                    </h2>
                    </div>
                </div>
                <div className='row' data-aos='fade-up' data-aos-duration='1000'>
                    <div className='col-md-4'>
                    <h2 className='title-2'>
                        ABOUT US  <span>35+ Years Of Working Experience In !!!</span>
                    </h2>
                    </div>
                    <div className='col-md-6'>
                        <p>!!!!We have a fully trained, experienced service department ready to handle all of your auto service needs. Whether you need a simple adjustment or a performance overhaul, our trained mechanics will get you safely back out riding. we have been in the auto repair and service business since 1984.!!!
                        </p>
                    </div>
                </div>
                <div className='row gy-4 mb-5'>
                    <CouterBlock
                    img='ai_data'
                    content='AI, ML & Data Analytics Solutions'
                    link='/'
                    />
                    <CouterBlock
                    img='cloud_computing'
                    content='Cloud Computing & Infrastructure Services'
                    link='/'
                    />
                    <CouterBlock
                    img='ar-vr'
                    content='AR/VR Development & Immersive Experiences'
                    link='/'
                    />
                    <CouterBlock
                    img='web_mobile_app'
                    content='B2B & B2C Mobile & Web App Development'
                    link='/'
                    />
                    <CouterBlock
                    img='ecomm_digital'
                    content='E-Commerce Solutions & Digital Commerce'
                    link='/'
                    />
                    <CouterBlock
                    img='it_staffing'
                    content='IT Staff Augmentation & Talent Solutions'
                    link='/'
                    />
                </div>
                <div className='row mt-5' data-aos='fade-up' data-aos-duration='1000'>
                    <h4 className='text-center'>Statistics</h4>
                    <h4 className='text-center'>|</h4>
                    <h2 className='title-2'>WORKING FUN FACTS</h2>
                    <div className='row gy-4'>
                        <CouterBlock
                        img='ai_data'
                        title='35 + '
                        content='YEARS EXPERIENCE'
                        link='/'
                        />
                        <CouterBlock
                        img='cloud_computing'
                        title='7000'
                        content='HAPPY CUSTOMERS'
                        link='/'
                        />
                        <CouterBlock
                        img='cloud_computing'
                        title='99.99%'
                        content='DEVICES FIXED'
                        link='/'
                        />
                        <CouterBlock
                        img='cloud_computing'
                        title='1275'
                        content='CURRENT FIXINGS'
                        link='/'
                        />
                    </div>
                </div>
            </div>
        </div>
      </div>
      </>
    );
  }
  
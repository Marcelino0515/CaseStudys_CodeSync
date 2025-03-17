'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Brand from './components/Brand';
import Faq from './components/Faq';
import FeatureItem from './components/FeatureItem';
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';
import Solution from './components/Solution';
import Price from './components/Pricing';
import Link from 'next/link';
import blogData from '/src/data/blog.json';
import BlogCard from './components/blogCard';
import RecognitionsListings from './components/RecognitionsListings';
import PresenceExpertise from './components/PresenceExpertise';
import DevelopProducts from './components/DevelopProducts';

export default function Home() {
  useEffect(() => {
    // Initialize AOS for animations on scroll
    AOS.init({});

    const percentageBar = document.querySelector('.percentage-bar');

    function updateScrollPercentage() {
      if (percentageBar) {
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const percentage =
          Math.floor((scrollTop / (documentHeight - windowHeight)) * 100) + '%';

        percentageBar.style.width = percentage;
      }
    }

    window.addEventListener('scroll', updateScrollPercentage);
    window.addEventListener('load', updateScrollPercentage);

    return () => {
      window.removeEventListener('scroll', updateScrollPercentage);
      window.removeEventListener('load', updateScrollPercentage);
    };
  }, []);

  return (
    <div className='overflow-hidden'>
      <div className='percentage-bar'></div>
      <Hero />
      <Brand />
      <DevelopProducts />
      <div className='feature-area mt-192'>
        <div className='container'>
          <div className='row' data-aos='fade-up' data-aos-duration='1000'>
            <div className='col-md-12'>
              <h2 className='title-2'>
              Supercharge your efficiency  <span>with our solutions</span>
              </h2>
            </div>
          </div>
          <div className='row gy-4'>
            <FeatureItem
              img='ai_data'
              title='AI, ML & Data Analytics Solutions'
              content='Turn raw data into powerful insights with AI-driven automation and predictive analytics.'
              link='/'
            />
            <FeatureItem
              img='cloud_computing'
              title='Cloud Computing & Infrastructure Services'
              content='Scale your business with secure, flexible, and cost-effective cloud infrastructure solutions.'
              link='/'
            />
            <FeatureItem
              img='ar-vr'
              title='AR/VR Development & Immersive Experiences'
              content='Create engaging, interactive experiences with cutting-edge AR and VR technologies.'
              link='/'
            />
            <FeatureItem
              img='web_mobile_app'
              title='B2B & B2C Mobile & Web App Development'
              content='Build high-performance apps that enhance user experience and business efficiency.'
              link='/'
            />
            <FeatureItem
              img='ecomm_digital'
              title='E-Commerce Solutions & Digital Commerce'
              content='Empower your online store with seamless, scalable, and secure e-commerce solutions.'
              link='/'
            />
            <FeatureItem
              img='it_staffing'
              title='IT Staff Augmentation & Talent Solutions'
              content='Access top-tier tech talent to accelerate project success and business growth.'
              link='/'
            />
          </div>
        </div>
      </div>
      <Solution />
      <PresenceExpertise />
      <RecognitionsListings />
      <Faq />
      <Newsletter />
    </div>
  );
}

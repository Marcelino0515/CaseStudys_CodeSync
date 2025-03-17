import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import WebFrameworks from './WebFrameworks';
import EffectiveSolutions from './EffectiveSoultions';

export default function Solution() {
  return (
    <div className='solution-area mtb-150 hero-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <h4 className='title-2 mb-2 mt-5'>
                <span>Codesync</span> – Official Partner of <span><Image
                      src='/img/brand/rakuten-sixthsense-observability.png'
                      alt='solution'
                      width={150}
                      height={52}
                    /></span>
              </h4>
              <p className='mx-850 text-center mb-5'>
                Transforming Business with AI-Driven Intelligence in <span>Saudi Arabia!</span>
              </p>

            </div>
            <div className="hero-chat rakuten-box">
              <div className='solution-item'>

                <div
                  className='row align-items-center'
                  data-aos='fade-up'
                  data-aos-duration='800'
                >
                  <div className='col-md-6 pr-47'>
                    <Image
                      src='/img/solution.svg'
                      alt='solution'
                      width={569}
                      height={501}
                    />
                  </div>
                  <div className='col-md-6 pl-47'>
                    <h4>
                    We bring Rakuten SixthSense AI-driven intelligence to businesses, enabling predictive insights, optimized operations, and data-driven growth.
                    </h4>
                    <h4 className="tm-5 mt-5 mb-3">Why Choose Rakuten SixthSense?</h4>
                    <ul>
                      <li>AI-Powered Decision Intelligence</li>
                      <li>Predictive Analytics for Smarter Strategies</li>
                      <li>Scalable & Seamless Cloud Integration</li>
                      <li>Enhanced Customer & Business Optimization</li>
                    </ul>

                    <h4 className="tm-5 mt-3 mb-3">Who can benefits?</h4>
                    <ul className="mb-5">
                      <li>Enterprises embracing data-driven transformation</li>
                      <li>Businesses seeking real-time predictive analytics</li>
                      <li>Organizations optimizing operations with AI</li>
                    </ul>
                    <h4 className="tm-5 mt-3 mb-3">Explore the Power of Rakuten SixthSense Today</h4>

                    <Link href='./integrations' className='btn btn-secondary'>
                      Call us for Free Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <WebFrameworks />
            <EffectiveSolutions />
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';
import React from 'react';
import Chat from './Chat';

export default function Hero() {
  return (
    <div className='hero-area'>
      <div className='container' data-aos='fade-up' data-aos-duration='1000'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='title'>
              Empowering Biz to<br />
              <span>Grow Smarter!</span>
            </h1>
            <p className='mx-850 text-center'>
            We help businesses innovate, optimize operations, and scale efficiently with advanced AI solutions for automation and growth.
            </p>
            <div
              className='hero-btn'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <Link href='/contact' className='btn btn-primary'>
                Get Started
              </Link>
            </div>
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}

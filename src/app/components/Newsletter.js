import Link from 'next/link';
import React from 'react';

export default function Newsletter() {
  return (
    <div className='container'>
      <div className='row'>
        <div data-aos='fade-up' data-aos-duration='1000'>
          <div className='col-md-12'>
            <div className='ready-section'>
              <h2 className='title-2'>
              Ready to Get <span>Started?</span>
              </h2>
              <p>
              Effortlessly build and integrate your own AI-powered solutions with Codesync.
              <br />Transform your business with cutting-edge technology today!
              </p>
              <Link href='/contact' className='btn btn-primary'>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

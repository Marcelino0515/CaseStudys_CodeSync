import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function RecognitionsListings() {
  return (
    <div className='hero-brand '>
      <div className='container'>
        <div className='row'>
          <div
            className='col-md-12'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className='col-md-12 text-center' data-aos-duration='1000'>
              <p className='title-2'><span>Our Recognitions & Listings</span>
              </p>
              <h5 className='mb-5'>Recognized and listed on leading global platforms, showcasing our credibility, expertise, and commitment to innovation.</h5>
              <ul>
                <li>
                  <Link href='#'>
                    <Image
                      src='/img/brand/yolks.svg'
                      alt='brand'
                      width={160}
                      height={44}
                    />
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <Image
                      src='/img/brand/asfary.svg'
                      alt='brand'
                      width={160}
                      height={44}
                    />
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <Image
                      src='/img/brand/raw_inspection.svg'
                      alt='brand'
                      width={160}
                      height={44}
                    />
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <Image
                      src='/img/brand/shalimar.svg'
                      alt='brand'
                      width={160}
                      height={44}
                    />
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <Image
                      src='/img/brand/tawazun.svg'
                      alt='brand'
                      width={160}
                      height={44}
                    />
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <Image
                      src='/img/brand/thiqatti_logo.svg'
                      alt='brand'
                      width={160}
                      height={44}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Brand() {
  return (
    <div className='hero-brand '>
      <div className='container'>
        <div className='row'>
          <div
            className='col-md-12'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className='col-md-12' data-aos-duration='1000'>
              <p className='mx-850 text-center'>Preferred by Teams at</p>
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

'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

export default function Partners() {
    useEffect(() => {
      // Initialize AOS for animations on scroll
      AOS.init({});
    })
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
                            <h4 className='text-center'>Statistics</h4>
                            <h4 className='text-center'>|</h4>
                            <h2 className='title-2 text-center'>AUTHORIZED REPAIR PARTNERS</h2>
                            <ul>
                                <Swiper spaceBetween={20} slidesPerView={4}>
                                    <SwiperSlide>
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
                                    </SwiperSlide>
                                    <SwiperSlide>
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
                                    </SwiperSlide>
                                    <SwiperSlide>
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
                                    </SwiperSlide>
                                    <SwiperSlide>
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
                                    </SwiperSlide>
                                    <SwiperSlide>
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
                                    </SwiperSlide>
                                </Swiper>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

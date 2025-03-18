"use client"

import Hero from "@/app/components/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function OtherPages() {
    useEffect(() => {
      // Initialize AOS for animations on scroll
      AOS.init({});
    }, []);
    return (
      <>
      <Hero />
      </>
    );
  }
  
'use client';
import { useEffect } from 'react';
import React from 'react';
import PageHero from '../components/PageHero';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useScrollPercentage } from '@/hooks/useScrollPercentage';

export default function Terms() {
  useScrollPercentage();

  useEffect(() => {
    // Initialize AOS
    if (typeof window !== 'undefined') {
      Aos.init({
        duration: 1000,
        once: true,
        disable: window.innerWidth < 768,
      });
    }

    // Import Bootstrap JS only on client side
    const loadBootstrap = async () => {
      if (typeof window !== 'undefined') {
        await import('bootstrap/dist/js/bootstrap.bundle.min.js');
      }
    };

    loadBootstrap();
  }, []);

  return (
    <>
      <div class="percentage-bar"></div>
      <PageHero
        title="Terms of"
        subtitle="Service"
        content="Last Updated: March 6, 2025"
      />
      <div class="policy-area mt-192">
        <div class="container" data-aos="fade-up" data-aos-duration="1000">
          <div class="row">
            <div class="col-md-4">
              <div class="pills-tab" role="tablist" aria-orientation="vertical">
                <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#pillOne">
                  Welcome to Codesync
                </button>
                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#pillTwo">
                  Intellectual Property & Software Licenses
                </button>
                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#pillThree">
                  Disclaimer & Liability
                </button>
                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#pillFour">
                  Indemnification & Governing Law
                </button>
              </div>
            </div>
            <div class="col-md-8">
              <div class="tab-content">

                <div class="tab-pane fade show active" id="pillOne" role="tabpanel">
                  <h3 data-aos="fade-up" data-aos-duration="1000">Welcome to Codesync</h3>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    <strong>Codesync LLC</strong> owns and operates this website and its associated subdomains. By
                    accessing and using this website, you agree to comply with the terms and conditions outlined
                    in this <strong>Terms of Use Agreement</strong>. If you do not accept these terms, you must
                    discontinue using the website immediately.
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    Codesync LLC reserves the right to update, modify, or revise these terms at any time. Your
                    continued use of this website following such changes indicates your acceptance of the revised terms.
                    Users are encouraged to review this page periodically for updates.
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    <strong>Affiliate Disclosure:</strong> We may earn commissions from reviews, advertisements,
                    affiliate links, and sponsored content displayed on this website or any of our associated platforms.
                  </p>
                </div>

                <div class="tab-pane fade" id="pillTwo" role="tabpanel">
                  <h3 data-aos="fade-up" data-aos-duration="1000">Intellectual Property & Software Licenses</h3>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    All content displayed on this website—including but not limited to <strong>articles, text,
                      images, software, and code</strong>—is protected under international copyright laws and remains
                    the property of Codesync LLC.
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    Unauthorized <strong>use, reproduction, modification, distribution, or public display</strong> of
                    any content on this website is strictly prohibited without prior written permission from Codesync LLC.
                    This includes republishing or redistributing content on third-party platforms.
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    Any software available on this website, including embedded and downloadable applications, is
                    licensed to you on a <strong>non-transferable, non-exclusive basis</strong>. You may install and
                    use a single copy of the software for personal, non-commercial purposes, in compliance with applicable
                    licensing agreements.
                  </p>
                </div>

                <div class="tab-pane fade" id="pillThree" role="tabpanel">
                  <h3 data-aos="fade-up" data-aos-duration="1000">Disclaimer & Limitation of Liability</h3>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    This website and its content are provided <strong>on an "as is" basis</strong>. Codesync LLC
                    makes no guarantees regarding:
                  </p>
                  <ul data-aos="fade-up" data-aos-duration="1000">
                    <li>Accuracy, reliability, or completeness of any content.</li>
                    <li>Uninterrupted or error-free website operation.</li>
                    <li>Correction of defects or security vulnerabilities.</li>
                    <li>Protection against viruses, malware, or unauthorized third-party access.</li>
                  </ul>
                  <br/>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    Under no circumstances shall Codesync LLC be liable for any <strong>direct, indirect, incidental,
                      or consequential damages</strong> arising from your use of this website or any reliance on its content.
                    This includes, but is not limited to, damages related to data loss, business interruptions, or
                    security breaches.
                  </p>
                </div>

                <div class="tab-pane fade" id="pillFour" role="tabpanel">
                  <h3 data-aos="fade-up" data-aos-duration="1000">Indemnification & Governing Law</h3>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    You agree to <strong>indemnify, defend, and hold harmless</strong> Codesync LLC, its affiliates,
                    employees, directors, and agents from any legal claims, liabilities, or expenses arising from:
                  </p>
                  <ul data-aos="fade-up" data-aos-duration="1000">
                    <li>Your violation of these Terms of Service.</li>
                    <li>Unauthorized use of the website or its content.</li>
                    <li>Any breach of applicable laws or regulations.</li>
                  </ul>
                  <br/>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    This Agreement shall be governed by and construed in accordance with the laws of the
                    <strong> Kingdom of Saudi Arabia</strong>. Any disputes arising from your use of this website
                    shall be subject to the <strong>non-exclusive jurisdiction</strong> of the courts in Saudi Arabia.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

'use client';
import { useEffect } from 'react';
import React from 'react';
import PageHero from '../components/PageHero';
import { useScrollPercentage } from '@/hooks/useScrollPercentage';
import { useAOS } from '@/hooks/useAOS';

export default function Privacy() {
  useScrollPercentage();
  useAOS();

  useEffect(() => {
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
      <div className="percentage-bar"></div>
      <PageHero
  title="Privacy"
  subtitle="Policy"
  content="Thank you for choosing Codesync! Our Privacy Policy outlines how we 
           collect, use, and protect your information. By using Codesync, 
           you agree to our data practices and security measures."
/>

      <div className="policy-area mt-192">
        <div className="container" data-aos="fade-up" data-aos-duration="1000">
          <div class="row">
            <div class="col-md-4">
              <div class="pills-tab" role="tablist" aria-orientation="vertical">
                <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#pillOne" data-aos="fade-up" data-aos-duration="1000">
                  Information We Collect
                </button>
                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#pillTwo" data-aos="fade-up" data-aos-duration="1000">
                  How We Use Your Information
                </button>
                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#pillThree" data-aos="fade-up" data-aos-duration="1000">
                  Information Sharing
                </button>
                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#pillFour" data-aos="fade-up" data-aos-duration="1000">
                  Data Security
                </button>
                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#pillFive" data-aos="fade-up" data-aos-duration="1000">
                  Your Choices
                </button>
                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#pillSix" data-aos="fade-up" data-aos-duration="1000">
                  Children's Privacy
                </button>
                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#pillSeven" data-aos="fade-up" data-aos-duration="1000">
                  Changes to Privacy Policy
                </button>
                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#pillEight" data-aos="fade-up" data-aos-duration="1000">
                  Contact Us
                </button>
              </div>
            </div>
            <div class="col-md-8">
              <div class="tab-content">
                <div class="tab-pane fade show active" id="pillOne" role="tabpanel">
                  <h3 data-aos="fade-up" data-aos-duration="1000">Information We Collect</h3>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    Codesync collects personal and non-personal information to provide seamless digital services and ensure compliance with the Saudi Arabian <strong>Personal Data Protection Law (PDPL)</strong>. The data we collect may include <strong>personal details</strong> such as name, email, phone number, and company information that users provide while interacting with our services. Additionally, we collect <strong>transactional data</strong>, which includes business inquiries, service requests, and any other forms submitted through our digital platforms.
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    We also collect <strong>usage data</strong> from our website and applications to monitor user engagement, website performance, and optimize our digital offerings. This may include browsing behavior, pages viewed, time spent on different sections, and interactions with various features. Furthermore, <strong>device information</strong> such as IP addresses, browser types, operating systems, and location data may be automatically captured to enhance user experience and improve security.
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    All collected data is processed following <strong>PDPL regulations</strong>, ensuring that users' privacy and rights are protected. We do not collect any sensitive information unless explicitly required for specific services and in compliance with the law. Our commitment is to maintain transparency and inform users about the type of data being collected, its purpose, and how it will be used, ensuring lawful and ethical data processing.
                  </p>
                </div>
                <div class="tab-pane fade" id="pillTwo" role="tabpanel">
                  <h3 data-aos="fade-up" data-aos-duration="1000">How We Use Your Information</h3>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    The information collected by Codesync is used to <strong>enhance service delivery, improve user experience, and ensure compliance</strong> with Saudi Arabian data protection laws. We process personal data for customer support, responding to inquiries, fulfilling service requests, and optimizing our digital platforms. The collected data also enables us to customize user experiences, offering more relevant content, products, and services based on preferences and usage behavior.
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    Additionally, Codesync leverages <strong>data analytics and artificial intelligence</strong> to assess performance, identify potential improvements, and develop new solutions. By analyzing user behavior, we aim to make data-driven decisions that result in seamless and innovative digital experiences. In compliance with <strong>PDPL</strong>, personal data is processed in a manner that aligns with legal obligations, contractual agreements, and explicit user consent where required.
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    We also use collected data to <strong>communicate important updates, security notifications, and promotional offers</strong>, ensuring users are informed about changes in our services, industry trends, or potential cybersecurity threats. Users have full control over their data preferences and may opt out of certain communications, except for critical security alerts necessary for protecting user accounts and privacy.
                  </p>
                </div>
                <div class="tab-pane fade" id="pillThree" role="tabpanel">
                  <h3 data-aos="fade-up" data-aos-duration="1000">Information Sharing</h3>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    Codesync does <strong>not sell, trade, or rent personal data</strong> to third parties. However, we may share user information with <strong>trusted service providers and business partners</strong> who assist us in operating our platform, fulfilling service requests, and ensuring regulatory compliance. These third-party entities are contractually bound to protect personal data and use it solely for specified purposes.
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    Under <strong>Saudi Arabian PDPL</strong>, we may be legally required to disclose personal data in specific situations, such as compliance with government requests, law enforcement investigations, or legal obligations. Such disclosures are made only when necessary and in strict adherence to privacy regulations. Additionally, in cases of mergers, acquisitions, or business transfers, personal data may be transferred with adequate safeguards in place to ensure continued protection.
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    We also implement <strong>anonymization and encryption techniques</strong> when sharing aggregated usage statistics or analytical insights with industry partners or investors. These practices ensure that individual user identities remain protected while still allowing us to derive valuable business intelligence from collected data. Users will always be notified if there is a significant change in how their data is shared.
                  </p>
                </div>
                <div class="tab-pane fade" id="pillFour" role="tabpanel">
                  <h3 data-aos="fade-up" data-aos-duration="1000">Data Security</h3>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    Codesync prioritizes the protection of personal data by implementing <strong>robust security protocols and encryption methods</strong>. We deploy industry-standard security measures, such as firewalls, intrusion detection systems, and multi-factor authentication, to safeguard user information against unauthorized access, breaches, and cyber threats.
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    All personal data stored within our systems is <strong>encrypted at rest and in transit</strong>, ensuring that sensitive information remains protected from unauthorized interception. Additionally, we conduct regular security audits, vulnerability assessments, and compliance checks to ensure continuous security improvements and adherence to <strong>Saudi Arabia’s PDPL standards</strong>.
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    In case of a security incident or data breach, Codesync follows a <strong>strict response protocol</strong>, which includes immediate containment measures, thorough investigation, and prompt user notification as per regulatory requirements. Our commitment is to <strong>ensure data integrity, availability, and confidentiality</strong>, giving users confidence in the security of their information.
                  </p>
                </div>
                <div class="tab-pane fade" id="pillFive" role="tabpanel">
                  <h3 data-aos="fade-up" data-aos-duration="1000">Your Choices</h3>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    Codesync respects your rights under <strong>Saudi Arabia’s Personal Data Protection Law (PDPL)</strong> and ensures you have full control over your personal information. You have the right to access, update, correct, or delete any personal data that we hold about you. Users may also request information regarding how their data is processed, ensuring transparency and accountability in data handling.
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    If you wish to withdraw your consent for marketing communications, data processing, or other activities, you may do so through <strong>account settings or by contacting us directly</strong>. We will process such requests in compliance with PDPL regulations and within the legally defined timeframes. However, some data may need to be retained for legal, security, or operational reasons, such as fraud prevention or regulatory compliance.
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    We provide clear options for users to <strong>opt-out of promotional emails, targeted advertising, and tracking technologies</strong>. Additionally, for users concerned about their data usage, we offer <strong>customizable privacy settings</strong> to enhance control over personal information. If you have any concerns regarding data privacy, you can reach out to our dedicated <strong>Data Protection Officer (DPO)</strong> to seek further guidance.
                  </p>
                </div>

                <div class="tab-pane fade" id="pillSix" role="tabpanel">
                  <h3 data-aos="fade-up" data-aos-duration="1000">Children's Privacy</h3>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    Codesync's services are not intended for children under the age of <strong>13</strong>. We do not knowingly collect, store, or process personal information from individuals below this age. If it is discovered that we have unintentionally obtained data from a child, immediate measures will be taken to delete the information from our records.
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    Parents and legal guardians who believe that their child may have provided us with personal data should <strong>contact us immediately</strong>. We will take all necessary steps to <strong>verify parental consent</strong> or remove the data as per PDPL regulations. We prioritize child privacy and implement strict measures to prevent unauthorized data collection.
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    As part of our commitment to data security, we continuously monitor and update our systems to prevent unintended data collection from minors. We also encourage parents to educate children on safe internet practices and limit their exposure to platforms that require personal data submission.
                  </p>
                </div>
                <div class="tab-pane fade" id="pillSeven" role="tabpanel">
                  <h3 data-aos="fade-up" data-aos-duration="1000">Changes to Privacy Policy</h3>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    Codesync reserves the right to update this <strong>Privacy Policy</strong> to reflect changes in legal requirements, technological advancements, or business operations. Any significant modifications will be communicated via email, website notifications, or other suitable channels. Users are encouraged to <strong>review the policy periodically</strong> to stay informed about their rights and obligations.
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    Policy updates will always align with the <strong>Saudi Arabian PDPL</strong> and other applicable data protection laws. If changes impact how we handle personal data, users may be asked to provide renewed consent where necessary. Our objective is to maintain transparency, ensuring that users fully understand how their data is processed and protected.
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    The latest version of this <strong>Privacy Policy</strong> will always be available on our website. By continuing to use our services after updates take effect, users confirm their acceptance of the revised terms. If you do not agree with any modifications, you may contact us to discuss concerns or discontinue use of our services.
                  </p>
                </div>
                <div class="tab-pane fade" id="pillEight" role="tabpanel">
                  <h3 data-aos="fade-up" data-aos-duration="1000">Contact Us</h3>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or how your personal data is handled, please contact us using the details below. Our team is available to assist with inquiries, complaints, or data access requests as per <strong>Saudi Arabian PDPL</strong> guidelines.
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    <strong>Contact Information:</strong><br />
                    Email: <a href="mailto:info@codesync.sa">info@codesync.sa</a><br />
                    Phone: +966 (57) 142 2704<br />
                    Address: 8061 Ahmad Al Tartushi, 3647 Al Arid Dist. 13338, Riyadh, Saudi Arabia.
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    By using CodeSync’s services, you acknowledge and agree to the terms outlined in this <strong>Privacy Policy</strong>. If you do not agree with these terms, please refrain from using our platform and reach out for further clarification.
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

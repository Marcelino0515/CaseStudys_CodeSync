'use client';
import Image from 'next/image';
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    jobTitle: '',
    emailAddress: '',
    phoneNumber: '',
    message: '',
    agreedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      firstName: '',
      lastName: '',
      companyName: '',
      jobTitle: '',
      emailAddress: '',
      phoneNumber: '',
      message: '',
      agreedTerms: false,
    });
  };

  return (
    <div className='contact-area mtb-192'>
      <div className='container'>
        <div className='row' data-aos='fade-up' data-aos-duration='1000'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='title-2'>
                Get <span>in Touch</span>
              </h2>
            </div>
            <div
              className='col-md-12 col-lg-6'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='contact-content'>
                <Image src='/img/brand/triangletower.svg' alt='logo' width={140} height={80} />
                <p>
                Codesync was entrusted with complex challenges, including stringent latency requirements, ambiguity handling, and accuracy improvements. Through close collaboration, we customized our AI-driven solutions to meet these demands, ensuring precision and efficiency.
                </p>
                <h3>Nayyar Siddiqui, CEO</h3>
                <h4>Shalimar Corp Limited, India / Middle East</h4>
                <h5>Trusted by the world&lsquo;s most ambitious teams</h5>
                <div className='contact-brand'>
                  <Image
                    src='/img/brand/yolks.svg'
                    alt='brand'
                    width={160}
                    height={44}
                  />
                  <Image
                    src='/img/brand/asfary.svg'
                    alt='brand'
                    width={160}
                    height={44}
                  />
                  <Image
                    src='/img/brand/raw.svg'
                    alt='brand'
                    width={160}
                    height={44}
                  />
                  <Image
                    src='/img/brand/shalimar.svg'
                    alt='brand'
                    width={160}
                    height={44}
                  />
                  <Image
                    src='/img/brand/tawazun.svg'
                    alt='brand'
                    width={160}
                    height={44}
                  />
                  <Image
                    src='/img/brand/thiqatti.svg'
                    alt='brand'
                    width={160}
                    height={44}
                  />
                </div>
              </div>
            </div>
            <div
              className='col-md-12 col-lg-6'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='contact-form'>
                <h2>Quick Responses Await!</h2>
                <p>
                  Connect with us! Feel free to ask any questions or share your
                  thoughts. We&lsquo;ll respond promptly.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className='form-group'>
                    <div className='input-group'>
                      <input
                        type='text'
                        placeholder='First Name*'
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type='text'
                        placeholder='Last Name*'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='input-group'>
                      <input
                        type='text'
                        placeholder='Company Name*'
                        name='companyName'
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type='text'
                        placeholder='Job Title*'
                        name='jobTitle'
                        value={formData.jobTitle}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='input-group'>
                      <input
                        type='text'
                        placeholder='Email Address*'
                        name='emailAddress'
                        value={formData.emailAddress}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type='text'
                        placeholder='Phone Number*'
                        name='phoneNumber'
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <input
                      type='text'
                      placeholder='How can we help?'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexCheckDefault'
                      name='agreedTerms'
                      checked={formData.agreedTerms}
                      onChange={handleChange}
                      required
                    />
                    <label
                      className='form-check-label'
                      htmlFor='flexCheckDefault'
                    >
                      I read and accept terms and conditions, privacy policy.
                    </label>
                  </div>
                  <button type='submit' className='btn btn-primary'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

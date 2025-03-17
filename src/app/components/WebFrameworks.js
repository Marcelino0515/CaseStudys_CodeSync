import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WebFramework from './WebFramework';

export default function WebFrameworks({ direction, title, content, link }) {
  return (
    <>
        <div className='container'>
            <h4 className='title-2 mb-2 mt-5'>
                <span>Tech Synergy</span>
            </h4>
            <p className='title-2'>
                Empower your business with cutting-edge technology solutions tailored to enhance efficiency, scalability, and customer experience. From Al-driven insights to seamless cloud integration, we help you stay ahead in the digital era.
            </p>
            <WebFramework
                direction='left'
                title='Web Frameworks'
                content='Build high-performance apps that enhance user experience and business efficiency.'
                link='/'
            />
            <WebFramework
                direction='right'
                title='Frontend UI'
                content='Turn raw data into powerful insights with AI-driven automation and predictive analytics.'
                link='/'
            />
            <WebFramework
                direction='left'
                title='DevOps & infra'
                content='Scale your business with secure, flexible, and cost-effective cloud infrastructure solutions.'
                link='/'
            />
            <WebFramework
                direction='right'
                title='Database & M/L'
                content='Create engaging, interactive experiences with cutting-edge AR and VR technologies.'
                link='/'
            />
            <WebFramework
                direction='left'
                title='Chat and Voice Bots'
                content='Build high-performance apps that enhance user experience and business efficiency.'
                link='/'
            />
        </div>
    </>
  );
}

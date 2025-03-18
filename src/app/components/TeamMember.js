import React from 'react';
import Image from 'next/image';

export default function TeamMember({ img, name, role }) {
  return (
    <div
      className="col-md-6 col-lg-4 "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="feature-item text-center">
        <Image src={`/img/${img}.svg`} alt="icon" width={80} height={80} />
        <h4>{name}</h4>
        <hr className='mx-auto w-4'></hr>
        <p>{role}</p>
      </div>
    </div>
  );
}

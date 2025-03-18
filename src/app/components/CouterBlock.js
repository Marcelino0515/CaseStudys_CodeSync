import React from 'react';
import Image from 'next/image';

export default function CouterBlock({ img, title, content }) {
  return (
    <div
      className="col-md-6 col-lg-4"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="feature-item text-center">
        <Image src={`/img/icon/${img}.svg`} alt="icon" width={80} height={80} />
        <h1>{title}</h1>
        <h5>{content}</h5>
      </div>
    </div>
  );
}

import React from 'react';

export default function WebFramework({ direction, title, content }) {
  return (
    <div
      data-aos={"fade-" + direction}
      data-aos-duration="1000"
    >
      <div className="feature-item mb-2 mt-2">
        <h3 className='text-center'>{title}</h3>
        <p className='text-center'>{content}</p>
      </div>
    </div>
  );
}

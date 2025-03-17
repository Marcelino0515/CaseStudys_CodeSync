import React, { useState } from 'react';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What industries can benefit from AI solutions?",
      answer: "AI solutions transform industries such as healthcare, finance, retail, manufacturing, education, and logistics by improving efficiency, automating processes, and delivering actionable insights."
    },
    {
      question: "How long does it take to implement an AI solution?",
      answer: "Implementation timelines vary based on complexity, data readiness, and integration requirements. While basic AI models can be deployed in weeks, more advanced solutions may take several months for full optimization."
    },
    {
      question: "Do I need technical expertise to use AI in my business?",
      answer: "No. Our AI solutions are designed for seamless integration and ease of use. We provide intuitive interfaces, automation tools, and support to help businesses leverage AI without requiring deep technical expertise."
    },
    {
      question: "Can AI be customized for my business needs?",
      answer: "Yes. We develop AI solutions tailored to your specific business challenges, workflows, and objectives. Our approach ensures AI delivers measurable results aligned with your industry needs."
    },
    {
      question: "How does Codesync ensure data security in AI solutions?",
      answer: "We implement enterprise-grade encryption, strict access controls, and compliance with industry regulations to protect your data. Security and privacy are at the core of all our AI-driven solutions."
    },
    {
      question: "What cloud computing services does Codesync offer?",
      answer: "We provide scalable cloud infrastructure, cloud migration, DevOps automation, and security solutions, helping businesses enhance performance, security, and cost-efficiency."
    },
    {
      question: "How can AR/VR solutions benefit my business?",
      answer: "AR/VR technology enhances customer engagement, employee training, and product visualization across industries like retail, healthcare, real estate, and education, creating immersive digital experiences."
    },
    {
      question: "What types of applications does Codesync develop?",
      answer: "We specialize in B2B and B2C mobile and web applications, delivering scalable, high-performance solutions for e-commerce, healthcare, fintech, logistics, and more."
    },
    {
      question: "Does Codesync provide IT staff augmentation?",
      answer: "Yes. We offer IT staff augmentation services, connecting businesses with top-tier developers, engineers, and tech experts to scale their teams efficiently and meet project demands."
    },
    {
      question: "How can I get started with Codesync?",
      answer: "Contact us today! Our team will assess your business needs, recommend tailored solutions, and guide you through a seamless implementation process to accelerate your digital transformation."
    }
];

  return (
    <div className="mx-auto faq-area mx-850 mtb-192">
      <div className="container">
        <div data-aos="fade-up" data-aos-duration="1000">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-2">
                Frequently Asked <span>Questions</span>
              </h2>
              <div className="accordion" id="accordionInner">
                {faqData.map((faq, index) => (
                  <div 
                    key={index} 
                    data-aos="fade-up" 
                    data-aos-duration={200 + (index * 100)}
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                          type="button"
                          onClick={() => handleAccordionClick(index)}
                        >
                          {faq.question}
                        </button>
                      </h2>
                      <div
                        className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                      >
                        <div className="accordion-body">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

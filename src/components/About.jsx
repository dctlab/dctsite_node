import React from 'react';

const About = () => {
  return (
    <article className="content-x-margin content-y-padding">
      <div className="container">
        <div className="gap grid grid-cols-1 sm:grid-cols-6 md:grid-cols-12">
          <div className="sm:col-span-5 md:col-span-10">
            <div className="gap md:grid md:grid-cols-2 md:gap-x-8">
              <h1 className="mb-10 sm:mb-8 md:mb-0">
                About <span className="text-blue">Us</span>
              </h1>
              <img src="/src/assets/images/illustrious-illustrations/home-about.svg" className="object-fill md:row-span-3" alt="About Us Illustration" />
              <div className="para-lg mt-10 sm:mt-8 md:mt-8">
                <p>
                  DirectCyberTech is a dedicated Ops Team that understands your business, empowers your developers, modernizes your infrastructure, and helps you grow.
                </p>
                <p className="mt-4">
                  We are industry experts with over ten years of experience developing software that has modernized the hosting industry. Our company culture is based on trust, learning, and purpose.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-14 pb-10 sm:mt-16 sm:pt-16 md:pt-0 md:mt-32 md:pb-0">
          <h2 className="mb-10">Our Mission</h2>
          <div className="para-lg">
            <p>
              Our mission is to provide businesses with the best possible cloud operations experience. We believe that by providing a dedicated team of experts, we can help businesses of all sizes achieve their goals.
            </p>
            <p className="mt-4">
              We are committed to providing our clients with the highest level of service and support. We believe that by working closely with our clients, we can help them achieve their full potential.
            </p>
          </div>
        </div>

        <div className="mt-20 pt-14 pb-10 sm:mt-16 sm:pt-16 md:pt-0 md:mt-32 md:pb-0">
          <h2 className="mb-10">Our Values</h2>
          <ul className="list-disc list-inside para-lg">
            <li><strong>Trust:</strong> We believe that trust is the foundation of any successful relationship. We are committed to building trust with our clients by being transparent, honest, and reliable.</li>
            <li className="mt-2"><strong>Learning:</strong> We are a team of lifelong learners. We are always looking for new ways to improve our skills and knowledge so that we can provide our clients with the best possible service.</li>
            <li className="mt-2"><strong>Purpose:</strong> We are passionate about what we do. We believe that our work has a positive impact on the world, and we are committed to making a difference.</li>
          </ul>
        </div>

        <div className="mt-20 pt-14 pb-10 sm:mt-16 sm:pt-16 md:pt-0 md:mt-32 md:pb-0">
          <h2 className="mb-10">Contact Us</h2>
          <div className="para-lg">
            <p>
              If you're interested in learning more about DirectCyberTech and how we can help your business, please don't hesitate to contact us.
            </p>
            <a href="/contact/" className="black-button mt-12 md:mt-14">
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default About;

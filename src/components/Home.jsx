import React from 'react';

const Home = () => {
  return (
    <article className="content-x-margin content-y-padding">
      <div className="container gap grid grid-cols-1 sm:grid-cols-6 md:grid-cols-1">
        <div className="sm:col-span-5 md:col-span-1">
          <div className="gap md:grid md:grid-cols-2 md:gap-x-8">
            <h1 className="mb-10 sm:mb-8 md:mb-0">
              Your Cloud<br /><span className="text-blue">Ops Team</span>
            </h1>

            <img src="/src/assets/images/illustrious-illustrations/home-hero.svg" className="object-fill md:row-span-3" alt="Home Hero" />

            <div className="para-lg mt-10 sm:mt-8 md:mt-8">
              With DirectCyberTech, you gain a dedicated Ops Team that understands your business,
              empowers your developers, modernizes your infrastructure, and helps you grow.
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="">
          <div className="gap grid grid-cols-1 sm:grid-cols-6 md:grid-cols-12 mt-18 pt-12 sm:pt-10 md:pt-32 md:content-center md:items-center">
            <img src="/src/assets/images/illustrious-illustrations/home-plan.svg" className="sm:col-span-4 md:col-span-6 px-14 sm:px-0 md:pr-8 w-full" alt="Home Plan" />

            <div className="sm:col-span-5 md:col-span-6 gap md:grid md:grid-cols-1 md:items-center md:content-center">
              <h3 className="mt-8 sm:mt-8 md:mt-0 pt-0.5 sm:pt-0">Your own Ops Team</h3>

              <div className="mt-2 lg:mt-6">
                You get a dedicated team of experienced cloud operations engineers who
                expertly manage and monitor your infrastructure and application.
                You know your team and communicate with them over Slack and Zoom.
              </div>

              <a href="/why/" className="link-button mt-10 md:mt-8 lg:mt-12 md:ml-0 text-center sm:text-left mx-auto">
                Why you need us
              </a>
            </div>
          </div>

          <div className="gap grid grid-cols-1 sm:grid-cols-6 md:grid-cols-12 mt-32 md:content-center md:items-center">
            <img src="/src/assets/images/illustrious-illustrations/home-about.svg" className="sm:col-span-4 md:col-span-5 md:col-start-8 px-10 sm:px-6 md:order-last md:justify-self-end md:pl-0 md:pr-4" alt="Home About" />

            <div className="sm:col-span-5 md:col-span-6 gap md:grid md:grid-cols-1 md:items-center md:content-center">
              <h3 className="mt-8 sm:mt-9 md:mt-0">Managed Kubernetes</h3>

              <div className="mt-2 md:mt-4">
                Leverage advanced container management and seamless cloud migration services to
                transform your application. Our solutions are tailored to your specific needs
                and built on Google Cloud, the most innovative cloud platform.
              </div>

              <a href="/services/" className="link-button mt-12 sm:mt-10 lg:mt-12 md:ml-0 text-center sm:text-left mx-auto">
                What we do
              </a>
            </div>
          </div>

          <div className="gap grid grid-cols-1 sm:grid-cols-6 md:grid-cols-12 mt-20 pt-14 pb-10 sm:mt-16 sm:pt-16 md:pt-0 md:mt-32 md:pb-0 md:content-center md:items-center">
            <img src="/src/assets/images/illustrious-illustrations/home-journal.svg" className="sm:col-span-4 md:col-span-6 px-8 sm:pl-0 sm:pr-15 md:pr-12" alt="Home Journal" />

            <div className="sm:col-span-5 md:col-span-6 gap md:grid md:grid-cols-1 md:items-center md:content-center">
              <h3 className="mt-8 md:mt-0">Industry experts</h3>

              <div className="mt-2 md:mt-4">
                DirectCyberTech is our flagship service.
                For over ten years, we've also been developing software that has modernized the
                hosting industry.
                Our company culture is based on trust, learning, and purpose.
              </div>

              <a href="/about/" className="link-button mt-12 sm:mt-10 lg:mt-8 md:ml-0 text-center sm:text-left mx-auto">
                Who we are
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-full text-center pt-1 sm:pt-0 pb-34 sm:pb-0 md:pb-0 sm:mb-0">
          <hr className="my-24 sm:my-30 md:mb-0 md:mt-32" />

          <h2 className="md:mt-24">We're your <span className="text-blue">Cloud Operations</span></h2>

          <a href="/contact/" className="black-button mt-12 md:mt-14">
            Talk to us
          </a>
        </div>
      </div>
    </article>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

const Why = () => {
  return (
    <article className="content-y-padding pb-0">
      <div className="content-x-margin">
        <div className="container inline-block gap grid md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="gap grid sm:grid-cols-6 md:grid-cols-1">
              <h1 className="mb-10 sm:mb-8 md:mb-0 sm:col-span-full md:col-span-full">
                Why you <span className="text-blue">need us</span>
              </h1>

              <img src="/src/assets/images/illustrious-illustrations/home-about.svg" className="object-fill sm:col-span-5 md:hidden" alt="Why you need us" />

              <div className="para-lg mt-10 mb-0 sm:mt-8 sm:col-span-5 md:col-span-full">
                Let DirectCyberTech handle your operations so you can focus on building your business.
              </div>
            </div>
          </div>

          <div className="hidden md:block md:col-span-6">
            <img src="/src/assets/images/illustrious-illustrations/home-about.svg" className="object-fill" alt="Why you need us" />
          </div>
        </div>

        <div className="container mt-32 sm:mt-32 lg:mt-32">
          <div className="gap sm:grid sm:grid-cols-6 sm:items-center md:grid md:grid-cols-12">
            <img src="/src/assets/images/illustrious-illustrations/misc/burst-yellow.svg" className="mx-auto sm:mx-0 w-4/9 sm:w-6/7 md:w-full md:pr-2 sm:col-span-2 md:col-span-2" alt="Burst Yellow" />

            <div className="para-lg mt-12 sm:mt-0 sm:pl-0 md:pl-0 sm:col-span-4 md:col-span-7 mb-0">
              Building a successful business means focusing on what you do best—creating
              amazing products, delighting customers, and driving growth.
            </div>
          </div>
        </div>

        <div className="container gap sm:grid sm:grid-cols-6 md:grid md:grid-cols-12 mt-10">
          <h3 className="sm:col-span-5 md:col-start-3 md:col-span-7 mb-4">Increase Your Productivity</h3>
          <div className="sm:col-span-5 md:col-start-3 md:col-span-7">
            <div className="mt-2 md:mt-4">
              <h5 className="mb-4">Dedicated Ops Team with direct communication</h5>
              Say goodbye to ticketing systems with delays and the need to provide background to
              new people with each exchange. You’ll consistently work with the same engineers.
              They know your application and your business goals.
              They’ll collaborate with you and your developers through Slack and Zoom,
              just like an in-house team would do.
            </div>

            <div className="mt-4 md:mt-4">
              <h5 className="mb-4">Boost Your Developers’ Efficiency</h5>
              We streamline development processes and increase your team’s efficiency,
              allowing them to better focus on innovation.
              We handle your operations so your developers can build products.
            </div>

            <div className="mt-4 md:mt-4">
              <h5 className="mb-4">24/7 Automated and Human Monitoring</h5>
              We combine automated alerts with real human oversight,
              ensuring proactive and rapid issue detection and resolution.
              Your Ops Team watches over your application so you and your team can sleep at night.
              No more lost productivity due to late night alerts.
            </div>
          </div>
        </div>

        <div className="container gap sm:grid sm:grid-cols-6 md:grid md:grid-cols-12 mt-10">
          <h3 className="sm:col-span-5 md:col-start-3 md:col-span-7 mb-4">Build a Partnership</h3>
          <div className="sm:col-span-5 md:col-start-3 md:col-span-7">
            <div className="mt-2 md:mt-4">
              <h5 className="mb-4">Your Success Partner</h5>
              We’re invested in your long-term success.
              We build deep relationships by learning your unique goals and challenges.
              Much more than monitoring and incident response, your Ops Team partners
              with you in proactive planning to help your business thrive over time
              despite rapidly evolving technologies.
            </div>

            <div className="mt-4 md:mt-4">
              <h5 className="mb-4">Custom Metrics</h5>
              More than just infrastructure monitoring, DirectCyberTech offers custom business
              and application monitoring.
              We can even assist with instrumentation of your application to provide
              real observability into the behavior and performance of your application.
            </div>

            <div className="mt-4 md:mt-4">
              <h5 className="mb-4">Supportive Education For Your Team</h5>
              Your Ops Team can provide tutorials and training on technologies that are
              unfamiliar to your team.
            </div>
          </div>
        </div>

        <div className="container gap sm:grid sm:grid-cols-6 md:grid md:grid-cols-12 mt-10">
          <h3 className="sm:col-span-5 md:col-start-3 md:col-span-7 mb-4">Our Technical Expertise</h3>
          <div className="sm:col-span-5 md:col-start-3 md:col-span-7">
            <div className="mt-2 md:mt-4">
              <h5 className="mb-4">Kubernetes Experts</h5>
              Our experienced engineers containerize your application and deploy it on Kubernetes,
              ensuring your applications run smoothly and efficiently.
            </div>

            <div className="mt-4 md:mt-4">
              <h5 className="mb-4">Scalable Solutions</h5>
              Our solutions are designed to grow with your business,
              providing cost-effective scalability,
              always adapted to your changing needs.
            </div>

            <div className="mt-4 md:mt-4">
              <h5 className="mb-4">Database Management and Optimization</h5>
              We handle maintenance, schema changes, upgrades, and performance tuning
              for your databases all while minimizing downtime.
            </div>

            <div className="mt-4 md:mt-4">
              <h5 className="mb-4">Modernized Infrastructure</h5>
              We deploy your application on cloud native infrastructure using
              Infrastructure as Code (IaC) and GitOps practices, ensuring efficiency and security.
            </div>

            <div className="mt-4 md:mt-4">
              <h5 className="mb-4">Monitoring and Observability</h5>
              Our combined automated and human monitoring provide real-time insights into your
              infrastructure and application’s health, ensuring fast issue detection and resolution.
            </div>
          </div>
        </div>

        <div className="container gap sm:grid sm:grid-cols-6 md:grid md:grid-cols-12 mt-10">
          <h3 className="sm:col-span-5 md:col-start-3 md:col-span-7 mb-4">Financial Savings</h3>
          <div className="sm:col-span-5 md:col-start-3 md:col-span-7">
            <div className="mt-2 md:mt-4">
              <h5 className="mb-4">Cost-Effective</h5>
              You benefit from our deep experience across a wide range of use cases.
              You get an experienced Ops Team, all knowing your application, business,
              and infrastructure, providing holistic solutions to complex problems
              without the high cost of hiring and maintaining in-house expertise.
            </div>

            <div className="mt-4 md:mt-4">
              <h5 className="mb-4">Agile and Flexible</h5>
              Embrace an adaptable, pay-as-you-go model, allowing your developers to
              rapidly prototype and to try new technologies without long-term commitments.
            </div>

            <div className="mt-4 md:mt-4">
              <h5 className="mb-4">Focus on Growth</h5>
              By focusing on your core business, you’ll increase productivity,
              accelerate innovation, and ultimately drive revenue growth.
            </div>
          </div>
        </div>

        <div className="container gap sm:grid sm:grid-cols-6 md:grid md:grid-cols-12">
          <div className="sm:col-span-4 md:col-start-3 md:col-span-7 justify-start items-top">
            <h4 className="mt-10 mb-0">
              First steps
            </h4>
            <div className="mt-2 md:mt-4">
              Contact DirectCyberTech today and let our team become your
              trusted partner in operational success.
            </div>
          </div>
        </div>

        <div className="container gap sm:grid sm:grid-cols-6 md:grid md:grid-cols-12">
          <div className="sm:col-span-5 md:col-start-3 md:col-span-7">
            <Link to="/contact/" className="link-button mt-12 md:ml-0 text-center sm:text-left mx-auto">
              Talk to us
            </Link>
          </div>
        </div>

        <div className="mt-10 md:mt-20 lg:mt-10">
          <div className="container">
            <div className="gap grid grid-cols-2 sm:grid-cols-6 md:grid-cols-12">
              <div className="col-start-2 col-span-1 order-last
                                sm:col-start-5 sm:col-span-2 sm:row-span-2 sm:order-none
                                md:col-start-11 md:col-span-2 md:row-span-2
                                mt-20 sm:mt-10
                                flex justify-end w-full w-full">
                <div className="sm:pl-7 md:pl-0">
                  {/* Placeholder for the image - Update the src accordingly */}
                  <img src="/src/assets/images/illustrious-illustrations/misc/eye-blue.svg" style={{ width: '146px', height: '146px' }} alt="Eye Blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Why;

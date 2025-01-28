import React from 'react';
import { Link } from 'react-router-dom';

// Note: modern-normalize.css is already imported globally in App.tsx

const Services = () => {
  const servicesList = [
    "Container orchestration using Kubernetes",
    "Managed infrastructure on Google Cloud",
    "Expertly coordinated migrations",
    "Custom application monitoring",
    "Database management with regular performance reviews",
    "Automating build, test, and deployment",
    "Proactive, collaborative planning to meet business needs",
    "Automatic scaling to enhance performance and support growth",
    "Redundant backups",
    "State-of-the-art security measures",
    "SSL certificate management",
    "High availability",
    "DNS management",
    "Continuous infrastructure modernization",
  ];

  return (
    <article className="content-x-margin content-y-padding">
      <div className="container">
        <h1 className="mb-10 text-4xl sm:text-5xl md:text-6xl font-bold">Our Services</h1>
        <div className="para-lg">
          <p>
            At DirectCyberTech, we offer a comprehensive suite of cloud operations services designed to help businesses of all sizes succeed in the cloud. Our team of experienced engineers provides expert management and support for your infrastructure and applications, allowing you to focus on your core business.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Managed Kubernetes</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="/src/assets/images/illustrious-illustrations/services-kubernetes.svg" alt="Managed Kubernetes Illustration" className="w-full" />
            </div>
            <div className="para-lg">
              <p>
                Leverage the power of Kubernetes without the complexity. We handle the day-to-day management of your Kubernetes clusters, ensuring high availability, scalability, and security.
              </p>
              <ul className="list-disc list-inside mt-4">
                <li>Cluster setup and configuration</li>
                <li className="mt-2">Automated scaling and load balancing</li>
                <li className="mt-2">Continuous monitoring and alerting</li>
                <li className="mt-2">Security patching and updates</li>
                <li className="mt-2">Performance optimization</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Cloud Migration</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="/src/assets/images/illustrious-illustrations/services-migration.svg" alt="Cloud Migration Illustration" className="w-full" />
            </div>
            <div className="para-lg">
              <p>
                Seamlessly transition your applications and infrastructure to the cloud with our expert migration services. We'll help you plan, execute, and optimize your migration for a smooth and efficient transition.
              </p>
              <ul className="list-disc list-inside mt-4">
                <li>Assessment and planning</li>
                <li className="mt-2">Application and data migration</li>
                <li className="mt-2">Infrastructure setup and configuration</li>
                <li className="mt-2">Testing and validation</li>
                <li className="mt-2">Post-migration support</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Cloud Operations</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="/src/assets/images/illustrious-illustrations/services-cloud-ops.svg" alt="Cloud Operations Illustration" className="w-full" />
            </div>
            <div className="para-lg">
              <p>
                Focus on your core business while we handle the complexities of cloud operations. Our team provides 24/7 monitoring, incident response, and performance optimization to ensure your applications are always running smoothly.
              </p>
              <ul className="list-disc list-inside mt-4">
                <li>24/7 monitoring and alerting</li>
                <li className="mt-2">Incident response and resolution</li>
                <li className="mt-2">Performance optimization and tuning</li>
                <li className="mt-2">Security and compliance management</li>
                <li className="mt-2">Cost optimization</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-14 pb-10 sm:mt-16 sm:pt-16 md:pt-0 md:mt-32 md:pb-0">
          <h2 className="md:mt-24 text-3xl sm:text-4xl font-bold">Ready to experience the DirectCyberTech difference?</h2>
          <a href="/contact/" className="black-button mt-12 md:mt-14">
            Talk to us
          </a>
        </div>
      </div>
    </article>
  );
};

export default Services;

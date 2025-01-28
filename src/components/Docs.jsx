import React from 'react';

const Docs = () => {
  return (
    <article className="content-x-margin content-y-padding">
      <div className="container">
        <h1 className="mb-10 text-4xl sm:text-5xl md:text-6xl font-bold">Documentation</h1>
        <div className="para-lg">
          <p>
            Welcome to the DirectCyberTech documentation. Here you'll find comprehensive guides and resources to help you get started with our services and make the most of your cloud operations.
          </p>
          <p className="mt-4">
            We're constantly updating our documentation to provide you with the latest information and best practices. If you can't find what you're looking for, please don't hesitate to <a href="/contact/" className="text-blue hover:underline">contact us</a>.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Getting Started</h2>
          <ul className="list-disc list-inside">
            <li>
              <a href="#!" className="text-blue hover:underline">Introduction to DirectCyberTech</a>
            </li>
            <li className="mt-2">
              <a href="#!" className="text-blue hover:underline">Setting up your account</a>
            </li>
            <li className="mt-2">
              <a href="#!" className="text-blue hover:underline">Connecting your cloud provider</a>
            </li>
            <li className="mt-2">
              <a href="#!" className="text-blue hover:underline">Deploying your first application</a>
            </li>
          </ul>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Managed Kubernetes</h2>
          <ul className="list-disc list-inside">
            <li>
              <a href="#!" className="text-blue hover:underline">Understanding Kubernetes concepts</a>
            </li>
            <li className="mt-2">
              <a href="#!" className="text-blue hover:underline">Managing your clusters</a>
            </li>
            <li className="mt-2">
              <a href="#!" className="text-blue hover:underline">Deploying applications on Kubernetes</a>
            </li>
            <li className="mt-2">
              <a href="#!" className="text-blue hover:underline">Monitoring and logging</a>
            </li>
          </ul>
        </div>

        {/* Add more sections as needed */}

      </div>
    </article>
  );
};

export default Docs;

import React from 'react';

const Contact = () => {
  return (
    <article className="content-x-margin content-y-padding">
      <div className="container">
        <h1 className="mb-10 text-4xl sm:text-5xl md:text-6xl font-bold">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="para-lg">
              We'd love to hear from you. Whether you have questions, feedback, or just want to say hello, feel free to reach out to us using the contact form or the details below.
            </p>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Our Office</h3>
              <p>
                123 DirectCyberTech St.<br />
                Suite 456<br />
                Techville, CA 90210<br />
                United States
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p>
                Email: <a href="mailto:info@directcybertech.com" className="text-blue hover:underline">info@directcybertech.com</a><br />
                Phone: <a href="tel:+15555555555" className="text-blue hover:underline">+1 (555) 555-5555</a>
              </p>
            </div>
          </div>
          <div>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-bold">Name:</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-bold">Email:</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 font-bold">Message:</label>
                <textarea id="message" name="message" rows={6} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
              </div>
              <button type="submit" className="black-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Contact;

import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-[#F3F4F4] text-[#162020] py-16 sm:py-20 lg:py-24 font-sans"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <h3 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">About ConnectDash</h3>
        <p className="text-center max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
          ConnectDash is an advanced social media dashboard designed to provide a comprehensive view of your social media metrics and insights. Our platform offers a range of features to help you:
        </p>
        <ul className="list-disc max-w-2xl mx-auto mt-6 space-y-4 pl-6 sm:pl-8 text-base sm:text-lg leading-relaxed">
          <li className=" transition-colors duration-300 ease-in-out">
            Automatically collect and analyze data from multiple social media platforms including Facebook, Twitter, Instagram, Telegram, WhatsApp, and more.
          </li>
          <li className=" transition-colors duration-300 ease-in-out">
            Visualize key metrics and trends through interactive dashboards.
          </li>
          <li className=" transition-colors duration-300 ease-in-out">
            Generate detailed PDFs to capture and document evidence.
          </li>
          <li className=" transition-colors duration-300 ease-in-out">
            Create customizable reports tailored for clients or stakeholders.
          </li>
        </ul>
        <p className="text-center max-w-3xl mx-auto mt-8 leading-relaxed text-base sm:text-lg">
          With ConnectDash, you can effortlessly monitor and manage your social media presence, make data-driven decisions, and optimize your strategies. Our tool ensures that you stay ahead in the fast-paced world of social media.
        </p>
        <p className="text-center max-w-3xl mx-auto mt-6 leading-relaxed text-base sm:text-lg">
          Simplify your social media management and drive success with ConnectDash.
        </p>
      </div>
    </section>

  );
};

export default About;

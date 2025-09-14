import React from 'react';

const Features: React.FC = () => {
  return (
    <div id='features'>
      <div
        className="relative bg-[#fff7ed] flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden text-[#1c1917] mt-10"
      >
        <div className="layout-container flex h-full grow flex-col">
          <main
            className="flex flex-1 flex-col items-center py-12 md:py-20 px-4 sm:px-6 lg:px-8"
          >
            <div className="w-full max-w-7xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h1
                  className="text-4xl md:text-6xl font-extrabold  mb-4"
                >
                  Powerful Features to Boost Your Social Media
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                  Explore the powerful features that make ConnectDash the ultimate
                  social media analytics tool.
                </p>
                <div
                  className="w-24 h-1 bg-gradient-to-r from-[#ea580c] to-[#db2777] mx-auto mt-6 rounded-full"
                ></div>
              </div>
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 @container"
              >
                <div
                  className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div
                    className="gradient-circle w-16 h-16 rounded-full flex items-center justify-center text-white"
                  >
                    <span className="material-symbols-outlined text-4xl"
                    >monitoring</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">Advanced Analytics</h2>
                    <p className="text-gray-600">
                      Automatically collect and analyze data from Facebook,
                      Twitter, Instagram, and more.
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div
                    className="gradient-circle-alt w-16 h-16 rounded-full flex items-center justify-center text-white"
                  >
                    <span className="material-symbols-outlined">
                      bar_chart
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">Data Visualization</h2>
                    <p className="text-gray-600">
                      Bring complex data to life with interactive dashboards.
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div
                    className="gradient-circle w-16 h-16 rounded-full flex items-center justify-center text-white"
                  >
                    <span className="material-symbols-outlined text-4xl"
                    >summarize</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">PDF Generation</h2>
                    <p className="text-gray-600">
                      Capture and document evidence
                      with precision.
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div
                    className="gradient-circle-alt w-16 h-16 rounded-full flex items-center justify-center text-white"
                  >
                    <span className="material-symbols-outlined text-4xl"
                    >contextual_token</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">Customizable Reports</h2>
                    <p className="text-gray-600">
                      Generate tailored reports for
                      clients or stakeholders.
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div
                    className="gradient-circle w-16 h-16 rounded-full flex items-center justify-center text-white"
                  >
                    <span className="material-symbols-outlined text-4xl"
                    >security</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">Security First</h2>
                    <p className="text-gray-600">
                      Your data security is our top priority. We use
                      industry-leading security measures to protect your
                      information.
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div
                    className="gradient-circle-alt w-16 h-16 rounded-full flex items-center justify-center text-white"
                  >
                    <span className="material-symbols-outlined text-4xl"
                    >add_alert</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">Real-time Alerts</h2>
                    <p className="text-gray-600">
                      Stay informed with
                      instant notifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-red-600 text-center p-4">
              Disclaimer: This page is based on mock data and is not reflective of real users or accounts.
            </p>
          </main>
        </div>
      </div>

    </div >
  );
};

export default Features;

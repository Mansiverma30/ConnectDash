import React from 'react';

const About: React.FC = () => {
  return (

    <div id='about'>
      <div
        className="bg-[#fff7ed] relative flex h-auto min-h-screen w-full flex-col text-[#1c1917] group/design-root overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div
            className="absolute -top-40 -left-40 w-96 h-96 bg-[#ea580c]/10 rounded-full blur-3xl opacity-50"
          ></div>
          <div
            className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#db2777]/10 rounded-full blur-3xl opacity-50"
          ></div>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl opacity-50"
          ></div>
        </div>
        <div className="layout-container flex h-full grow flex-col z-10">
          <main className="flex-1">
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-24">
              <div
                className="mx-auto flex max-w-4xl flex-col items-center text-center"
              >
                <h1
                  className="text-4xl md:text-5xl font-extrabold  text-[#1c1917] underline-gradient"
                >
                  About ConnectDash
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-[#1c1917]/80">
                  ConnectDash is an advanced social media dashboard designed to
                  provide a comprehensive view of your social media metrics and
                  insights. Our platform offers a range of features to help you:
                </p>
                <div
                  className="mt-16 grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-2"
                >
                  <div
                    className="flex transform flex-col gap-4 rounded-xl bg-white/50 p-6 shadow-lg ring-1 ring-black/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ea580c] to-[#db2777] text-white"
                    >
                      <span className="material-symbols-outlined text-2xl"
                      >insights</span>
                    </div>
                    <div className="text-left">
                      <h2 className="text-lg font-bold text-[#1c1917]">
                        Comprehensive Analytics
                      </h2>
                      <p className="mt-1 text-[#1c1917]/70">
                        Automatically collect and analyze data from multiple
                        social media platforms including Facebook, Twitter,
                        Instagram, Telegram, WhatsApp, and more.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex transform flex-col gap-4 rounded-xl bg-white/50 p-6 shadow-lg ring-1 ring-black/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#db2777] to-[#10b981] text-white"
                    >
                      <span className="material-symbols-outlined text-2xl"
                      >groups</span>
                    </div>
                    <div className="text-left">
                      <h2 className="text-lg font-bold text-[#1c1917]">
                        Audience Insights
                      </h2>
                      <p className="mt-1 text-[#1c1917]/70">
                        Understand your audience demographics, interests, and
                        behaviors to tailor your content effectively.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex transform flex-col gap-4 rounded-xl bg-white/50 p-6 shadow-lg ring-1 ring-black/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#db2777] to-[#10b981] text-white"
                    >
                      <span className="material-symbols-outlined text-2xl"
                      >schedule</span>
                    </div>
                    <div className="text-left">
                      <h2 className="text-lg font-bold text-[#1c1917]">
                        Real-Time Monitoring
                      </h2>
                      <p className="mt-1 text-[#1c1917]/70">
                        Track your social media activity in real-time, responding
                        to trends and engaging with your audience instantly.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex transform flex-col gap-4 rounded-xl bg-white/50 p-6 shadow-lg ring-1 ring-black/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ea580c] to-[#db2777] text-white"
                    >
                      <span className="material-symbols-outlined text-2xl"
                      >bar_chart</span>
                    </div>
                    <div className="text-left">
                      <h2 className="text-lg font-bold text-[#1c1917]">
                        Performance Reporting
                      </h2>
                      <p className="mt-1 text-[#1c1917]/70">
                        Generate custom reports to showcase your social media
                        achievements and identify areas for improvement.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-16 text-center">
                  <p className="text-xl font-medium text-[#1c1917]">
                    Ready to unlock your social media potential?
                  </p>
                  <p className="mt-2 text-xl font-medium text-[#1c1917]">
                    Join ConnectDash today and turn data into decisions.
                  </p>
                  <p className="text-sm text-red-600 text-center p-4">
                    Disclaimer: This page is based on mock data and is not reflective of real users or accounts.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div >


  );
};

export default About;

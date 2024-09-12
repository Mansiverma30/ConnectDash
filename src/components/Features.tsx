import React from 'react';
import { FingerPrintIcon } from '@heroicons/react/24/outline';

const Features: React.FC = () => {
  return (
    <div>
      
      <section className="bg-[#F3F4F4]  py-16 sm:py-20 lg:py-16" id='features'>
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <p className="text-[#162020] text-[18px]">Explore our features, and achieve the results you didn't think were possible</p>
          <h2 className="text-[#162020] text-[36px] font-bold">Complete all-in-one solution, loaded</h2>
          <h2 className="text-[#162020] text-xl font-bold">with powerful features</h2>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Data Parsing</h3>
            <div className="space-y-1 leading-tight">
              <p className='flex text-center'>Automatically collect and analyze data
                <br className='flex text-center' /> Facebook, Twitter, Instagram,
                <br className='flex text-center' /> Telegram, WhatsApp, and more. </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5H19.5v15H4.5V4.5zm4.5 7.5h6" />
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Data Visualization</h3>
            <div className="space-y-1 leading-tight">
              <p className='flex text-center'>Bring complex data to life
                <br className='flex text-center' /> with interactive dashboards.</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <h3 className="my-3 text-3xl font-semibold">PDF Generation</h3>
            <div className="space-y-1 leading-tight">
              <p className='flex text-center'>Capture and document evidence
                <br className='flex text-center' /> with precision. </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5H19.5v15H4.5V4.5zm4.5 7.5h6" />
      </svg>
            <h3 className="my-3 text-3xl font-semibold text-center">Customizable <br className="hidden md:inline lg:hidden " />Reports</h3>
            <div className="space-y-1 leading-tight">
              <p className='flex text-center'>Generate tailored reports for
                <br className='flex text-center' /> clients or stakeholders. </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
          <FingerPrintIcon aria-hidden="true" className="w-8 h-8" />
            <h3 className="my-3 text-3xl font-semibold">Real-time Alerts</h3>
            <div className="space-y-1 leading-tight">
              <p className='flex text-center'>Stay informed with
                <br className='flex text-center' /> instant notifications. </p>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
};

export default Features;

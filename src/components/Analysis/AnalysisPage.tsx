import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TwitterChart from './Charts/TwitterCharts';
import InstagramChart from './Charts/InstagramCharts';
import MockData from './MockData/MockData.json';
import WhatsAppCharts from './Charts/WhatsappCharts';
import TelegramCharts from './Charts/TelegramCharts';
import FacebookCharts from './Charts/FacebookCharts';
import ThreadsCharts from './Charts/ThreadsCharts';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const AnalysisPage: React.FC = () => {
  const [twitterData, setTwitterData] = useState<any>(null);
  const [instagramData, setInstagramData] = useState<any>(null);
  const [whatsappData, setWhatsappData] = useState<any>(null);
  const [telegramData, setTelegramData] = useState<any>(null);
  const [facebookData, setFacebookData] = useState<any>(null);
  const [threadsData, setThreadsData] = useState<any>(null);

  /* Custamization Of PDF */
  const [includeTwitter, setIncludeTwitter] = useState(true);
  const [includeInstagram, setIncludeInstagram] = useState(true);
  const [includeWhatsapp, setIncludeWhatsapp] = useState(true);
  const [includeTelegram, setIncludeTelegram] = useState(true);
  const [includeFacebook, setIncludeFacebook] = useState(true);
  const [includeThreads, setIncludeThreads] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      const { fullName } = parsedUserData;

      const filteredData = MockData.find((entry: any) => entry.full_name === fullName);

      if (filteredData) {
        setTwitterData(filteredData);
        setInstagramData(filteredData);
        setWhatsappData(filteredData);
        setTelegramData(filteredData);
        setFacebookData(filteredData);
        setThreadsData(filteredData);
      } else {
        console.error("Username not found in mock data");
        navigate('/get-started');
      }
    } else {
      navigate('/get-started');
    }
  }, [navigate]);

  if (!twitterData || !instagramData || !whatsappData || !telegramData || !facebookData || !threadsData) {
    return <p>Loading...</p>;
  }

  const waitForImagesToLoad = (element: HTMLElement): Promise<void> => {
    return new Promise((resolve) => {
      const images = element.getElementsByTagName('img');
      let loadedImagesCount = 0;
      const totalImages = images.length;
  
      if (totalImages === 0) {
        resolve(); // No images to load
        return;
      }
  
      const checkIfAllImagesLoaded = () => {
        if (loadedImagesCount === totalImages) {
          resolve();
        }
      };
  
      Array.from(images).forEach((img) => {
        if (img.complete) {
          loadedImagesCount++;
          checkIfAllImagesLoaded();
        } else {
          img.onload = () => {
            loadedImagesCount++;
            checkIfAllImagesLoaded();
          };
          img.onerror = () => {
            loadedImagesCount++;
            checkIfAllImagesLoaded();
          };
        }
      });
    });
  };
  
  const downloadPDF = async () => {
    const chartIds: string[] = [];

    if (includeTwitter) chartIds.push('twitter-chart');
    if (includeInstagram) chartIds.push('instagram-chart');
    if (includeWhatsapp) chartIds.push('whatsapp-chart');
    if (includeTelegram) chartIds.push('telegram-chart');
    if (includeFacebook) chartIds.push('facebook-chart');
    if (includeThreads) chartIds.push('threads-chart');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.width;
    const pageHeight = pdf.internal.pageSize.height;

    // Check screen width to apply padding for large or small screens
    const isLargeScreen = window.innerWidth > 768; // Example threshold for large screen
    const padding = isLargeScreen ? 10 : 5; // Larger padding for large screens, smaller for small screens

    for (const [index, id] of chartIds.entries()) {
        const element = document.getElementById(id);
        if (!element) {
            console.error(`Element with ID ${id} not found`);
            continue;
        }

        // Wait for images to load
        await waitForImagesToLoad(element);

        // Generate canvas
        const canvas = await html2canvas(element, {
            scale: 2, // Increase scale for better quality
            useCORS: true, // Enable cross-origin images
            logging: true // Enable logging for debugging
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.7); // Compress image
        const imgWidth = pageWidth - padding * 2; // Max width considering padding
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

        // Calculate X and Y positions to center the image
        const xOffset = (pageWidth - imgWidth) / 2; // Horizontal centering
        let yOffset = (pageHeight - imgHeight) / 2; // Vertical centering

        // Ensure the image fits within the page height
        if (imgHeight > pageHeight - padding * 2) {
            const scaledHeight = pageHeight - padding * 2;
            const scaledWidth = (canvas.width * scaledHeight) / canvas.height;

            yOffset = (pageHeight - scaledHeight) / 2; // Recalculate Y offset for scaled image

            pdf.addImage(imgData, 'JPEG', (pageWidth - scaledWidth) / 2, yOffset, scaledWidth, scaledHeight);
        } else {
            pdf.addImage(imgData, 'JPEG', xOffset, yOffset, imgWidth, imgHeight);
        }

        // Add a new page after each chart except the last one
        if (index < chartIds.length - 1) {
            pdf.addPage();
        }
    }

    pdf.save('analysis-page.pdf');
};





  return (
    <div className="min-h-screen p-6 bg-[#F3F4F4] scroll-mt-24 py-28">
      <div className="bg-white rounded-lg shadow-md p-4 mb-6 max-w-3xl mx-auto" id="analysis-page">
        <h2 className="text-2xl font-semibold text-[#162020] mb-4">Analysis Results</h2>
        
        <div className="mb-4 text-[#162020] gap-2">
          <h3 className="text-lg font-semibold mb-2">Select Data to Include in Report</h3>
  
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={includeTwitter}
              onChange={() => setIncludeTwitter(!includeTwitter)}
              className="mr-2"
            />
            Include Twitter Data
          </label>
  
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={includeInstagram}
              onChange={() => setIncludeInstagram(!includeInstagram)}
              className="mr-2"
            />
            Include Instagram Data
          </label>
  
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={includeWhatsapp}
              onChange={() => setIncludeWhatsapp(!includeWhatsapp)}
              className="mr-2"
            />
            Include WhatsApp Data
          </label>
  
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={includeTelegram}
              onChange={() => setIncludeTelegram(!includeTelegram)}
              className="mr-2"
            />
            Include Telegram Data
          </label>
  
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={includeFacebook}
              onChange={() => setIncludeFacebook(!includeFacebook)}
              className="mr-2"
            />
            Include Facebook Data
          </label>
  
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={includeThreads}
              onChange={() => setIncludeThreads(!includeThreads)}
              className="mr-2"
            />
            Include Threads Data
          </label>
        </div>
  
        {includeTwitter && (
          <div id="twitter-chart">
            <TwitterChart data={twitterData} />
          </div>
        )}
        {includeInstagram && (
          <div id="instagram-chart">
            <InstagramChart data={instagramData} />
          </div>
        )}
        {includeWhatsapp && (
          <div id="whatsapp-chart">
            <WhatsAppCharts data={whatsappData} />
          </div>
        )}
        {includeTelegram && (
          <div id="telegram-chart">
            <TelegramCharts data={telegramData} />
          </div>
        )}
        {includeFacebook && (
          <div id="facebook-chart">
            <FacebookCharts data={facebookData} />
          </div>
        )}
        {includeThreads && (
          <div id="threads-chart">
            <ThreadsCharts data={threadsData} />
          </div>
        )}
      </div>
      
      <div className='flex items-center justify-center'>
        <button onClick={downloadPDF} className="md:w-60 bg-gradient-to-r from-slate-500 to-slate-700 text-white font-bold py-3 px-6 rounded-lg mt-3 transition-transform transform hover:scale-105 hover:shadow-xl shadow-[#F97316]/50">
          Download as PDF
        </button>
      </div>
    </div>
  );
  
};

export default AnalysisPage;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TwitterChart from './Charts/TwitterCharts';
import InstagramChart from './Charts/InstagramCharts';
import MockData from './MockData/MockData.json';
import WhatsAppCharts from './Charts/WhatsappCharts';
import TelegramCharts from './Charts/TelegramCharts';
import FacebookCharts from './Charts/FacebookCharts';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import twitter from "../../images/twitter.svg"
import whatsapp from "../../images/whatsapp.svg"
import facebook from "../../images/facebook.svg"
import instagram from "../../images/instagram.svg"
import telegram from "../../images/telegram.svg"

const AnalysisPage: React.FC = () => {
  const [twitterData, setTwitterData] = useState<any>(null);
  const [instagramData, setInstagramData] = useState<any>(null);
  const [whatsappData, setWhatsappData] = useState<any>(null);
  const [telegramData, setTelegramData] = useState<any>(null);
  const [facebookData, setFacebookData] = useState<any>(null);

  /* Custamization Of PDF */
  const [includeTwitter, setIncludeTwitter] = useState(true);
  const [includeInstagram, setIncludeInstagram] = useState(true);
  const [includeWhatsapp, setIncludeWhatsapp] = useState(true);
  const [includeTelegram, setIncludeTelegram] = useState(true);
  const [includeFacebook, setIncludeFacebook] = useState(true);
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
      } else {
        console.error("Username not found in mock data");
        navigate('/get-started');
      }
    } else {
      navigate('/get-started');
    }
  }, [navigate]);

  if (!twitterData || !instagramData || !whatsappData || !telegramData || !facebookData) {
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

    for (const [index, id] of chartIds.entries()) {
      const element = document.getElementById(id);
      if (!element) continue;

      await waitForImagesToLoad(element);


      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
      });

      const imgData = canvas.toDataURL('image/png');

      // Create PDF with element size
      const pdf = new jsPDF({
        orientation: canvas.width > canvas.height ? 'landscape' : 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });


      const pageHeight = pdf.internal.pageSize.getHeight();
      const pageWidth = pdf.internal.pageSize.getWidth();
      let remainingHeight = canvas.height;
      let position = 0;

      while (remainingHeight > 0) {

        pdf.addImage(
          imgData,
          'PNG',
          0,
          position,
          pageWidth,
          canvas.height
        );

        remainingHeight -= pageHeight;
        position += pageHeight;

        if (remainingHeight > 0) pdf.addPage();
      }

      pdf.save(`analysis-page-${index + 1}.pdf`);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-[#fff7ed] scroll-mt-24 py-28">
      <div className="bg-white rounded-lg shadow-md p-4 mb-6 max-w-3xl mx-auto" id="analysis-page">
        <h2 className="text-2xl font-semibold text-[#162020] mb-4">Analysis Results</h2>

        <div className="mb-6 p-6 bg-white rounded-xl shadow-md text-[#162020]">
          <h3 className="text-lg font-semibold mb-4 border-b pb-2">Select Data to Include in Report</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Twitter */}
            <label className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:shadow-md transition-all cursor-pointer border-l-4 border-[#1DA1F2]">
              <img src={twitter} alt="Twitter" className="w-6 h-6" />
              <span className="font-medium text-[#1DA1F2]">Include Twitter Data</span>
              <input
                type="checkbox"
                checked={includeTwitter}
                onChange={() => setIncludeTwitter(!includeTwitter)}
                className="ml-auto w-5 h-5 accent-[#1DA1F2]"
              />
            </label>

            {/* Instagram */}
            <label className="flex items-center gap-3 p-4 bg-pink-50 rounded-lg hover:shadow-md transition-all cursor-pointer border-l-4 border-[#E1306C]">
              <img src={instagram} alt="Instagram" className="w-6 h-6" />
              <span className="font-medium text-[#E1306C]">Include Instagram Data</span>
              <input
                type="checkbox"
                checked={includeInstagram}
                onChange={() => setIncludeInstagram(!includeInstagram)}
                className="ml-auto w-5 h-5 accent-[#E1306C]"
              />
            </label>

            {/* WhatsApp */}
            <label className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:shadow-md transition-all cursor-pointer border-l-4 border-[#25D366]">
              <img src={whatsapp} alt="WhatsApp" className="w-6 h-6" />
              <span className="font-medium text-[#25D366]">Include WhatsApp Data</span>
              <input
                type="checkbox"
                checked={includeWhatsapp}
                onChange={() => setIncludeWhatsapp(!includeWhatsapp)}
                className="ml-auto w-5 h-5 accent-[#25D366]"
              />
            </label>

            {/* Telegram */}
            <label className="flex items-center gap-3 p-4 bg-cyan-50 rounded-lg hover:shadow-md transition-all cursor-pointer border-l-4 border-[#0088cc]">
              <img src={telegram} alt="Telegram" className="w-6 h-6" />
              <span className="font-medium text-[#0088cc]">Include Telegram Data</span>
              <input
                type="checkbox"
                checked={includeTelegram}
                onChange={() => setIncludeTelegram(!includeTelegram)}
                className="ml-auto w-5 h-5 accent-[#0088cc]"
              />
            </label>

            {/* Facebook */}
            <label className="flex items-center gap-3 p-4 bg-blue-100 rounded-lg hover:shadow-md transition-all cursor-pointer border-l-4 border-[#4267B2]">
              <img src={facebook} alt="Facebook" className="w-6 h-6" />
              <span className="font-medium text-[#4267B2]">Include Facebook Data</span>
              <input
                type="checkbox"
                checked={includeFacebook}
                onChange={() => setIncludeFacebook(!includeFacebook)}
                className="ml-auto w-5 h-5 accent-[#4267B2]"
              />
            </label>
          </div>
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
      </div>

      <div className='flex items-center justify-center'>
        <button onClick={downloadPDF} className="md:w-60 bg-[#ea580c] text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg py-3 px-6 rounded-lg mt-3 transform hover:scale-105 shadow-[#F97316]/50">
          Download as PDF
        </button>
      </div>
    </div>
  );

};

export default AnalysisPage;
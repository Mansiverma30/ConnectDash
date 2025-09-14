import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

interface WhatsappChartsProps {
  data: any;
}

const WhatsappCharts: React.FC<WhatsappChartsProps> = ({ data }) => {
  const barChartData = {
    labels: ['Messages Sent', 'Messages Received'],
    datasets: [
      {
        label: `${data.whatsapp_username}'s Activity`,
        data: [
          data.whatsapp_messages_sent,
          data.whatsapp_messages_received
        ],
        backgroundColor: ['#25D366', '#128C7E'],
      }
    ],
  };

  const pieChartData = {
    labels: ['Contacts', 'Communities', 'Channels Joined', 'Groups', 'Archived Messages'],
    datasets: [
      {
        data: [
          data.whatsapp_no_of_contacts,
          data.whatsapp_no_of_communities,
          data.whatsapp_no_of_channel_joined,
          data.whatsapp_no_of_groups,
          data.whatsapp_archived_messages_count,
        ],
        backgroundColor: ['#25D366', '#128C7E', '#075E54', '#4CAF50', '#388E3C'],
      }
    ],
  };

  return (
    <div className="bg-[#fff7ed] rounded-lg shadow-md p-6 mb-8" id='whatsapp-chart'>
      <h2 className="text-2xl font-bold text-[#25D366] mb-4">WhatsApp Profile Overview</h2>

      <div className="flex flex-col items-center mb-4">
        <img
          src={data.whatsapp_profile_picture}
          alt="profile"
          className="h-32 w-32 rounded-full shadow-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-[#25D366]">{data.whatsapp_username}</h3>
        <p className="text-sm font-medium text-gray-500 mb-2">{data.whatsapp_number}</p>
        <p className="text-sm font-medium text-gray-500 mb-2">{data.whatsapp_status}</p>
      </div>

      <div className="flex flex-col mb-4">
        <p className="text-md text-gray-700">
          <span className="font-bold">Joined:</span> {data.whatsapp_joining_year}
        </p>
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-medium text-[#25D366] mb-4">WhatsApp Activity</h4>
        <Bar
          data={barChartData}
          options={{
            maintainAspectRatio: true,
            responsive: true,
            plugins: {
              legend: { display: true },
            },
            scales: {
              x: { ticks: { font: { size: 10 } } }, // Adjusts the font size for smaller screens
              y: { ticks: { font: { size: 10 } } },
            },
          }}
        />
      </div>

      <div className="mb-8 ">
        <h4 className="text-lg font-medium text-[#25D366] mb-4">Profile Stats</h4>
        <div className="h-80 flex items-center justify-center">
          <Pie data={pieChartData} options={{ maintainAspectRatio: true, responsive: true, plugins: { legend: { display: true }, } }} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="text-center bg-white p-4 rounded-lg">
          <h5 className="text-md font-medium text-[#25D366]">Contacts</h5>
          <p className="text-lg font-bold">{data.whatsapp_no_of_contacts}</p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg">
          <h5 className="text-md font-medium text-[#25D366]">Communities</h5>
          <p className="text-lg font-bold">{data.whatsapp_no_of_communities}</p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg">
          <h5 className="text-md font-medium text-[#25D366]">Channels</h5>
          <p className="text-lg font-bold">{data.whatsapp_no_of_channel_joined}</p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg">
          <h5 className="text-md font-medium text-[#25D366]">Groups</h5>
          <p className="text-lg font-bold">{data.whatsapp_no_of_groups}</p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg">
          <h5 className="text-md font-medium text-[#25D366]">Archived Messages</h5>
          <p className="text-lg font-bold">{data.whatsapp_archived_messages_count}</p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg">
          <h5 className="text-md font-medium text-[#25D366]">Messages Sent</h5>
          <p className="text-lg font-bold">{data.whatsapp_messages_sent}</p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg">
          <h5 className="text-md font-medium text-[#25D366]">Messages Received</h5>
          <p className="text-lg font-bold">{data.whatsapp_messages_received}</p>
        </div>
      </div>
      <p className="text-sm text-red-600 mt-2 text-center">
        Disclaimer: All data presented in this analysis is simulated for demonstration purposes using mock data. It does not represent any real entities or users.
      </p>
    </div>
  );
};

export default WhatsappCharts;

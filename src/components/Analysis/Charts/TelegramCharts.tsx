import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

interface TelegramChartsProps {
  data: any;
}

const TelegramCharts: React.FC<TelegramChartsProps> = ({ data }) => {
  const barChartData = {
    labels: ['Messages Sent', 'Messages Received'],
    datasets: [
      {
        label: `${data.telegram_username}'s Activity`,
        data: [
          data.telegram_messages_sent,
          data.telegram_messages_received
        ],
        backgroundColor: ['#0088cc', '#0088cc'],
      }
    ],
  };

  const pieChartData = {
    labels: ['Contacts', 'Communities', 'Channels Joined', 'Groups', 'Archived Messages'],
    datasets: [
      {
        data: [
          data.telegram_no_of_contacts,
          data.telegram_no_of_communities,
          data.telegram_no_of_channel_joined,
          data.telegram_no_of_groups,
          data.telegram_archived_messages_count,
        ],
        backgroundColor: ['#0088cc', '#32c8cd', '#60d5d8', '#87e2e4', '#aaeef0'],
      }
    ],
  };

  return (
    <div className="bg-[#fff7ed] rounded-lg shadow-md p-6 mb-8" id='telegram-chart'>
      <h2 className="text-2xl font-bold text-[#0088cc] mb-4">Telegram Profile Overview</h2>

      <div className="flex flex-col items-center mb-4">
        <img
          src={data.telegram_profile_picture}
          alt="profile"
          className="h-32 w-32 rounded-full shadow-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-[#0088cc]">{data.telegram_username}</h3>
        <p className="text-sm font-medium text-gray-500 mb-2">{data.telegram_number}</p>
        <p className="text-sm font-medium text-gray-500 mb-2">{data.telegram_bio}</p>
      </div>

      <div className="flex flex-col mb-4">
        <p className="text-md text-gray-700">
          <span className="font-bold">Joined:</span> {data.telegram_joining_year}
        </p>
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-medium text-[#0088cc] mb-4 ">Telegram Activity</h4>
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

      <div className="mb-8">
        <h4 className="text-lg font-medium text-[#0088cc] mb-4">Profile Stats</h4>
        <div className="h-80 flex items-center justify-center">
          <Pie data={pieChartData} options={{ maintainAspectRatio: true, responsive: true, plugins: { legend: { display: true }, } }} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="text-center bg-white p-4 rounded-lg">
          <h5 className="text-md font-medium text-[#0088cc]">Contacts</h5>
          <p className="text-lg font-bold">{data.telegram_no_of_contacts}</p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg">
          <h5 className="text-md font-medium text-[#0088cc]">Channels</h5>
          <p className="text-lg font-bold">{data.telegram_no_of_channel_joined}</p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg">
          <h5 className="text-md font-medium text-[#0088cc]">Groups</h5>
          <p className="text-lg font-bold">{data.telegram_no_of_group}</p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg">
          <h5 className="text-md font-medium text-[#0088cc]">Archived Messages</h5>
          <p className="text-lg font-bold">{data.telegram_archived_messages_count}</p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg">
          <h5 className="text-md font-medium text-[#0088cc]">Messages Sent</h5>
          <p className="text-lg font-bold">{data.telegram_messages_sent}</p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg">
          <h5 className="text-md font-medium text-[#0088cc]">Messages Received</h5>
          <p className="text-lg font-bold">{data.telegram_messages_received}</p>
        </div>
      </div>
      <p className="text-sm text-red-600 mt-2 text-center">
        Disclaimer: All data presented in this analysis is simulated for demonstration purposes using mock data. It does not represent any real entities or users.
      </p>
    </div>
  );
};

export default TelegramCharts;

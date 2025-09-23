import React from 'react';
import { FaUserFriends, FaUsers, FaRegNewspaper, FaInbox, FaPaperPlane } from 'react-icons/fa';
import { Doughnut } from 'react-chartjs-2';

interface TelegramChartsProps {
  data: any;
}

const TelegramCharts: React.FC<TelegramChartsProps> = ({ data }) => {
  const stats = [
    {
      label: 'Contacts',
      value: data.telegram_no_of_contacts,
      icon: <FaUserFriends className="text-[#0088cc] text-3xl mb-2" />,
    },
    {
      label: 'Communities',
      value: data.telegram_no_of_communities,
      icon: <FaUsers className="text-[#32c8cd] text-3xl mb-2" />,
    },
    {
      label: 'Channels',
      value: data.telegram_no_of_channel_joined,
      icon: <FaRegNewspaper className="text-[#60d5d8] text-3xl mb-2" />,
    },
    {
      label: 'Groups',
      value: data.telegram_no_of_groups,
      icon: <FaInbox className="text-[#87e2e4] text-3xl mb-2" />,
    },
    {
      label: 'Archived Messages',
      value: data.telegram_archived_messages_count,
      icon: <FaInbox className="text-[#aaeef0] text-3xl mb-2" />,
    },
    {
      label: 'Messages Sent',
      value: data.telegram_messages_sent,
      icon: <FaPaperPlane className="text-[#0088cc] text-3xl mb-2" />,
    },
    {
      label: 'Messages Received',
      value: data.telegram_messages_received,
      icon: <FaInbox className="text-[#32c8cd] text-3xl mb-2" />,
    },
  ];

  const doughnutChartData = {
    labels: ['Contacts', 'Communities', 'Channels', 'Groups', 'Archived Messages'],
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
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  const doughnutChartOptions = {
    responsive: true,
    cutout: '40%',
    plugins: {
      legend: { position: 'bottom', labels: { color: '#1C1E21', font: { weight: 500, size: 14 } } },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
      <h2 className="text-2xl font-bold text-[#0088cc] mb-4 text-center">Telegram Profile Overview</h2>
      {/* Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative">
          <img
            src={data.telegram_profile_picture}
            alt="profile"
            className="h-28 w-28 md:h-32 md:w-32 rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-[#0088cc] mt-2">{data.telegram_username}</h2>
        <p className="text-gray-500 text-sm md:text-base mb-1">{data.telegram_number}</p>
        <p className="text-gray-600 text-sm md:text-base text-center">{data.telegram_bio}</p>
        <p className="text-gray-500 text-sm md:text-base mt-1">
          <span className="font-bold">Joined:</span> {data.telegram_joining_year}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-transform duration-200 hover:scale-105"
          >
            {stat.icon}
            <p className="font-medium text-gray-500 mb-1">{stat.label}</p>
            <p className="text-xl md:text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
      {/* Profile Stats Doughnut */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
        <h4 className="text-md md:text-lg font-medium text-[#0088cc] mb-4 text-center">Profile Stats</h4>
        <div className="h-80 md:h-96 flex justify-center items-center">
          <Doughnut data={doughnutChartData} options={doughnutChartOptions as any} />
        </div>
      </div>

      <p className="text-xs md:text-sm text-red-600 mt-2 text-center">
        Disclaimer: All data presented in this analysis is simulated for demonstration purposes using mock data. It does not represent any real entities or users.
      </p>
    </div>
  );
};

export default TelegramCharts;

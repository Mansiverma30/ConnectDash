import React from 'react';
import { FaUserFriends, FaUsers, FaRegNewspaper, FaInbox, FaPaperPlane } from 'react-icons/fa';
import { Doughnut } from 'react-chartjs-2';

interface WhatsappChartsProps {
  data: any;
}

const WhatsappCharts: React.FC<WhatsappChartsProps> = ({ data }) => {
  const stats = [
    {
      label: 'Contacts',
      value: data.whatsapp_no_of_contacts,
      icon: <FaUserFriends className="text-[#25D366] text-3xl mb-2" />,
    },
    {
      label: 'Communities',
      value: data.whatsapp_no_of_communities,
      icon: <FaUsers className="text-[#128C7E] text-3xl mb-2" />,
    },
    {
      label: 'Channels',
      value: data.whatsapp_no_of_channel_joined,
      icon: <FaRegNewspaper className="text-[#075E54] text-3xl mb-2" />,
    },
    {
      label: 'Groups',
      value: data.whatsapp_no_of_groups,
      icon: <FaInbox className="text-[#4CAF50] text-3xl mb-2" />,
    },
    {
      label: 'Archived Messages',
      value: data.whatsapp_archived_messages_count,
      icon: <FaInbox className="text-[#388E3C] text-3xl mb-2" />,
    },
    {
      label: 'Messages Sent',
      value: data.whatsapp_messages_sent,
      icon: <FaPaperPlane className="text-[#25D366] text-3xl mb-2" />,
    },
    {
      label: 'Messages Received',
      value: data.whatsapp_messages_received,
      icon: <FaInbox className="text-[#128C7E] text-3xl mb-2" />,
    },
  ];

  const doughnutChartData = {
    labels: ['Contacts', 'Communities', 'Channels', 'Groups', 'Archived Messages'],
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
    <div className="bg-gradient-to-r from-green-50 to-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
      <h2 className="text-2xl font-bold text-[#25D366] mb-4 text-center">WhatsApp Profile Overview</h2>
      {/* Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative">
          <img
            src={data.whatsapp_profile_picture}
            alt="profile"
            className="h-28 w-28 md:h-32 md:w-32 rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-[#25D366] mt-2">{data.whatsapp_username}</h2>
        <p className="text-gray-500 text-sm md:text-base mb-1">{data.whatsapp_number}</p>
        <p className="text-gray-600 text-sm md:text-base text-center">{data.whatsapp_status}</p>
        <p className="text-gray-500 text-sm md:text-base mt-1">
          <span className="font-bold">Joined:</span> {data.whatsapp_joining_year}
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
        <h4 className="text-md md:text-lg font-medium text-[#25D366] mb-4 text-center">Profile Stats</h4>
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

export default WhatsappCharts;

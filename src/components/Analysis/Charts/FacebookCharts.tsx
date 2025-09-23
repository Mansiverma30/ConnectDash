import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { FaUserFriends, FaFileAlt, FaThumbsUp, FaComment } from 'react-icons/fa';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

interface FacebookChartsProps {
  data: any;
}

const FacebookCharts: React.FC<FacebookChartsProps> = ({ data }) => {
  const doughnutChartData = {
    labels: ['Friends', 'Posts', 'Likes', 'Comments'],
    datasets: [
      {
        data: [
          data.facebook_friends,
          data.facebook_posts,
          data.facebook_likes,
          data.facebook_comments,
        ],
        backgroundColor: ['#4267B2', '#3B5998', '#8B9DC3', '#1877F2'],
        borderWidth: 2,
        borderColor: '#fff',
      },
    ],
  };

  const doughnutChartOptions = {
    responsive: true,
    cutout: '40%', // bigger hole for readability
    plugins: {
      legend: { position: 'bottom', labels: { color: '#1C1E21', font: { weight: 500, size: 14 } } },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
      <h2 className="text-2xl font-bold text-[#4267B2] mb-4 text-center">Facebook Profile Overview</h2>
      {/* Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative">
          <img
            src={data.facebook_profile_picture}
            alt="profile"
            className="h-28 w-28 md:h-32 md:w-32 rounded-full border-4 border-white shadow-lg"
          />
          {data.facebook_verified && (
            <span className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1">
              ✔
            </span>
          )}
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-[#4267B2] mt-2">{data.facebook_username}</h2>
        <p className="text-gray-500 text-sm md:text-base mb-2">@{data.facebook_username}</p>
        <p className="text-gray-600 text-center text-sm md:text-base">{data.facebook_about}</p>
        <p className="text-gray-500 text-sm md:text-base mt-1">
          <span className="font-bold">Joined:</span> {data.facebook_joining_year}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaUserFriends className="text-[#4267B2] text-2xl mb-2" />
          <p className="font-medium text-gray-500">Friends</p>
          <p className="text-lg md:text-xl font-bold">{data.facebook_friends}</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaFileAlt className="text-[#3B5998] text-2xl mb-2" />
          <p className="font-medium text-gray-500">Posts</p>
          <p className="text-lg md:text-xl font-bold">{data.facebook_posts}</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaThumbsUp className="text-[#8B9DC3] text-2xl mb-2" />
          <p className="font-medium text-gray-500">Likes</p>
          <p className="text-lg md:text-xl font-bold">{data.facebook_likes}</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaComment className="text-[#1877F2] text-2xl mb-2" />
          <p className="font-medium text-gray-500">Comments</p>
          <p className="text-lg md:text-xl font-bold">{data.facebook_comments}</p>
        </div>
      </div>

      {/* Doughnut Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
        <h4 className="text-md md:text-lg font-medium text-[#4267B2] mb-4 text-center">Activity Chart</h4>
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

export default FacebookCharts;

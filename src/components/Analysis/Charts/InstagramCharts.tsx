import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { FaUserFriends, FaRegComment, FaHeart, FaRegPaperPlane, FaRegNewspaper, FaRegImages } from 'react-icons/fa';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

interface InstagramChartsProps {
  data: any;
}

const InstagramCharts: React.FC<InstagramChartsProps> = ({ data }) => {
  const doughnutChartData = {
    labels: ['Followers', 'Following', 'Likes', 'Comments', 'Posts', 'Stories'],
    datasets: [
      {
        data: [
          data.instagram_followers_count,
          data.instagram_following_count,
          data.instagram_likes,
          data.instagram_comments,
          data.instagram_no_of_post,
          data.instagram_no_of_stories,
        ],
        backgroundColor: [
          '#E1306C',
          '#F56040',
          '#C13584',
          '#FFDC00',
          '#833AB4',
          '#5851DB',
        ],
        borderWidth: 2,
        borderColor: '#fff',
      },
    ],
  };

  const doughnutChartOptions = {
    responsive: true,
    cutout: '30%', // larger doughnut hole for readability
    plugins: {
      legend: { position: 'bottom', labels: { color: '#1C1E21', font: { weight: 500, size: 14 } } },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="bg-gradient-to-r from-pink-50 to-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
      <h2 className="text-2xl font-bold text-[#E1306C] mb-4 text-center">Instagram Profile Overview</h2>
      {/* Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative">
          <img
            src={data.instagram_profile_picture}
            alt="profile"
            className="h-28 w-28 md:h-32 md:w-32 rounded-full border-4 border-white shadow-lg"
          />
          {data.instagram_verified && (
            <span className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1">
              ✔
            </span>
          )}
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-[#E1306C] mt-2">{data.instagram_username}</h2>
        <p className="text-gray-500 text-sm md:text-base mb-2">@{data.instagram_username}</p>
        <p className="text-gray-600 text-center text-sm md:text-base">{data.instagram_about}</p>
        <p className="text-gray-500 text-sm md:text-base mt-1">
          <span className="font-bold">Joined:</span> {data.instagram_joining_year}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 text-gray-700">
        <p><span className="font-semibold">Joined:</span> {data.instagram_joining_year}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-6">
        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaUserFriends className="text-[#E1306C] text-2xl mb-2" />
          <p className="font-medium text-gray-500">Followers</p>
          <p className="text-lg md:text-xl font-bold">{data.instagram_followers_count}</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaRegPaperPlane className="text-[#F56040] text-2xl mb-2" />
          <p className="font-medium text-gray-500">Following</p>
          <p className="text-lg md:text-xl font-bold">{data.instagram_following_count}</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaHeart className="text-[#C13584] text-2xl mb-2" />
          <p className="font-medium text-gray-500">Likes</p>
          <p className="text-lg md:text-xl font-bold">{data.instagram_likes}</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaRegComment className="text-[#FFDC00] text-2xl mb-2" />
          <p className="font-medium text-gray-500">Comments</p>
          <p className="text-lg md:text-xl font-bold">{data.instagram_comments}</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaRegNewspaper className="text-[#833AB4] text-2xl mb-2" />
          <p className="font-medium text-gray-500">Posts</p>
          <p className="text-lg md:text-xl font-bold">{data.instagram_no_of_post}</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaRegImages className="text-[#5851DB] text-2xl mb-2" />
          <p className="font-medium text-gray-500">Stories</p>
          <p className="text-lg md:text-xl font-bold">{data.instagram_no_of_stories}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
        <h4 className="text-md md:text-lg font-medium text-[#E1306C] mb-4 text-center">Activity Chart</h4>
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

export default InstagramCharts;

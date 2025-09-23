import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { FaUserFriends, FaRegComment, FaHeart, FaRetweet, FaRegPaperPlane } from 'react-icons/fa';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

interface TwitterChartsProps {
  data: any;
}

const TwitterCharts: React.FC<TwitterChartsProps> = ({ data }) => {
  const barChartData = {
    labels: ['Followers', 'Following', 'Likes', 'Comments', 'Tweets', 'Retweets'],
    datasets: [
      {
        label: 'Activity Count',
        data: [
          data.twitter_followers_count,
          data.twitter_following_count,
          data.twitter_likes,
          data.twitter_comments,
          data.no_of_tweets,
          data.no_of_retweets,
        ],
        backgroundColor: [
          '#1DA1F2',
          '#17BF63',
          '#E0245E',
          '#FFAD1F',
          '#794BC4',
          '#00ACEE',
        ],
        borderRadius: 6,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        ticks: { color: '#1C1E21', font: { weight: 500 } },
      },
      y: {
        ticks: { color: '#1C1E21' },
      },
    },
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
      <h2 className="text-2xl font-bold text-[#1DA1F2] mb-4 text-center">Twitter Profile Overview</h2>
      {/* Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative">
          <img
            src={data.twitter_profile_picture}
            alt="profile"
            className="h-28 w-28 md:h-32 md:w-32 rounded-full border-4 border-white shadow-lg"
          />
          {data.twitter_verified && (
            <span className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1">
              ✔
            </span>
          )}
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-[#1DA1F2] mt-2">{data.twitter_username}</h2>
        <p className="text-gray-500 text-sm md:text-base mb-2">@{data.twitter_username}</p>
        <p className="text-gray-600 text-center text-sm md:text-base">{data.twitter_about}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 text-gray-700">
        <p><span className="font-semibold">Name:</span> {data.full_name}</p>
        <p><span className="font-semibold">Email:</span> {data.email}</p>
        <p><span className="font-semibold">Gender:</span> {data.gender}</p>
        <p><span className="font-semibold">Joined:</span> {data.twitter_joining_year}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-6">
        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaUserFriends className="text-[#1DA1F2] text-2xl mb-2" />
          <p className="font-medium text-gray-500">Followers</p>
          <p className="text-lg md:text-xl font-bold">{data.twitter_followers_count}</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaRegPaperPlane className="text-[#17BF63] text-2xl mb-2" />
          <p className="font-medium text-gray-500">Following</p>
          <p className="text-lg md:text-xl font-bold">{data.twitter_following_count}</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaHeart className="text-[#E0245E] text-2xl mb-2" />
          <p className="font-medium text-gray-500">Likes</p>
          <p className="text-lg md:text-xl font-bold">{data.twitter_likes}</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaRegComment className="text-[#FFAD1F] text-2xl mb-2" />
          <p className="font-medium text-gray-500">Comments</p>
          <p className="text-lg md:text-xl font-bold">{data.twitter_comments}</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaRegPaperPlane className="text-[#794BC4] text-2xl mb-2" />
          <p className="font-medium text-gray-500">Tweets</p>
          <p className="text-lg md:text-xl font-bold">{data.no_of_tweets}</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaRetweet className="text-[#00ACEE] text-2xl mb-2" />
          <p className="font-medium text-gray-500">Retweets</p>
          <p className="text-lg md:text-xl font-bold">{data.no_of_retweets}</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
        <h4 className="text-md md:text-lg font-medium text-[#1DA1F2] mb-2 text-center">Activity Chart</h4>
        <div className="h-80 md:h-96 flex justify-center items-center">
          <Bar data={barChartData} options={barChartOptions as any} />
        </div>
      </div>

      <p className="text-xs md:text-sm text-red-600 mt-2 text-center">
        Disclaimer: All data presented in this analysis is simulated for demonstration purposes using mock data. It does not represent any real entities or users.
      </p>
    </div>
  );
};

export default TwitterCharts;

import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

interface ThreadsChartsProps {
  data: any;
}

const ThreadsCharts: React.FC<ThreadsChartsProps> = ({ data }) => {

  const pieChartData = {
    labels: ['Followers', 'Following', 'Posts', 'Likes', 'Comments'],
    datasets: [
      {
        data: [
          data.threads_followers_count,
          data.threads_following_count,
          data.threads_post,
          data.threads_likes,
          data.threads_comments,
        ],
        backgroundColor: ['#000000', '#262626', '#525252', '#858585', '#A3A3A3'],
      }
    ],
  };

  return (
    <div className="bg-[#F0F2F5] rounded-lg shadow-md p-6 mb-8" id='threads-chart'>
      <h2 className="text-2xl font-bold text-[#000000] mb-4">Threads Profile Overview</h2>

      <div className="flex flex-col items-center mb-4">
        <img
          src={data.threads_profile_picture}
          alt="profile"
          className="h-32 w-32 rounded-full shadow-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-[#000000]">{data.threads_username}</h3>
        {data.threads_verified && (
          <p className="text-xs text-blue-500 font-semibold mb-2">Verified</p>
        )}
        <p className="text-sm font-medium text-[#262626] mb-2">{data.threads_about}</p>
      </div>

      <div className="flex flex-col mb-4">
        <p className="text-md text-[#262626]">
          <span className="font-bold">Joined:</span> {data.threads_joining_year}
        </p>
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-medium text-[#000000] mb-4">Profile Stats</h4>
        <div className="h-80 flex items-center justify-center">
          <Pie data={pieChartData} options={{ maintainAspectRatio: true, responsive: true, plugins: { legend: { display: true }, } }} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="text-center bg-[#262626] p-4 rounded-lg">
          <h5 className="text-md font-medium text-gray-300">Followers</h5>
          <p className="text-lg font-bold text-gray-100">{data.threads_followers_count}</p>
        </div>
        <div className="text-center bg-[#262626] p-4 rounded-lg">
          <h5 className="text-md font-medium text-gray-300">Following</h5>
          <p className="text-lg font-bold text-gray-100">{data.threads_following_count}</p>
        </div>
        <div className="text-center bg-[#262626] p-4 rounded-lg">
          <h5 className="text-md font-medium text-gray-300">Posts</h5>
          <p className="text-lg font-bold text-gray-100">{data.threads_post}</p>
        </div>
        <div className="text-center bg-[#262626] p-4 rounded-lg">
          <h5 className="text-md font-medium text-gray-300">Likes</h5>
          <p className="text-lg font-bold text-gray-100">{data.threads_likes}</p>
        </div>
        <div className="text-center bg-[#262626] p-4 rounded-lg">
          <h5 className="text-md font-medium text-gray-300">Comments</h5>
          <p className="text-lg font-bold text-gray-100">{data.threads_comments}</p>
        </div>
      </div>
      <p className="text-sm text-red-600 mt-2 text-center">
        Disclaimer: All data presented in this analysis is simulated for demonstration purposes using mock data. It does not represent any real entities or users.
      </p>
    </div>
  );
};

export default ThreadsCharts;

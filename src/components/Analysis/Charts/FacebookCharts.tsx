import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

interface FacebookChartsProps {
  data: any;
}

const FacebookCharts: React.FC<FacebookChartsProps> = ({ data }) => {
  const pieChartData = {
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
      }
    ],
  };

  return (
    <div className="bg-[#F0F2F5] rounded-lg shadow-md p-6 mb-8" id='facebook-chart'>
      <h2 className="text-2xl font-bold text-[#4267B2] mb-4">Facebook Profile Overview</h2>

      <div className="flex flex-col items-center mb-4">
        <img
          src={data.facebook_profile_picture}
          alt="profile"
          className="h-32 w-32 rounded-full shadow-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-[#4267B2]">{data.facebook_username}</h3>
        {data.facebook_verified && (
          <p className="text-xs text-blue-500 font-semibold mb-2">Verified</p>
        )}
        <p className="text-sm font-medium text-[#606770] mb-2">{data.facebook_about}</p>
      </div>

      <div className="flex flex-col mb-4">
        <p className="text-md text-[#1C1E21]">
          <span className="font-bold">Joined:</span> {data.facebook_joining_year}
        </p>
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-medium text-[#4267B2] mb-4">Profile Stats</h4>
        <div className="h-80 flex items-center justify-center">
          <Pie data={pieChartData} options={{ maintainAspectRatio: true, responsive: true, plugins: { legend: { display: true } } }} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="text-center bg-white p-4 rounded-lg shadow-sm border border-[#DADDE1]">
          <h5 className="text-md font-medium text-[#4267B2]">Friends</h5>
          <p className="text-lg font-bold text-[#1C1E21]">{data.facebook_friends}</p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg shadow-sm border border-[#DADDE1]">
          <h5 className="text-md font-medium text-[#4267B2]">Posts</h5>
          <p className="text-lg font-bold text-[#1C1E21]">{data.facebook_posts}</p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg shadow-sm border border-[#DADDE1]">
          <h5 className="text-md font-medium text-[#4267B2]">Likes</h5>
          <p className="text-lg font-bold text-[#1C1E21]">{data.facebook_likes}</p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg shadow-sm border border-[#DADDE1]">
          <h5 className="text-md font-medium text-[#4267B2]">Comments</h5>
          <p className="text-lg font-bold text-[#1C1E21]">{data.facebook_comments}</p>
        </div>
      </div>
      <p className="text-sm text-red-600 mt-2 text-center">
        Disclaimer: All data presented in this analysis is simulated for demonstration purposes using mock data. It does not represent any real entities or users.
      </p>
    </div>
  );
};

export default FacebookCharts;

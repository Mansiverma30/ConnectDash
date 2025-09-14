import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

interface InstagramChartsProps {
  data: any;
}

const InstagramCharts: React.FC<InstagramChartsProps> = ({ data }) => {

  const pieChartData = {
    labels: ['Followers', 'Following', 'Likes', 'Comments', 'Number of Posts', 'Number of Stories'],
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
        backgroundColor: ['#E1306C', '#F56040', '#C13584', '#FFFC00', '#E1306C', '#F56040'], // Instagram's colors
      }
    ],
  };

  return (
    <div className="bg-[#fff7ed] rounded-lg shadow-md p-6 mb-8 " id='instagram-chart'>
      <h2 className="text-2xl font-bold text-[#E1306C] mb-4">Instagram Profile Overview</h2>

      <div className="flex flex-col items-center mb-4">
        <img
          src={data.instagram_profile_picture}
          alt="profile"
          className="h-32 w-32 rounded-full shadow-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-[#E1306C]">{data.instagram_username}</h3>
        <p className="text-sm font-medium text-gray-500 mb-2">@{data.instagram_username}</p>
        {data.instagram_verified && (
          <p className="text-xs text-blue-500 font-semibold mb-2">Verified</p>
        )}
        <p className="text-gray-600 mb-2">{data.instagram_about}</p>
      </div>

      <div className="flex flex-col mb-4">
        <p className="text-md text-gray-700">
          <span className="font-bold">Joined:</span> {data.instagram_joining_year}
        </p>
      </div>
      <div className="mb-8">
        <h4 className="text-lg font-medium text-[#E1306C] mb-4">Instagram Activity</h4>
        <div className="h-80 flex justify-center items-center">
          <Pie data={pieChartData} options={{ maintainAspectRatio: true, responsive: true, plugins: { legend: { display: true }, } }} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="text-center bg-white p-4 rounded-lg">
          <h5 className="text-md font-medium text-[#E1306C]">Followers</h5>
          <p className="text-lg font-bold">{data.instagram_followers_count}</p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg">
          <h5 className="text-md font-medium text-[#E1306C]">Following</h5>
          <p className="text-lg font-bold">{data.instagram_following_count}</p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg">
          <h5 className="text-md font-medium text-[#E1306C]">Likes</h5>
          <p className="text-lg font-bold">{data.instagram_likes}</p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg">
          <h5 className="text-md font-medium text-[#E1306C]">Comments</h5>
          <p className="text-lg font-bold">{data.instagram_comments}</p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg">
          <h5 className="text-md font-medium text-[#E1306C]">Stories</h5>
          <p className="text-lg font-bold">{data.instagram_no_of_stories}</p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg">
          <h5 className="text-md font-medium text-[#E1306C]">Posts</h5>
          <p className="text-lg font-bold">{data.instagram_no_of_post}</p>
        </div>
      </div>
      <p className="text-sm text-red-600 mt-2 text-center">
        Disclaimer: All data presented in this analysis is simulated for demonstration purposes using mock data. It does not represent any real entities or users.
      </p>
    </div>
  );
};

export default InstagramCharts;

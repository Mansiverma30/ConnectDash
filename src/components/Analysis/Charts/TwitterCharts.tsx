import React from 'react';
/* import { Pie } from 'react-chartjs-2'; */
import 'chart.js/auto';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

interface TwitterChartsProps {
  data: any;
}

const TwitterCharts: React.FC<TwitterChartsProps> = ({ data }) => {
  /*  const pieChartData = {
     labels: ['Followers', 'Following', 'Likes', 'Comments','Number of Tweets', 'Number of Retweets'],
     datasets: [
       {
         data: [
           data.twitter_followers_count,
           data.twitter_following_count,
           data.twitter_likes,
           data.twitter_comments,
           data.no_of_tweets, 
           data.no_of_retweets
         ],
         backgroundColor: ['#4CAF50', '#FFC107', '#F44336', '#2196F3','#000000', '#00ACEE'],
       },
     ],
   }; */

  return (
    <div className="bg-[#fff7ed] rounded-lg shadow-md p-4 mb-8" id="twitter-chart">
      <h2 className="text-xl font-bold text-[#1DA1F2] mb-4 text-center">Twitter Profile Overview</h2>

      <div className="flex flex-col items-center mb-4">
        <img
          src={data.twitter_profile_picture}
          alt="profile"
          className="h-24 w-24 md:h-32 md:w-32 rounded-full shadow-lg mb-4"
        />
        <h3 className="text-lg md:text-xl font-semibold text-[#1DA1F2] text-center">{data.twitter_username}</h3>
        <p className="text-xs md:text-sm font-medium text-gray-500 mb-2 text-center">@{data.twitter_username}</p>
        {data.twitter_verified && (
          <p className="text-xs text-[#1DA1F2] font-semibold mb-2 text-center">Verified</p>
        )}
        <p className="text-gray-600 mb-2 text-center">{data.twitter_about}</p>
      </div>

      <div className="flex flex-col mb-4">
        <p className="text-sm md:text-md text-gray-700">
          <span className="font-bold">Name:</span> {data.full_name}
        </p>
        <p className="text-sm md:text-md text-gray-700">
          <span className="font-bold">Email:</span> {data.email}
        </p>
        <p className="text-sm md:text-md text-gray-700">
          <span className="font-bold">Gender:</span> {data.gender}
        </p>
        <p className="text-sm md:text-md text-gray-700">
          <span className="font-bold">Joined:</span> {data.twitter_joining_year}
        </p>
      </div>

      <div className="mb-4">
        <h4 className="text-md md:text-lg font-medium text-[#1DA1F2] mb-4 text-center">Twitter Activity</h4>
        {/* <div className="h-60 md:h-80 flex justify-center items-center">
          <Pie
            data={pieChartData}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              plugins: { legend: { display: true } },
            }}
          />
        </div> */}
      </div>

      <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4">
        <div className="text-center bg-white p-2 md:p-4 rounded-lg">
          <h5 className="text-xs md:text-md font-medium text-[#1DA1F2]">Followers</h5>
          <p className="text-sm md:text-lg font-bold">{data.twitter_followers_count}</p>
        </div>
        <div className="text-center bg-white p-2 md:p-4 rounded-lg">
          <h5 className="text-xs md:text-md font-medium text-[#1DA1F2]">Following</h5>
          <p className="text-sm md:text-lg font-bold">{data.twitter_following_count}</p>
        </div>
        <div className="text-center bg-white p-2 md:p-4 rounded-lg">
          <h5 className="text-xs md:text-md font-medium text-[#1DA1F2]">Likes</h5>
          <p className="text-sm md:text-lg font-bold">{data.twitter_likes}</p>
        </div>
        <div className="text-center bg-white p-2 md:p-4 rounded-lg">
          <h5 className="text-xs md:text-md font-medium text-[#1DA1F2]">Comments</h5>
          <p className="text-sm md:text-lg font-bold">{data.twitter_comments}</p>
        </div>
        <div className="text-center bg-white p-2 md:p-4 rounded-lg">
          <h5 className="text-xs md:text-md font-medium text-[#1DA1F2]">Tweets</h5>
          <p className="text-sm md:text-lg font-bold">{data.no_of_tweets}</p>
        </div>
        <div className="text-center bg-white p-2 md:p-4 rounded-lg">
          <h5 className="text-xs md:text-md font-medium text-[#1DA1F2]">Retweets</h5>
          <p className="text-sm md:text-lg font-bold">{data.no_of_retweets}</p>
        </div>
      </div>

      <p className="text-xs md:text-sm text-red-600 mt-2 text-center">
        Disclaimer: All data presented in this analysis is simulated for demonstration purposes using mock data. It does not represent any real entities or users.
      </p>
    </div>
  );
};

export default TwitterCharts;

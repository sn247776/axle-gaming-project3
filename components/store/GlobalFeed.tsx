"use client";
// Imports
import React, { useEffect, useState } from 'react';
import { FaComment, FaHeart, FaShare, FaThumbsUp } from 'react-icons/fa';
import { FaRegMessage } from 'react-icons/fa6';
import axios from 'axios';

// Component Definition
type Props = {};

const GlobalFeed = (props: Props) => {
  const [feedData, setFeedData]: any = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://kind-pear-puffer-tie.cyclic.cloud/api/feeds/getAllGlobal');
        setFeedData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  if (!feedData) {
    return <div>Loading...</div>;
  }

  const { feeds } = feedData;

  return (
    <div className={`w-full h-fit flex flex-col justify-center items-center gap-5 py-5 bg-slate-500`}>
      {feeds.map((feed: any, index: number) => (
        <div key={index} className={`w-[35rem] h-fit min-h-[20rem] relative`}>
          <img
            style={{ WebkitClipPath: `polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)` }}
            src={feed.logo}
            alt={feed.author}
            className='absolute -left-[0%] -top-[0%] w-[3.2rem] h-[3rem] z-20'
          />
          <div className={`w-full h-full flex flex-col items-center justify-center`}>
            <div
              style={{ WebkitClipPath: `polygon(10% 73%, 10% 18.5%, 6.5% 0, 100% 0%, 100% 110%, 0 110%, 0% 80%, 4.5% 100%)` }}
              className={`bg-[#0f0e17] pl-[4.5rem] w-full h-[3.35rem]`}
            >
              <div>{feed.author}</div>
             <div>{new Date(feed.timestamp).toLocaleDateString()}</div>

            </div>
            <div className={`m-0 bg-[#0f0e17] w-full`}>
              <div className={`px-5 py-1 line-clamp-3`}>
                {feed.content}
              </div>
              <div className={`w-full h-fit max-h-[85vh]`}>
                <img
                  src={feed.media[0].url}
                  alt={feed.author}
                  className={`w-full h-full`}
                />
              </div>
              <div className={`px-5 w-full flex items-center gap-3 justify-between`}>
                <div className='text-[#565656]'>
                  by {feed.author}
                </div>
                <div className={`flex items-center divide-x-2`}>
                  <div className='flex items-center gap-1 px-2'>
                    {feed.likes} <p>19</p>
                    <FaHeart />
                  </div>
                  <div className={`flex items-center gap-1 px-2`}>
                    {feed?.comments?.length} <p>20</p>
                    <FaRegMessage />
                  </div>
                </div>
              </div>
              <div className={`w-full h-[2.2rem] flex flex-row items-center justify-evenly`}>
                <div className={`flex bg-clip-content items-center gap-1`}>
                  <FaThumbsUp />
                  Likes
                </div>
                <div className={`flex px-2 items-center gap-1`}>
                  <FaComment />
                  Comment
                </div>
                <div className={`flex items-center gap-1`}>
                  <FaShare />
                  Share
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GlobalFeed;

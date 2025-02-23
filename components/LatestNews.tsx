'use client';
import { useQuery } from '@apollo/client';
import { GET_LATEST_NEWS } from '@/graphql/queries';
import Image from 'next/image'
const LatestNews = () => {
  const { loading, error, data } = useQuery(GET_LATEST_NEWS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
  
      data.latestNews.map((news: any) => {        
        return (
        <div key={news.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <Image
            src={news.imageURL} 
            alt={news.title as string}
            className="w-full h-48 object-cover"
            width={200}
            height={192}
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
            <h3 className="text-lg font-semibold">{news.title as string}</h3>
            <p className="text-sm">{news.date as string}</p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-700 text-base">{news.summary as string}</p>
        </div>
        <div className="p-6 bg-gray-100">
          <button className="text-blue-500 hover:text-blue-700 font-semibold">
            Read more
          </button>
        </div>
      </div>
      )
      })

  );
};

export default LatestNews;

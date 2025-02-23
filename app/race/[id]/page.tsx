'use client';
import { useParams} from 'next/navigation';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_RACE } from '@/graphql/queries';
import { CornerUpLeft, Play } from 'lucide-react';
import Link from 'next/link';

import BookmarkButton from '@/components/BookmarkButton';

const RaceDetail = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const params = useParams();
  const id = params?.id;

  const { loading, error, data } = useQuery(GET_RACE, {
    variables: { id }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='container mx-auto px-4 text-white my-12'>
      {data && (
        <div className='relative'>
          <h1 className='text-4xl font-bold'>{data.race.name}</h1>
          <div className='flex justify-between'>
            <span>{data.race.date} | {data.race.location}</span>
            <div className='text-right'>
            <BookmarkButton data={data.race}/>
            <Link href="/races" className='flex items-center mb-2 hover:text-red-500'>
              <CornerUpLeft/> Back to races
            </Link>
            </div>
          </div>
          {!isVideoPlaying && (
            <div style={{background: `url(${data.race.imageURL}) no-repeat center center/cover`}} className='w-full min-h-[500px]'>
              <div className='absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 rounded-full p-14' onClick={() => {
                setIsVideoPlaying(true);
              }}>
                <Play className='w-12 h-12' />
              </div>
            </div>
          )}

          {isVideoPlaying && (
            <iframe 
              src='https://www.youtube.com/embed/qk7pZnxCX2o?autoplay=1&controls=0' 
              title={data.race.name} 
              className='w-full h-[500px]'
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          )}
        </div>
      )}
    </div>
  );
};
export default RaceDetail;

'use client';
import { useQuery } from '@apollo/client';
import { GET_RACES } from '@/graphql/queries';
import Link from 'next/link';
import Image from 'next/image';
import BookmarkButton from '@/components/BookmarkButton';

const RacesPage = () => {
  const { loading, error, data } = useQuery(GET_RACES);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-white">Races</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.races?.map((races: any) => (
          <Link href={`/race/${races.id}`}
            key={races.id} 
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <Image 
              src={races.imageURL} 
              alt={races.name} 
              className="w-full h-48 object-cover"
              width={200}
              height={192}
            />
           <div className='p-4 '>
              <div className='flex justify-between text-white'>
                <span className="text-xl font-semibold">{races.name}</span>
              
             <BookmarkButton data={races}/>
              </div>
              <div className='flex justify-between text-gray-400 mt-2'>
                <span>{races.location}</span>
                <span>{races.date}</span>
             </div>
            </div>
           
            </Link>
        ))}
      </div>
    </div>
  );
};

export default RacesPage; 
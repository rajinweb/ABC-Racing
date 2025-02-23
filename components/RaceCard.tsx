import Link from 'next/link';
import { useQuery } from '@apollo/client';
import {Race} from  '@/types/index';
import {GET_RACES} from '@/graphql/queries';

const RaceCard = () => {
  const { loading, error, data } = useQuery(GET_RACES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (data.races.map((race: Race) => (
      <div key={race.id} className="relative flex rounded-xl border-gray-400 border-2 overflow-hidden ">
        <Link href={`/race/${race.id}`} className='absolute z-10 flex w-full h-full bg-black bg-opacity-80 hover:bg-opacity-50 justify-center items-center text-center'>
          <div className='w-full bg-black bg-opacity-50'>
              <div className='text-red-500 font-bold '>{race.name}</div>
              <p>{race.date}</p>
              <p>{race.location}</p>
          </div>
        </Link>
        <img src={race.imageURL} alt={`Image of ${race.name}`} />
      </div>
      ))
      );
};

export default RaceCard;

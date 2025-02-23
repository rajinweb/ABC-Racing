'use client';
import { useQuery } from '@apollo/client';
import { GET_TOP_DRIVERS } from '@/graphql/queries';
import Image from 'next/image';
const DriversPage = () => {
  const { data, loading, error } = useQuery(GET_TOP_DRIVERS);

  if (loading) return <p className="text-center text-xl text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-xl text-red-500">Error: {error.message}</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold  text-white mb-12">Top Drivers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {data.drivers.map((driver: any) => (
          <div
            key={driver.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-center p-6">
              <Image
                src={driver.imageURL}
                alt={driver.name}
                className="w-32 h-32 object-cover rounded-full mr-6"
                width={32}
                height={32}
              />
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{driver.name}</h2>
                <p className="text-gray-600 text-sm mb-1">Team: {driver.team}</p>
                <p className="text-gray-600 text-sm mb-1">Points: {driver.points}</p>
                <p className="text-gray-600 text-sm">Position: {driver.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriversPage;

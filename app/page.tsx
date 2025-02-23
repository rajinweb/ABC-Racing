'use client';

import RaceCard from '@/components/RaceCard';
import Carousel from '@/components/Carousel';
import LatestNews from '@/components/LatestNews';
const Home = () => {
  return (
    <div>
    <Carousel />
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Featured Races</h2>
          <div className="grid grid-cols-3 gap-6">
              <RaceCard />
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Latest News</h2>
          <div className="grid grid-cols-3 gap-6">
            <LatestNews/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

'use client';
import LatestNews from '@/components/LatestNews';

const NewsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-white">Latest News</h1>
      <div className="grid grid-cols-3 gap-6">
      <LatestNews/>
      </div>
    </div>
  );
};

export default NewsPage; 
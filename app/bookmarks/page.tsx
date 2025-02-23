'use client';
import Link from 'next/link';
import { useAuth } from '@/store/useAuthStore';
import BookmarkButton from '@/components/BookmarkButton';
import Image from 'next/image';
const BookmarksPage = () => {
  const { bookmarks } = useAuth();
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-6" >My Bookmarks</h1>
        {Object.keys(bookmarks).length ? ( 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {
         Object.values(bookmarks).map((bookmark: any) => (
          <Link href={`/race/${bookmark.id}`}
            key={bookmark.id} 
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <Image 
              src={bookmark.imageURL} 
              alt={bookmark.name} 
              className="w-full h-48 object-cover"
              width={200}
              height={192}
            />
            <div className='p-4 '>
              <div className='flex justify-between text-white'>
                <span className="text-xl font-semibold">{bookmark.name}</span>
                <BookmarkButton data={bookmark}/>
              </div>
              <div className='flex justify-between text-gray-400 mt-2'>
                <span>{bookmark.location}</span>
                <span>{bookmark.date}</span>
             </div>
            </div>
            </Link>
         ))
        }
        </div>
        ) :(
          <div className='h-80 text-center flex justify-center items-center'>
            <h1>You have no bookmarks!</h1>
          </div>
        )
        } 
    </div>
  );
};

export default BookmarksPage; 
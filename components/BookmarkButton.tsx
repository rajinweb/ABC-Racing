import { Bookmark, BookmarkCheckIcon } from 'lucide-react';
import { useAuth } from '@/store/useAuthStore';
import { Race } from '@/types';
import {useRouter} from 'next/navigation';

const BookmarkButton = ({data}:{data:Race}) => {

const { isAuthenticated, removeBookmark, isBookmarked, addBookmark } = useAuth();
const router = useRouter();

const toggleBookmark=(e: { preventDefault: () => void}, race: Race)=>{
    e.preventDefault();
    if(isAuthenticated){
        if(isBookmarked(data.id)){
            removeBookmark(data.id);
        }else{
            addBookmark(race);
        }
    }else{
      router.push('/login')
    }
  }
  return (
    <span className={`inline-flex cursor-pointer leading-5 ${isBookmarked(data.id) ? 'text-red-500' : 'hover:text-red-500'}`} onClick={(e) => toggleBookmark(e, data) } title={isBookmarked(data.id) ? "Remove Bookmark" : "Add to Bookmark"}>
    {isBookmarked(data.id) ? (<><BookmarkCheckIcon className="w-5 h-5"/>  Bookmarked </>): (<><Bookmark className="w-5 h-5"/>Bookmark</>)}
  </span>
  )
}

export default BookmarkButton;
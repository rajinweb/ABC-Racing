import { ReactNode } from "react";

export interface User {
    id: string;
    email: string;
    name: string;
    favorites: string[];
  }
  export interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (user: User) => void;
    logout: () => void;
  }
export interface LoginFormData {
    username: string;
    password: string;
  }
export interface AuthProviderProps {
  children: ReactNode;
}
export interface Bookmark {
  imageURL: string ;
  name: string;
  id: string;
}
export interface ExtendedAuthContextType extends AuthContextType {
  bookmarks: Record<string, Bookmark>;
  addBookmark: (race:Race) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
}
export interface Race {
  id: string;
  name: string;
  date: string;
  location: string;
  imageURL: string;
}
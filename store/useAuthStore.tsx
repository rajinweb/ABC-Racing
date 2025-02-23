'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, AuthProviderProps, ExtendedAuthContextType, Race } from '@/types';
import { useRouter } from 'next/navigation';
import { Bookmark } from '@/types';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL || '/api/graphql',
  cache: new InMemoryCache(),
});

const AuthContext = createContext<ExtendedAuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {


  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router= useRouter();

  // Bookmark state
  const [bookmarks, setBookmarks] = useState<Record<string, Bookmark>>({});

  // Authentication functions
  const login = (user: User) => {
    setUser(user);
    setIsAuthenticated(true);
    router.push("/bookmarks")
  
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    router.push("/")
  };

  // Bookmark functions
  const addBookmark = (race:Race) => {  
    setBookmarks((prevBookmarks) => ({
      ...prevBookmarks,
      [race.id]: {
        ...race
      }
    }));
  };

  const removeBookmark = (id: string) => {
    setBookmarks((prevBookmarks) => {
      const newBookmarks = { ...prevBookmarks };
      delete newBookmarks[id];
      return newBookmarks;
    });
  };

  const isBookmarked = (id: string): boolean => !!bookmarks[id];

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        bookmarks,
        addBookmark,
        removeBookmark,
        isBookmarked,
      }}
    >
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};



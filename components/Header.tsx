'use client'
import React, { useState } from 'react';
import { Trophy, Calendar, Users, Menu, Bookmark, BookmarkCheck, CircleGauge } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/store/useAuthStore';

export default function Header() {
  const { isAuthenticated, user, login, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Trophy className="w-8 h-8 text-red-500" />
            <span className="font-bold text-xl">ABC Racing</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/races" className="flex items-center space-x-2 hover:text-red-500 transition-colors">
              <CircleGauge className="w-5 h-5" />
              <span>Races</span>
            </Link>
            <Link href="/drivers" className="flex items-center space-x-2 hover:text-red-500 transition-colors">
              <Users className="w-5 h-5" />
              <span>Drivers</span>
            </Link>
            {isAuthenticated && (
              <Link href="/bookmarks" className="flex items-center space-x-2 hover:text-red-500 transition-colors">
                <BookmarkCheck className="w-5 h-5" />
                <span>My Bookmarks</span>
              </Link>
            )}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span>Welcome, {user?.name}</span>
                <button 
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                href="/login"
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition-colors"
              >
                Login
              </Link>
            )}
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-2">
          <nav className="flex flex-col space-y-4">
            <Link href="/races" className="flex items-center space-x-2 hover:text-red-500 transition-colors">
              <Calendar className="w-5 h-5" />
              <span>Races</span>
            </Link>
            <Link href="/drivers" className="flex items-center space-x-2 hover:text-red-500 transition-colors">
              <Users className="w-5 h-5" />
              <span>Drivers</span>
            </Link>
            {isAuthenticated && (
              <Link href="/bookmarks" className="flex items-center space-x-2 hover:text-red-500 transition-colors">
                <Bookmark className="w-5 h-5" />
                <span>Bookmarks</span>
              </Link>
            )}
            {isAuthenticated ? (
              <div className="flex flex-col space-y-2">
                <span>Welcome, {user?.name}</span>
                <button 
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                href="/login"
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition-colors"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

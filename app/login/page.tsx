'use client';
import React, { useState } from 'react';
import { useAuth } from '@/store/useAuthStore'; 
import { LoginFormData } from '@/types';

export default function Login() {
  const [formData, setFormData] = useState<LoginFormData>({ username: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setError('Please enter both username and password');
      return;
    }
    const mockUser = { 
      id: '1', 
      name: formData.username,
      email: `${formData.username}@example.com`,
      favorites: [] 
    };
    login(mockUser);
  };

  return (
    <div className="py-8 flex items-center justify-center bg-gray-900 text-white">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        {error && <div className="bg-red-500 text-white p-2 rounded mb-4">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-400">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-400">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don't have an account? 
          <a href="/signup" className="text-blue-500 hover:text-blue-400">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

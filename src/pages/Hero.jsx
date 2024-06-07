import { SearchIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import uni from "../assets/uni.jpg";
import CollegeCard from '../components/CollegeCard';
import { fetchColleges } from '../services/collegeService';

export default function Hero() {
    const [searchTerm, setSearchTerm] = useState("");
    const { data: colleges, isLoading } = useQuery("colleges", fetchColleges);
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
      };
      const filteredColleges = colleges?.filter((college) =>
        college.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  return (
    <div className="bg-gray-100">
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-[1px]"
        style={{
          backgroundImage: `url(${uni})`,
          height: '500px',
          width: '100%',
        }}
      />

{/* Search */}
<div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-28 pb-8 text-center">
        <div className="mb-6">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute top-0 bottom-24 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className="px-2 py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-3xl"
              placeholder="Search for colleges..."
              value={searchTerm}
              onChange={handleSearch}
            />
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="py-12">
                </div>
                </div>
          </div>
        </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              colleges?.map((college) => (
                <CollegeCard key={college.id} college={college} />
              ))
            )}
          </div>
        </div>
        </div>
      
      </div>
      </div>
  )
}

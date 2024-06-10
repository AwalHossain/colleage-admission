import { useState } from "react";
import { useQuery } from "react-query";
import CollegeCard from "../components/CollegeCard";
import { fetchColleges } from "../services/collegeService";
import SearchBar from "./SearchBar";

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: colleges, isLoading } = useQuery("colleges", fetchColleges);

  return (
    <div className="bg-gray-100">
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center filter "
          style={{
            backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.5), rgba(44, 62, 80, 0.5)),url(${"https://i.ibb.co/9swRcdR/university-6699377-1280.jpg"})`,
            height: "550px",
            backgroundSize: "cover",
            backgroundPosition: "center",

            width: "100%",
          }}
        />

        {/* Search */}
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-60 pb-8 text-center">
            <div className="mb-6">
              <SearchBar />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                colleges.slice(0,3)?.map((college) => (
                  <CollegeCard key={college.id} college={college} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

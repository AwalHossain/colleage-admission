import { useState } from "react";
import { useQuery } from "react-query";
import ImageGallery from "../components/ImageGallery";
import ResearchPapers from "../components/ResearchPapers";
import Reviews from "../components/Review";
import { fetchColleges } from "../services/collegeService";
import Hero from "./Hero";
const Home = () => {
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
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">



          {/* {searchTerm && filteredColleges?.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredColleges.map((college) => (
                <CollegeCard key={college.id} college={college} />
              ))}
            </div>
          )} */}

          <ImageGallery />
          <ResearchPapers />
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default Home;

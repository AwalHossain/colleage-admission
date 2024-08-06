import { useQuery } from 'react-query';
import CollegeCard from '../components/CollegeCard';
import { Spinner } from '../lib/loading';
import { fetchColleges } from '../services/collegeService';

const Colleges = () => {
  const { data: colleges, isLoading } = useQuery('colleges', fetchColleges);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-6">
            All Colleges
          </h2>
          {isLoading ? (
            <Spinner className="middle" />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {colleges?.map((college) => (
                <CollegeCard key={college.id} college={college} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Colleges;

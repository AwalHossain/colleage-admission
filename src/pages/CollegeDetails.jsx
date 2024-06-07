import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchCollegeDetails } from '../services/collegeService';

const CollegeDetails = () => {
  const { collegeId } = useParams();
  const { data: college, isLoading } = useQuery(['collegeDetails', collegeId], () =>
    fetchCollegeDetails(collegeId)
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isLoading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : (
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-8">
              {college.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <img
                  src={college.image}
                  alt={college.name}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">About</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">{college.description}</p>

                <div className="mt-8">
                  <h3 className="text-2xl font-semibold text-gray-900">Admission Process</h3>
                  <ul className="mt-4 list-disc pl-5 text-gray-600 space-y-2">
                    {college.admissionProcess.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-semibold text-gray-900">Events</h3>
                  <ul className="mt-4 list-disc pl-5 text-gray-600 space-y-2">
                    {college.events.map((event, index) => (
                      <li key={index}>{event}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-semibold text-gray-900">Sports</h3>
                  <ul className="mt-4 list-disc pl-5 text-gray-600 space-y-2">
                    {college.sports.map((sport, index) => (
                      <li key={index}>{sport}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegeDetails;

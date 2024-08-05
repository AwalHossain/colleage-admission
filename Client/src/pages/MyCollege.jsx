import { useState } from 'react';
import { useQuery } from 'react-query';
import useScrollToTop from '../helpers/scrollToTop';
import { Spinner } from '../lib/loading';
import { getAdmissions } from '../services/admissionService';
import MyCollegeList from './MyCollegeList';

const colleges = [
  {
    id: 1,
    name: 'Harvard University',
    rating: 4.8,
    image:  "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/university-6699377_1280.jpg",
  },
  {
    id: 2,
    name: 'Stanford University',
    rating: 4.7,
    image: "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/casey-olsen-NlFyPKxXORo-unsplash.jpg",
  },
  // Add more college data as needed
];

const MyCollege = () => {
  const [collegeData, setCollegeData] = useState([]);
  useScrollToTop();

  const {data,isLoading} = useQuery("admission", getAdmissions, {
    onSuccess: (data) => {
      console.log(data.data, "data from admission");
      setCollegeData(data.data?.data);
    },
    
  })

  let content = null;

  if (isLoading) {
    content = <Spinner className="middle" />;
  } else if(collegeData.length === 0) {
    content = <p className="text-center">No colleges found</p>;
  }else if(collegeData.length > 0) {
    content = collegeData.map((college) => (
      <MyCollegeList key={college._id} college={college} /> 
    ));
  }


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-5 justify-items-center my-8">
    {
      content
    }

    </div>
  );
};
export default MyCollege;
import { StarIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import Image from "./Image";
const CollegeCard = ({ college }) => {
  console.log(college, "college form each");
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image
        className="h-48 w-full object-cover"
        src={college.image}
        alt={college.name}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{college.name}</h3>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`h-5 w-5 ${
                i < college.rating ? "text-yellow-400" : "text-gray-300"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Admission Date: {college.admissionDate}
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Research: {college.researchCount}
        </p>
        <div className="mt-4">
          <Link
            to={`/colleges/${college.id}`}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;

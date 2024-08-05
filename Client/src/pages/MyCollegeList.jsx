import Image from "../components/Image";
import PostReview from "../components/review/PostReview";
import { Dialog, DialogTrigger } from "../components/ui/dialog";

export default function MyCollegeList({ id, college }) {
  console.log(college.college.image, "college image data");
  return (

      <div key={id} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 w-full items-center bg-[#d7d9df] p-5">
        <div className="w-[60px] h-[60px] md:w-[90px] md:h-auto mx-auto">
          <Image src={college.college.image} className="object-fill" alt="" />
        </div>
        <div className="mx-auto md:block">
          <h2 className="text-[13px] md:text-xl font-semibold">
            {college.college.name}
          </h2>
          <p className="text-xs md:text-sm ">{college.name}</p>
        </div>
        <div className=" justify-center items-center space-x-1 hidden sm:flex">
          {Array.from({ length: Number(college.college.rating) }, (_, index) => (
            <svg
              key={index}
              className="h-4 w-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="mx-auto hidden lg:block">
          <span className="tex-xl font-semibold">{college.subject}</span>
        </div>
        <div className="ml-auto sm:mx-auto ">
          {

              <Dialog>
                <DialogTrigger className="bg-green-500 hover:bg-green-700 text-white text-xs md:text-md font-semibold md:font-bold py-2 px-4 rounded">Add Review</DialogTrigger>
                <PostReview collegeId={college.college._id} />
              </Dialog>

          }
        </div>
      </div>
  );
}

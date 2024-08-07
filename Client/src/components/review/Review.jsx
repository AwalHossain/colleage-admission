import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StarIcon } from "@heroicons/react/solid";
import { useQuery } from "react-query";
import { fetchReviews } from "../../services/reviewService";

const Reviews = () => {
  const { data, isLoading } = useQuery("reviews", fetchReviews);
  const reviews = data?.data;

  return (
    <div className="mt-12 bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-8">
          What Our Students Say
        </h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {isLoading ? (
              <p>Loading reviews...</p>
            ) : (
              reviews?.map((review) => (
                <CarouselItem
                  key={review.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
                    <div className="p-6 flex-grow">
                      <div className="flex items-center mb-4">
                        <img
                          className="h-12 w-12 rounded-full object-cover mr-4"
                          src={
                            review.user?.photoURL ||
                            "https://i.ibb.co/SX0CJQ7/blank-profile-picture-973460-1280.png"
                          }
                          alt={`${review.user.name}'s avatar`}
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {review.user.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {review.college.name}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 line-clamp-3">"{review.content}"</p>
                    </div>
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`h-5 w-5 ${
                                i < review.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {review.rating} out of 5
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))
            )}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;

import { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { postReview } from "../../services/reviewService";
import { Button } from "../ui/button";
import { DialogContent, DialogFooter } from "../ui/dialog";
import StarRating from "./StarRating";
export default function PostReview({collegeId}) {
   const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(0);
  const handleRatingChange = (rate) => {
    setRating(rate);
    // other logic
  };


  const mutation = useMutation(postReview , {
    onSuccess: () => {
        toast.success("Review Added Successfully fuck");
        },
    onError: (error) => {
        if (error && 'status' in error && error.status === 401) {
            toast.error("You're not authorized! login to continue");
        } else if (error && 'data' in error && error.data.message) {
            // Handle specific error messages from the server
            toast.error(error.data.message);
        } else {
            // Handle general or unknown errors
            toast.error("An unknown error occurred");
        }
        },
  })

  const {isLoading, error,data} = mutation;


  const hanldSubmit = async () => {

    if (rating === 0) return toast.error("Please rate the book");

    const data = {
      rating: rating,
    content: reviewText,
    collegeId
    };
    console.log(data, "data from post review");
    mutation.mutate(data);
    if (data?.data) {
      toast.success("Review Added Successfully");

    }
  };

  function handleError(error) {
    if (error && 'status' in error && error.status === 401) {
      toast.error("You're not authorized! login to continue");
    } else if (error && 'data' in error && error.data.message) {
      // Handle specific error messages from the server
      toast.error(error.data.message);
    } else {
      // Handle general or unknown errors
      toast.error("An unknown error occurred");
    }
  }

//   useEffect(() => {
    console.log( "error form hovercontent");

    // if (error) handleError(error);

//   }, [error]);
  return (
  <DialogContent>

          <div className="flex flex-col space-y-2 items-center justify-center">
            <StarRating initialRating={0} handleRatingChange={handleRatingChange} />
            <p>Rate this Book</p>
          </div>
            {/* Write review */}
            <textarea
        className="mt-4 p-2 w-full h-32 border rounded-md outline-none text-gray-800 resize-none resize-y"
        placeholder="Write your review here..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <div className="grid gap-4 py-4"></div>
      <DialogFooter>
        <Button type="submit" onClick={hanldSubmit}>
          {isLoading ? "Loading..." : "Submit"}
        </Button>
      </DialogFooter>
  </DialogContent>
  )
}

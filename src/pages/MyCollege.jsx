import { StarIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { fetchMyColleges, submitReview } from '../services/collegeService'


const MyCollege = () => {
 const [review, setReview] = useState('')
 const [rating, setRating] = useState(0)

 const { data: college, isLoading } = useQuery('myCollege', fetchMyColleges)
 const { mutate: submitReviewMutation } = useMutation(submitReview)

 const handleReviewChange = (e) => {
   setReview(e.target.value)
 }

 const handleRatingChange = (value) => {
   setRating(value)
 }

 const handleSubmitReview = () => {
   submitReviewMutation({ collegeId: college.id, review, rating })
   setReview('')
   setRating(0)
 }

 return (
   <div className="bg-gray-100">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="py-12">
         {isLoading ? (
           <p>Loading...</p>
         ) : (
           <div>
             <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
               {college.name}
             </h2>
             <div className="mt-6">
               <img
                 src={college.image}
                 alt={college.name}
                 className="w-full h-auto object-cover rounded-lg"
               />
             </div>
             <div className="mt-6">
               <h3 className="text-xl font-semibold text-gray-900">About</h3>
               <p className="text-gray-500">{college.description}</p>
             </div>
             <div className="mt-6">
               <h3 className="text-xl font-semibold text-gray-900">Leave a Review</h3>
               <div className="mt-4">
                 <div>
                   <div className="flex items-center">
                     {[...Array(5)].map((_, i) => (
                       <button
                         key={i}
                         type="button"
                         onClick={() => handleRatingChange(i + 1)}
                         className={`${
                           i < rating ? 'text-yellow-400' : 'text-gray-300'
                         } h-5 w-5 flex-shrink-0`}
                       >
                         <span className="sr-only">{i + 1} star{i !== 0 ? 's' : ''}</span>
                         <StarIcon className="h-5 w-5" aria-hidden="true" />
                       </button>
                     ))}
                   </div>
                 </div>
                 <div className="mt-2">
                   <textarea
                     rows={4}
                     name="review"
                     id="review"
                     className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                     value={review}
                     onChange={handleReviewChange}
                     placeholder="Write your review here..."
                   />
                 </div>
                 <div className="mt-4">
                   <button
                     type="button"
                     onClick={handleSubmitReview}
                     className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                   >
                     Submit Review
                   </button>
                 </div>
               </div>
             </div>
           </div>
         )}
       </div>
     </div>
   </div>
 )
}

export default MyCollege
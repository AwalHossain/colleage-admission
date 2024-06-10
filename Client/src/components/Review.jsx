import { StarIcon } from '@heroicons/react/solid'
import { useQuery } from 'react-query'
import { fetchReviews } from '../services/reviewService'

const Reviews = () => {
 const { data: reviews, isLoading } = useQuery('reviews', fetchReviews)

 return (
   <div className="mt-12">
     <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
       Reviews
     </h2>
     <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
       {isLoading ? (
         <p>Loading...</p>
       ) : (
         reviews?.map((review) => (
           <div key={review.id} className="bg-white shadow-md rounded-lg overflow-hidden">
             <div className="p-4">
               <div className="flex items-center">
                 <h3 className="text-lg font-semibold text-gray-900">{review.author}</h3>
                 <div className="ml-2 flex items-center">
                   {[...Array(5)].map((_, i) => (
                     <StarIcon
                       key={i}
                       className={`h-5 w-5 ${
                         i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                       }`}
                       aria-hidden="true"
                     />
                   ))}
                 </div>
               </div>
               <p className="mt-2 text-sm text-gray-500">{review.content}</p>
             </div>
           </div>
         ))
       )}
     </div>
   </div>
 )
}

export default Reviews
/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';

const NotFound = () => {
 return (
   <div className="bg-gray-100 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
     <div className="max-w-md mx-auto">
       <div className="text-center">
         <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
           404
         </h2>
         <p className="mt-2 text-sm text-gray-500">
           Oops! The page you're looking for doesn't exist.
         </p>
         <div className="mt-6">
           <Link
             to="/"
             className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
           >
             Go back home
           </Link>
         </div>
       </div>
     </div>
   </div>
 )
}

export default NotFound;
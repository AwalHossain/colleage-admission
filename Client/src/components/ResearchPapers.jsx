import { useQuery } from 'react-query'
import { fetchResearchPapers } from '../services/researchService'

const ResearchPapers = () => {
 const { data: papers, isLoading } = useQuery('researchPapers', fetchResearchPapers)

 return (
   <div className="mt-12">
     <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
       Research Papers
     </h2>
     <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
       {isLoading ? (
         <p>Loading...</p>
       ) : (
         papers?.map((paper) => (
           <div key={paper.id} className="bg-white shadow-md rounded-lg overflow-hidden">
             <div className="p-4">
               <h3 className="text-lg font-semibold text-gray-900">{paper.title}</h3>
               <p className="mt-2 text-sm text-gray-500">{paper.authors}</p>
               <a
                 href={paper.url}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="mt-4 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
               >
                 Read Paper
               </a>
             </div>
           </div>
         ))
       )}
     </div>
   </div>
 )
}

export default ResearchPapers
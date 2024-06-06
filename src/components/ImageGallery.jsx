import { useQuery } from 'react-query'
import { fetchImages } from '../services/imageService'

const ImageGallery = () => {
 const { data: images, isLoading } = useQuery('images', fetchImages)

 return (
   <div className="mt-12">
     <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
       College Image Gallery
     </h2>
     <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       {isLoading ? (
         <p>Loading...</p>
       ) : (
         images?.map((image) => (
           <div key={image.id} className="overflow-hidden rounded-lg">
             <img
               src={image.url}
               alt={image.description}
               className="h-48 w-full object-cover"
             />
           </div>
         ))
       )}
     </div>
   </div>
 )
}

export default ImageGallery;
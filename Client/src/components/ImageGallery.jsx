import { XIcon } from 'lucide-react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchImages } from '../services/imageService';
import Image from './Image';

const ImageGallery = () => {
  const { data: images, isLoading } = useQuery('images', fetchImages)
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-12">
      <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Gallery
      </h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          images.slice(0,8)?.map((image) => (
            <div key={image.id} className="relative overflow-hidden rounded-lg group cursor-pointer" onClick={() => handleImageClick(image)}>
              <Image
                src={image.url}
                alt={image.description}
                className="h-48 w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center p-4">{image.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle ">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <img
                      src={selectedImage.url}
                      alt={selectedImage.description}
                      className="max-h-[500px] w-full object-contain mx-auto text-center"
                      loading='lazy'
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0">
                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={closeModal}>
                  <XIcon className="h-5 w-5 " />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageGallery;
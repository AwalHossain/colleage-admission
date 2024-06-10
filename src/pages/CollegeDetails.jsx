
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Image from '../components/Image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import { fetchCollegeDetails } from '../services/collegeService';

const sportsImage =  [
  "https://video-gka8dxaqb0babzct.z01.azurefd.net/sports/braden-collum-ttbCwN_mWic-unsplash.jpg",
"https://video-gka8dxaqb0babzct.z01.azurefd.net/sports/istockphoto-1278976828-1024x1024.jpg",
"https://video-gka8dxaqb0babzct.z01.azurefd.net/sports/jeffrey-f-lin-CUK8i7lr3l8-unsplash.jpg",
"https://video-gka8dxaqb0babzct.z01.azurefd.net/sports/philippa-rose-tite-93YYkxujyus-unsplash.jpg",
"https://video-gka8dxaqb0babzct.z01.azurefd.net/sports/philippa-rose-tite-X1zuCXKwCy8-unsplash.jpg",
"https://video-gka8dxaqb0babzct.z01.azurefd.net/sports/riley-mccullough-iezcEpGuYdE-unsplash.jpg"
      
 ]

const collegeImage = [
  "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/timothy-kassis-Qj-5RbUb1UE-unsplash.jpg",
"https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/university-6699377_1280.jpg",
"https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/vadim-sherbakov-d6ebY-faOO0-unsplash.jpg"
]

const eventImages = [
  "https://video-gka8dxaqb0babzct.z01.azurefd.net/events/istockphoto-1340342476-1024x1024.jpg",
  "https://video-gka8dxaqb0babzct.z01.azurefd.net/events/istockphoto-1353372838-1024x1024.jpg",
  "https://video-gka8dxaqb0babzct.z01.azurefd.net/events/istockphoto-1368496779-1024x1024.jpg",
  "https://video-gka8dxaqb0babzct.z01.azurefd.net/events/istockphoto-1456729829-1024x1024.jpg",
  "https://video-gka8dxaqb0babzct.z01.azurefd.net/events/istockphoto-1739895622-1024x1024.jpg",
  "https://video-gka8dxaqb0babzct.z01.azurefd.net/events/istockphoto-597957846-1024x1024.jpg",
  "https://video-gka8dxaqb0babzct.z01.azurefd.net/events/pang-yuhao-_kd5cxwZOK4-unsplash.jpg",

];

const CollegeDetails = () => {
  const { collegeId } = useParams();
  const { data: college, isLoading } = useQuery(['collegeDetails', collegeId], () =>
    fetchCollegeDetails(collegeId),{
      onSuccess: (data) => {
        setMainImage(data.image);
      }
    }
  );
  const [mainImage, setMainImage] = useState(college?.image || '');

  return (
    <div className="min-h-screen">
      {isLoading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <div className=''>
          <div className="relative">
            <Image
              src={mainImage}
              alt={college.name}
              className="w-full md:h-[500px] xl:h-[550px] object-cover"
            />
            <div className="absolute -bottom-32 left-0 right-0 flex justify-center gap-4 mb-4">
              {collegeImage.map((image, index) =>{
                console.log(image, "image");
                return(
                  <img
                  key={index}
                  src={image}
                  alt={`${college.name} ${index}`}
                  className="h-24 w-auto cursor-pointer rounded-md"
                  onClick={() => setMainImage(image)}
                  loading='lazy'
                />
                )
              })}
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 pt-32">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-8 text-center">
              {college.name}
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">{college.description}</p>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Admission Process</h3>
              <Accordion type="single" collapsible>
                {college.admissionProcess.map((step, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{`Step ${index + 1}`}</AccordionTrigger>
                    <AccordionContent>{step}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Events</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {eventImages.map((event, index) => (
                  <div key={index} className="relative group">
                    <Image
                      src={event}
                      alt={event}
                      className="w-full h-48 object-cover rounded-md"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-white text-lg font-semibold">{college.events[index]}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 ">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sports</h3>
              <Carousel className="gap-4 px-8">
                <CarouselContent>
                {sportsImage.map((sport, index) => (
                  <CarouselItem key={index} className="w-full md:basis-1/2 lg:basis-1/3">
                    <div className="relative">
                      <Image
                        src={sport}
                        alt={sport}
                        className="w-full h-96 object-cover rounded-md"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 rounded-b-md py-2 px-4">
                        <h4 className="text-white text-lg font-semibold">{college.sports[index]}</h4>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollegeDetails;
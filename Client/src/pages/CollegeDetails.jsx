
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import SportsCarousel from '../components/carousel/SportsCarousel';
import Image from '../components/Image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import useScrollToTop from '../helpers/scrollToTop';
import { fetchCollegeDetails } from '../services/collegeService';

const sportsImage =  [
  "https://i.ibb.co/4VC0PPm/braden-collum-ttb-Cw-N-m-Wic-unsplash-1-11zon.jpg",
  "https://i.ibb.co/gWygPKn/istockphoto-1278976828-1024x1024-2-11zon.jpg",
  "https://i.ibb.co/6mKqfvr/jeffrey-f-lin-CUK8i7lr3l8-unsplash-3-11zon.jpg",
  "https://i.ibb.co/Bz6Pdsk/philippa-rose-tite-93-YYkxujyus-unsplash-4-11zon.jpg",
  "https://i.ibb.co/fnHK1j6/philippa-rose-tite-X1zu-CXKw-Cy8-unsplash-5-11zon.jpg",
  "https://i.ibb.co/m6kwjTn/riley-mccullough-iezc-Ep-Gu-Yd-E-unsplash-6-11zon.jpg"
];

const collegeImage = [
  "https://i.ibb.co/Vj51Rvg/michael-marsh-U0d-BV-Qei-Yk-unsplash-19-11zon.jpg",
  "https://i.ibb.co/TbdrwVQ/istockphoto-475315086-1024x1024-11-11zon.jpg",
  "https://i.ibb.co/1dHCbLM/istockphoto-1367931228-1024x1024-12-11zon.jpg",
  "https://i.ibb.co/pyJtB05/jane-last-k60-YOEj-B75k-unsplash-13-11zon.jpg",
  "https://i.ibb.co/ZKLWRpN/jean-luc-benazet-VJ4-N18-Lq2-JQ-unsplash-14-11zon.jpg",
  "https://i.ibb.co/K714HhJ/keming-tan-x-Myg-EKgsnes-unsplash-15-11zon.jpg",
  "https://i.ibb.co/vQc20fx/malothu-santhosh-9jcb-VG-Dzh8-unsplash-16-11zon.jpg",
  "https://i.ibb.co/fN6jGW1/manohar-manu-h-Ns-YIj-Ue-XJw-unsplash-17-11zon.jpg",
  "https://i.ibb.co/MCK15Wy/m-Gv-Pce-Vqbxm4-unsplash-18-11zon.jpg",
  "https://i.ibb.co/yYjY5Vv/Dhaka-UNI-02-6-11zon.jpg",
  "https://i.ibb.co/dgySBLH/Dhaka-UNI-03-7-11zon.jpg",
  "https://i.ibb.co/BfzpnjJ/divyansh-jain-BA1r4-Rf-z-M-unsplash-8-11zon.jpg",
  "https://i.ibb.co/mCn870d/dora-dalberto-ORz-Zt-Y2i50k-unsplash-9-11zon.jpg",
  "https://i.ibb.co/sCBN4Bq/einar-h-reynis-YW1i-xi8dt8-unsplash-10-11zon.jpg",
  "https://i.ibb.co/9WcTZQ3/arun-chandran-x-OSMdivrc-FM-unsplash-1-11zon.jpg",
  "https://i.ibb.co/NTvf5RG/casey-olsen-Nl-Fy-PKx-XORo-unsplash-2-11zon.jpg",
  "https://i.ibb.co/Gntv8w2/chenyu-guan-Xgcd-AE1-Gqlg-unsplash-3-11zon.jpg",
  "https://i.ibb.co/09cYFBC/darya-tryfanava-d55fh-Ar-DES0-unsplash-4-11zon.jpg",
  "https://i.ibb.co/87zr2Xq/deepak-shukla-f-BIqryv8-AL4-unsplash-5-11zon.jpg"
];


const eventImages = [
  "https://i.ibb.co/Px4H0tm/istockphoto-597957846-1024x1024.jpg",
  "https://i.ibb.co/YT9LvYK/istockphoto-597958786-1024x1024.jpg",
  "https://i.ibb.co/FK2QC0W/istockphoto-1368496779-1024x1024.jpg",
  "https://i.ibb.co/zxgbRHh/istockphoto-1456729829-1024x1024.jpg",
  "https://i.ibb.co/gTb73wQ/pang-yuhao-kd5cxw-ZOK4-unsplash.jpg",
  "https://i.ibb.co/smh1cJw/rut-miit-YIdk-Wyn-Jd-Sk-unsplash.jpg",
  "https://i.ibb.co/6DYkC5m/university-105709-1280.jpg"
];

// Get 3 random images from collegeImage array
const getRandomImages = () => {
  let images = [];
  while(images.length < 3){
    let r = Math.floor(Math.random() * collegeImage.length);
    if(images.indexOf(collegeImage[r]) === -1) images.push(collegeImage[r]);
  }
  return images;
}

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

  const randomImages = getRandomImages();

  useScrollToTop();

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
              {randomImages.map((image, index) =>{
                console.log(image, "image");
                return(
                  <img
                  key={index}
                  src={image}
                  alt={`${college.name} ${index}`}
                  className="h-8 sm:h-24 w-auto cursor-pointer rounded-md"
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
                      className="w-full h-32 sm:h-48 object-cover rounded-md"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-white text-sm sm:text-lg font-semibold">{college.events[index]}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 ">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sports</h3>
                <SportsCarousel sportsImage={sportsImage} college={college} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollegeDetails;
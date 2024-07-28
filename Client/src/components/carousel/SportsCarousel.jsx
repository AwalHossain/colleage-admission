import Image from "../Image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export default function SportsCarousel({sportsImage, college}) {
    return (
        <Carousel className="gap-4 px-8">
            <CarouselContent>
                {sportsImage.map((sport, index) => (
                              <CarouselItem
                              key={index}
                              className="basis-1/3 sm:basis-1/4 md:basis-1/4 lg:basis-1/5  xl:basis-1/5 max-w-[48rem] mx-auto"
                              style={{
                                fontFamily: "Montserrat,serif",
                              }}
                              >
                        <div className="relative  md:max-w-[220px] h-[200px] md:h-[270px] lg:h-[300px] transform hover:scale-105 transition-transform duration-200 ease-in-out mx-auto">
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
    )
}

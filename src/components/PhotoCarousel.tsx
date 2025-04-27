
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  {
    url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    alt: "NeuroVida Building 1"
  },
  {
    url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    alt: "NeuroVida Building 2"
  }
];

const PhotoCarousel = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 my-8">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-lg">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default PhotoCarousel;

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { cn } from "../lib/utils";

export default function Image({src, className, alt}) {
  return (
    <>
      <LazyLoadImage
        alt={alt}
        className={cn("gallery-img", className)}
        effect="blur"
        src={src}
        width="100%"
      />
    </>
  );
}
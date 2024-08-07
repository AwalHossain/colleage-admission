import { Star } from "lucide-react";
import { useState } from "react";



const StarRating= ({initialRating=0,handleRatingChange}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (ratingValue) => {
    setHoverRating(ratingValue);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (ratingValue) => {
    setRating(ratingValue);

    handleRatingChange(ratingValue);
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          size={28}
          fill={value <= (hoverRating || rating) ? "#e87400" : "none"}
          stroke={value <= (hoverRating || rating) ? "#e87400" : "#333"}
          onMouseEnter={() => handleMouseEnter(value)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(value)}
          style={{ cursor: "pointer" }}
        />
      ))}
    </div>
  );
};

export default StarRating;

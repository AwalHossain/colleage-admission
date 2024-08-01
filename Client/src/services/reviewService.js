import axios from "axios";
import { toast } from "react-toastify";
import { BASE_API_URL } from "../config";
import { getFromLocalStorage } from "../lib/local-storage";

const mockReviews = [
  {
    id: 1,
    author: "John Doe",
    rating: 4,
    content:
      "Great university with excellent facilities and supportive faculty.",
  },
  {
    id: 2,
    author: "Jane Smith",
    rating: 5,
    content:
      "Highly recommended for its world-class education and vibrant campus life.",
  },
  {
    id: 3,
    author: "Michael Johnson",
    rating: 3,
    content:
      "The admission process could be more streamlined, but overall a decent experience.",
  },
  // Add more mock reviews as needed
  {
    id: 4,
    author: "Emily Davis",
    rating: 4,
    content:
      "The research opportunities are unparalleled, and the professors are top-notch.",
  },
];

export const postReview = async (review) => {
  const token = getFromLocalStorage("token");
  try {
    const response = await axios.post(`${BASE_API_URL}/review/post`, review, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
    toast.error("Error: " + "Something went wrong");
    return err.response;
  }
};

export const fetchReviews = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/review/all`);
    console.log(response, "from fetchReview");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

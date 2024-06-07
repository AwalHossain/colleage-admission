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

export const fetchReviews = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockReviews;
};

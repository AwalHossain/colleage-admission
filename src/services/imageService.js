const mockImages = [
  {
    id: 1,
    url: "https://via.placeholder.com/500",
    description: "Graduation Ceremony",
  },
  {
    id: 2,
    url: "https://via.placeholder.com/500",
    description: "Student Life",
  },
  {
    id: 3,
    url: "https://via.placeholder.com/500",
    description: "Campus Tour",
  },
  // Add more mock images as needed
  {
    id: 4,
    url: "https://via.placeholder.com/500",
    description: "Student Housing",
  },
  {
    id: 5,
    url: "https://via.placeholder.com/500",
    description: "Library",
  },
  {
    id: 6,
    url: "https://via.placeholder.com/500",
    description: "Sports Facilities",
  },
  {
    id: 7,
    url: "https://via.placeholder.com/500",
    description: "Dining Hall",
  },
  {
    id: 8,
    url: "https://via.placeholder.com/500",
    description: "Classroom",
  },
  {
    id: 9,
    url: "https://via.placeholder.com/500",
    description: "Laboratory",
  },
  {
    id: 10,
    url: "https://via.placeholder.com/500",
    description: "Campus Map",
  },
  {
    id: 11,
    url: "https://via.placeholder.com/500",
    description: "Student Center",
  },
  {
    id: 12,
    url: "https://via.placeholder.com/500",
    description: "Bookstore",
  },
  {
    id: 13,
    url: "https://via.placeholder.com/500",
    description: "Student Clubs",
  },
  {
    id: 14,
    url: "https://via.placeholder.com/500",
    description: "Academic Building",
  },
  {
    id: 18,
    url: "https://via.placeholder.com/500",
    description: "Research Center",
  },
  {
    id: 19,
    url: "https://via.placeholder.com/500",
    description: "Student Services",
  },
  {
    id: 20,
    url: "https://via.placeholder.com/500",
    description: "Health Center",
  },
  {
    id: 21,
    url: "https://via.placeholder.com/500",
    description: "Career Services",
  },
  {
    id: 22,
    url: "https://via.placeholder.com/500",
    description: "Alumni Association",
  },
  {
    id: 23,
    url: "https://via.placeholder.com/500",
    description: "International Students",
  },
];

export const fetchImages = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockImages;
};

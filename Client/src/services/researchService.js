// src/services/researchService.js
const mockResearchPapers = [
  {
    id: 1,
    title: "Advancements in Quantum Computing",
    authors: "John Doe, Jane Smith",
    url: "https://example.com/research-paper-1",
  },
  {
    id: 2,
    title: "Sustainable Energy Solutions for Urban Areas",
    authors: "Michael Johnson, Emily Davis",
    url: "https://example.com/research-paper-2",
  },
  {
    id: 3,
    title: "The Impact of Social Media on Mental Health",
    authors: "David Wilson, Sophia Thompson",
    url: "https://example.com/research-paper-3",
  },
  // Add more mock research papers as needed
  {
    id: 4,
    title: "Machine Learning Algorithms for Predictive Analytics",
    authors: "Alex Brown, Sarah Miller",
    url: "https://example.com/research-paper-4",
  },
  {
    id: 5,
    title: "Advances in Biomedical Engineering",
    authors: "Chris Lee, Olivia Moore",
    url: "https://example.com/research-paper-5",
  },
  {
    id: 6,
    title: "The Future of Artificial Intelligence",
    authors: "Daniel White, Emma Johnson",
    url: "https://example.com/research-paper-6",
  },
  {
    id: 7,
    title: "Climate Change and Global Sustainability",
    authors: "James Davis, Lily Wilson",
    url: "https://example.com/research-paper-7",
  },
  {
    id: 8,
    title: "Innovations in Space Exploration",
    authors: "Sophia Brown, Michael Lee",
    url: "https://example.com/research-paper-8",
  },
  {
    id: 9,
    title: "The Role of Robotics in Industry 4.0",
    authors: "Olivia Moore, Alex Johnson",
    url: "https://example.com/research-paper-9",
  },
  {
    id: 10,
    title: "Cybersecurity Threats and Countermeasures",
    authors: "Emma White, Daniel Miller",
    url: "https://example.com/research-paper-10",
  },
  {
    id: 11,
    title: "Advancements in Data Science and Analytics",
    authors: "Lily Smith, James Wilson",
    url: "https://example.com/research-paper-11",
  },
  {
    id: 12,
    title: "The Future of Work in the Digital Age",
    authors: "Michael Johnson, Emily Davis",
    url: "https://example.com/research-paper-12",
  },
  {
    id: 13,
    title: "Health Informatics and Telemedicine",
    authors: "John Doe, Jane Smith",
    url: "https://example.com/research-paper-13",
  },
  {
    id: 14,
    title: "Advances in Nanotechnology and Materials Science",
    authors: "David Wilson, Sophia Thompson",
    url: "https://example.com/research-paper-14",
  },
];

export const fetchResearchPapers = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockResearchPapers;
};

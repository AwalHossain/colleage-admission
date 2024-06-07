const mockColleges = [
  {
    id: 1,
    name: "Harvard University",
    image: "https://via.placeholder.com/500",
    rating: 5,
    admissionDate: "2023-09-01",
    researchCount: 1200,
    description:
      "Harvard University is a private Ivy League research university...",
    admissionProcess: [
      "Step 1: Submit application form and required documents",
      "Step 2: Take the entrance exam",
      "Step 3: Attend the interview",
      "Step 4: Wait for the admission decision",
    ],
    events: ["Annual Science Fair", "Cultural Festival", "Sports Tournament"],
    sports: ["Basketball", "Football", "Tennis", "Swimming"],
  },
  // Add more mock colleges as needed
  {
    id: 2,
    name: "Stanford University",
    image: "https://via.placeholder.com/500",
    rating: 4,
    admissionDate: "2023-09-01",
    researchCount: 1000,
    description:
      "Stanford University is a private research university in Stanford, California...",
    admissionProcess: [
      "Step 1: Submit application form and required documents",
      "Step 2: Take the entrance exam",
      "Step 3: Attend the interview",
      "Step 4: Wait for the admission decision",
    ],
    events: ["Annual Science Fair", "Cultural Festival", "Sports Tournament"],
    sports: ["Basketball", "Football", "Tennis", "Swimming"],
  },
  {
    id: 3,
    name: "Massachusetts Institute of Technology",
    image: "https://via.placeholder.com/500",
    rating: 4,
    admissionDate: "2023-09-01",
    researchCount: 800,
    description:
      "The Massachusetts Institute of Technology (MIT) is a private land-grant research university...",
    admissionProcess: [
      "Step 1: Submit application form and required documents",
      "Step 2: Take the entrance exam",
      "Step 3: Attend the interview",
      "Step 4: Wait for the admission decision",
    ],
    events: ["Annual Science Fair", "Cultural Festival", "Sports Tournament"],
    sports: ["Basketball", "Football", "Tennis", "Swimming"],
  },
  {
    id: 4,
    name: "California Institute of Technology",
    image: "https://via.placeholder.com/500",
    rating: 4,
    admissionDate: "2023-09-01",
    researchCount: 700,
    description:
      "The California Institute of Technology (Caltech) is a private research university in Pasadena, California...",
    admissionProcess: [
      "Step 1: Submit application form and required documents",
      "Step 2: Take the entrance exam",
      "Step 3: Attend the interview",
      "Step 4: Wait for the admission decision",
    ],
    events: ["Annual Science Fair", "Cultural Festival", "Sports Tournament"],
    sports: ["Basketball", "Football", "Tennis", "Swimming"],
  },
  {
    id: 5,
    name: "University of Chicago",
    image: "https://via.placeholder.com/500",
    rating: 4,
    admissionDate: "2023-09-01",
    researchCount: 600,
    description:
      "The University of Chicago is a private research university in Chicago, Illinois...",
    admissionProcess: [
      "Step 1: Submit application form and required documents",
      "Step 2: Take the entrance exam",
      "Step 3: Attend the interview",
      "Step 4: Wait for the admission decision",
    ],
    events: ["Annual Science Fair", "Cultural Festival", "Sports Tournament"],
    sports: ["Basketball", "Football", "Tennis", "Swimming"],
  },
  {
    id: 6,
    name: "Princeton University",
    image: "https://via.placeholder.com/500",
    rating: 4,
    admissionDate: "2023-09-01",
    researchCount: 500,
    description:
      "Princeton University is a private Ivy League research university in Princeton, New Jersey...",
    admissionProcess: [
      "Step 1: Submit application form and required documents",
      "Step 2: Take the entrance exam",
      "Step 3: Attend the interview",
      "Step 4: Wait for the admission decision",
    ],
    events: ["Annual Science Fair", "Cultural Festival", "Sports Tournament"],
    sports: ["Basketball", "Football", "Tennis", "Swimming"],
  },
  {
    id: 7,
    name: "Yale University",
    image: "https://via.placeholder.com/500",
    rating: 4,
    admissionDate: "2023-09-01",
    researchCount: 400,
    description:
      "Yale University is a private Ivy League research university in New Haven, Connecticut...",
    admissionProcess: [
      "Step 1: Submit application form and required documents",
      "Step 2: Take the entrance exam",
      "Step 3: Attend the interview",
      "Step 4: Wait for the admission decision",
    ],
    events: ["Annual Science Fair", "Cultural Festival", "Sports Tournament"],
    sports: ["Basketball", "Football", "Tennis", "Swimming"],
  },
  {
    id: 8,
    name: "Columbia University",
    image: "https://via.placeholder.com/500",
    rating: 4,
    admissionDate: "2023-09-01",
    researchCount: 300,
    description:
      "Columbia University is a private Ivy League research university in New York City...",
    admissionProcess: [
      "Step 1: Submit application form and required documents",
      "Step 2: Take the entrance exam",
      "Step 3: Attend the interview",
      "Step 4: Wait for the admission decision",
    ],
    events: ["Annual Science Fair", "Cultural Festival", "Sports Tournament"],
    sports: ["Basketball", "Football", "Tennis", "Swimming"],
  },
  {
    id: 9,
    name: "University of Pennsylvania",
    image: "https://via.placeholder.com/500",
    rating: 4,
    admissionDate: "2023-09-01",
    researchCount: 200,
    description:
      "The University of Pennsylvania (Penn or UPenn) is a private Ivy League research university in Philadelphia, Pennsylvania...",
    admissionProcess: [
      "Step 1: Submit application form and required documents",
      "Step 2: Take the entrance exam",
      "Step 3: Attend the interview",
      "Step 4: Wait for the admission decision",
    ],
    events: ["Annual Science Fair", "Cultural Festival", "Sports Tournament"],
    sports: ["Basketball", "Football", "Tennis", "Swimming"],
  },
];

export const fetchColleges = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockColleges;
};

export const fetchMyColleges = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockColleges.slice(0, 3);
};

export const fetchCollegeDetails = async (collegeId) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockColleges.find((college) => college.id === parseInt(collegeId));
};

export const submitReview = async ({ collegeId, review, rating }) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(
    `Submitted review for college ${collegeId}: ${review} (${rating} stars)`
  );
};

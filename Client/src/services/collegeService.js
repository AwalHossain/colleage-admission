// https://i.ibb.co/g7Ys0k2/divyansh-jain-BA1r4-Rf-z-M-unsplash.jpg
// https://i.ibb.co/4jcH38W/keming-tan-x-Myg-EKgsnes-unsplash.jpg
// https://i.ibb.co/K6BBtvQ/casey-olsen-Nl-Fy-PKx-XORo-unsplash.jpg
// https://i.ibb.co/WWrb8tW/porter-raab-gnj9vj-FRY-unsplash.jpg
// https://i.ibb.co/vkGwGH1/michael-marsh-U0d-BV-Qei-Yk-unsplash.jpg

import axios from "axios";
import { BASE_API_URL } from "../config";

// https://i.ibb.co/9swRcdR/university-6699377-1280.jpg

const mockColleges = [
  {
    id: 1,
    name: "Harvard University",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/university-6699377_1280.jpg",
    rating: 5,
    admissionDate: "2024-08-15",
    researchCount: 1200,
    description:
      "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. It was established in 1636 and is the oldest institution of higher education in the United States.",
    admissionProcess: [
      "Step 1: Submit the Common Application or Coalition Application, along with transcripts, test scores, and other required documents.",
      "Step 2: Take the SAT or ACT, and optionally, submit SAT Subject Test scores.",
      "Step 3: Participate in an alumni interview, if required.",
      "Step 4: Wait for the admission decision, which is typically released in late March or early April.",
    ],
    events: [
      "Regatta",
      "Arts Festival",
      "Student Film Festival",
      "Football Game",
      "Model United Nations",
      "Asian Relations Conference",
      "Hackathon",
      "Marathon Challenge",
    ],
    sports: [
      "Basketball",
      "Football",
      "Baseball",
      "Soccer",
      "Hockey",
      "Rowing",
      "Track and Field",
      "Swimming and Diving",
    ],
  },
  {
    id: 2,
    name: "Indian Institute of Technology Bombay",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/arun-chandran-xOSMdivrcFM-unsplash.jpg",
    rating: 4.5,
    admissionDate: "2024-07-01",
    researchCount: 850,
    description:
      "The Indian Institute of Technology Bombay (IIT Bombay) is a public technical university located in Powai, Mumbai, India. It is one of the oldest and most prestigious institutions for engineering education and research in India.",
    admissionProcess: [
      "Step 1: Qualify for the Joint Entrance Examination (JEE) Advanced.",
      "Step 2: Submit the online application form with required documents and application fee.",
      "Step 3: Participate in the counseling process and secure a seat based on JEE Advanced rank and category.",
      "Step 4: Complete the admission formalities and secure hostel accommodation.",
    ],
    events: [
      "Mood Indigo",
      "TechFest",
      "Lecture Series",
      "Marathon",
      "Entrepreneurship Summit",
      "TEDx",
      "Research Conclave",
      "Cultural Fests",
    ],
    sports: [
      "Cricket",
      "Football",
      "Basketball",
      "Badminton",
      "Tennis",
      "Squash",
      "Volleyball",
      "Athletics",
    ],
  },
  {
    id: 3,
    name: "University of Dhaka",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/Dhaka_UNI_02.avif",
    rating: 4.2,
    admissionDate: "2024-07-15",
    researchCount: 620,
    description:
      "The University of Dhaka is the oldest and highest-ranked university in Bangladesh. It was established in 1921 and is located in Dhaka, the capital city. It offers undergraduate and graduate degrees in various disciplines, including arts, sciences, business, and engineering.",
    admissionProcess: [
      "Step 1: Pass the Higher Secondary Certificate (HSC) or equivalent examination and secure the required GPA.",
      "Step 2: Apply online or submit the application form with required documents and fees.",
      "Step 3: Appear for the admission test and/or viva voce, if applicable.",
      "Step 4: Wait for the merit list and complete the admission formalities if selected.",
    ],
    events: [
      "Convocation Ceremony",
      "Freshers' Welcome",
      "Inter-University Sports",
      "Cultural Festival",
      "Job Fair",
      "Alumni Reunion",
      "Research Symposium",
      "Science Exhibition",
    ],
    sports: [
      "Cricket",
      "Football",
      "Basketball",
      "Volleyball",
      "Badminton",
      "Table Tennis",
      "Athletics",
      "Swimming",
    ],
  },
  {
    id: 4,
    name: "Stanford University",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/casey-olsen-NlFyPKxXORo-unsplash.jpg",
    rating: 5,
    admissionDate: "2024-08-01",
    researchCount: 1350,
    description:
      "Stanford University is a private research university located in Stanford, California. It is one of the most prestigious universities in the world, known for its academic excellence, entrepreneurial spirit, and innovative research.",
    admissionProcess: [
      "Step 1: Submit the Coalition Application or Common Application, along with transcripts, test scores, and other required documents.",
      "Step 2: Take the SAT or ACT, and optionally, submit SAT Subject Test scores.",
      "Step 3: Participate in the alumni interview process, if offered.",
      "Step 4: Wait for the admission decision, which is typically released in late March or early April.",
    ],
    events: [
      "Stanford Powwow",
      "Founders' Celebration",
      "Science in Service Lecture Series",
      "Entrepreneurship Week",
      "Stanford Film Festival",
      "Stanford Jazz Festival",
      "TedxStanford",
      "Hackathons",
    ],
    sports: [
      "Football",
      "Basketball",
      "Baseball",
      "Soccer",
      "Volleyball",
      "Tennis",
      "Golf",
      "Swimming and Diving",
    ],
  },
  {
    id: 5,
    name: "University of Cambridge",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/einar-h-reynis-YW1i_xi8dt8-unsplash.jpg",
    rating: 4.9,
    admissionDate: "2024-07-20",
    researchCount: 1100,
    description:
      "The University of Cambridge is a collegiate public research university in Cambridge, England. Founded in 1209, it is the second-oldest university in the English-speaking world and is regarded as one of the most prestigious universities globally.",
    admissionProcess: [
      "Step 1: Submit the online application form, along with transcripts, personal statement, and reference letters.",
      "Step 2: Take any required admissions tests or assessments for the chosen course.",
      "Step 3: Attend an interview, if shortlisted.",
      "Step 4: Wait for the admission decision, typically released in late January or early February.",
    ],
    events: [
      "Cambridge University May Ball",
      "Cambridge Union Society Debates",
      "Entrepreneurs Society Events",
      "Cambridge University Theatre Society Productions",
      "Science Festival",
      "Literary Festival",
      "Alumni Reunion",
      "Hackathons",
    ],
    sports: [
      "Rowing",
      "Cricket",
      "Rugby Union",
      "Football",
      "Hockey",
      "Tennis",
      "Badminton",
      "Athletics",
    ],
  },
  {
    id: 6,
    name: "University of Chittagong",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/Dhaka_UNI_03.avif",
    rating: 3.8,
    admissionDate: "2024-07-10",
    researchCount: 450,
    description:
      "The University of Chittagong is a public university located in Chittagong, Bangladesh. Established in 1966, it is one of the oldest and most prestigious universities in the country, offering a wide range of undergraduate and graduate programs.",
    admissionProcess: [
      "Step 1: Pass the Higher Secondary Certificate (HSC) or equivalent examination and secure the required GPA.",
      "Step 2: Apply online or submit the application form with required documents and fees.",
      "Step 3: Appear for the admission test and/or viva voce, if applicable.",
      "Step 4: Wait for the merit list and complete the admission formalities if selected.",
    ],
    events: [
      "Convocation Ceremony",
      "Freshers' Welcome",
      "Inter-University Sports",
      "Cultural Festival",
      "Career Fair",
      "Alumni Reunion",
      "Research Symposium",
      "Science Exhibition",
    ],
    sports: [
      "Cricket",
      "Football",
      "Basketball",
      "Volleyball",
      "Badminton",
      "Table Tennis",
      "Athletics",
      "Swimming",
    ],
  },
  {
    id: 7,
    name: "Massachusetts Institute of Technology (MIT)",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/divyansh-jain--BA1r4Rf_zM-unsplash.jpg",
    rating: 5,
    admissionDate: "2024-08-10",
    researchCount: 1500,
    description:
      "The Massachusetts Institute of Technology (MIT) is a private land-grant research university in Cambridge, Massachusetts. Established in 1861, MIT is one of the world's leading institutions in science, engineering, and technology education and research.",
    admissionProcess: [
      "Step 1: Submit the MIT Application for Admission, along with transcripts, test scores, and other required documents.",
      "Step 2: Take the SAT or ACT, and optionally, submit SAT Subject Test scores.",
      "Step 3: Participate in the evaluative interview process, if offered.",
      "Step 4: Wait for the admission decision, which is typically released in late March or early April.",
    ],
    events: [
      "MIT Mystery Hunt",
      "Assistive Technology Hackathon",
      "MIT Sloan Sports Analytics Conference",
      "MIT $100K Entrepreneurship Competition",
      "Under the Dome Startup Competition",
      "Cambridge Science Festival",
      "TEDxMIT",
      "Maker Faire",
    ],
    sports: [
      "Baseball",
      "Basketball",
      "Crew",
      "Fencing",
      "Golf",
      "Lacrosse",
      "Sailing",
      "Track and Field",
    ],
  },
  {
    id: 8,
    name: "University of Rajshahi",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/dora-dalberto-ORzZtY2i50k-unsplash.jpg",
    rating: 4.1,
    admissionDate: "2024-07-25",
    researchCount: 550,
    description:
      "The University of Rajshahi is a public university located in Rajshahi, Bangladesh. Established in 1953, it is one of the oldest and most prestigious universities in the country, offering a wide range of undergraduate and graduate programs.",
    admissionProcess: [
      "Step 1: Pass the Higher Secondary Certificate (HSC) or equivalent examination and secure the required GPA.",
      "Step 2: Apply online or submit the application form with required documents and fees.",
      "Step 3: Appear for the admission test and/or viva voce, if applicable.",
      "Step 4: Wait for the merit list and complete the admission formalities if selected.",
    ],
    events: [
      "Convocation Ceremony",
      "Freshers' Welcome",
      "Inter-University Sports",
      "Cultural Festival",
      "Job Fair",
      "Alumni Reunion",
      "Research Symposium",
      "Science Exhibition",
    ],
    sports: [
      "Cricket",
      "Football",
      "Basketball",
      "Volleyball",
      "Badminton",
      "Table Tennis",
      "Athletics",
      "Swimming",
    ],
  },
  {
    id: 9,
    name: "University of Oxford",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/jane-last-k60YOEjB75k-unsplash.jpg",
    rating: 4.9,
    admissionDate: "2024-07-30",
    researchCount: 1250,
    description:
      "The University of Oxford is a collegiate research university in Oxford, England. It is the oldest university in the English-speaking world and is regarded as one of the world's leading academic institutions, consistently ranking among the top universities globally.",
    admissionProcess: [
      "Step 1: Submit the online application form, along with transcripts, personal statement, and reference letters.",
      "Step 2: Take any required admissions tests or assessments for the chosen course.",
      "Step 3: Attend an interview, if shortlisted.",
      "Step 4: Wait for the admission decision, typically released in early January.",
    ],
    events: [
      "Oxford University Encaenia",
      "Oxford Union Debates",
      "Oxford Literary Festival",
      "Oxford International Art Fair",
      "Oxford Science Festival",
      "Alumni Reunions",
      "Entrepreneurship Events",
      "TEDxOxford",
    ],
    sports: [
      "Rowing",
      "Cricket",
      "Rugby Union",
      "Football",
      "Hockey",
      "Tennis",
      "Badminton",
      "Athletics",
    ],
  },
  {
    id: 10,
    name: "University of Khulna",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/istockphoto-1367931228-1024x1024.jpg",
    rating: 3.7,
    admissionDate: "2024-07-05",
    researchCount: 380,
    description:
      "The University of Khulna is a public university located in Khulna, Bangladesh. Established in 1991, it offers a wide range of undergraduate and graduate programs in various disciplines, including sciences, engineering, business, and humanities.",
    admissionProcess: [
      "Step 1: Pass the Higher Secondary Certificate (HSC) or equivalent examination and secure the required GPA.",
      "Step 2: Apply online or submit the application form with required documents and fees.",
      "Step 3: Appear for the admission test and/or viva voce, if applicable.",
      "Step 4: Wait for the merit list and complete the admission formalities if selected.",
    ],
    events: [
      "Convocation Ceremony",
      "Freshers' Welcome",
      "Inter-University Sports",
      "Cultural Festival",
      "Career Fair",
      "Alumni Reunion",
      "Research Symposium",
      "Science Exhibition",
    ],
    sports: [
      "Cricket",
      "Football",
      "Basketball",
      "Volleyball",
      "Badminton",
      "Table Tennis",
      "Athletics",
      "Swimming",
    ],
  },
  {
    id: 11,
    name: "California Institute of Technology (Caltech)",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/istockphoto-475315086-1024x1024.jpg",
    rating: 4.9,
    admissionDate: "2024-08-05",
    researchCount: 1400,
    description:
      "The California Institute of Technology (Caltech) is a private research university in Pasadena, California. It is known for its strength in science and engineering, and is consistently ranked among the top universities worldwide, particularly in the fields of technology and science.",
    admissionProcess: [
      "Step 1: Submit the Coalition Application or Common Application, along with transcripts, test scores, and other required documents.",
      "Step 2: Take the SAT or ACT, and optionally, submit SAT Subject Test scores.",
      "Step 3: Participate in the evaluative interview process, if offered.",
      "Step 4: Wait for the admission decision, which is typically released in late March or early April.",
    ],
    events: [
      "Caltech Ditch Day",
      "Caltech Riverfest",
      "Caltech Y Hike",
      "Caltech Science Bowl",
      "Caltech Entrepreneurship Competition",
      "TEDxCaltech",
      "Hackathons",
      "Student Research Conferences",
    ],
    sports: [
      "Basketball",
      "Baseball",
      "Soccer",
      "Swimming and Diving",
      "Track and Field",
      "Cross Country",
      "Fencing",
      "Water Polo",
    ],
  },
  {
    id: 12,
    name: "University of Barisal",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/jean-luc-benazet-VJ4N18Lq2JQ-unsplash.jpg",
    rating: 3.5,
    admissionDate: "2024-07-12",
    researchCount: 320,
    description:
      "The University of Barisal is a public university located in Barisal, Bangladesh. Established in 1965, it offers a range of undergraduate and graduate programs in various disciplines, including sciences, humanities, and social sciences.",
    admissionProcess: [
      "Step 1: Pass the Higher Secondary Certificate (HSC) or equivalent examination and secure the required GPA.",
      "Step 2: Apply online or submit the application form with required documents and fees.",
      "Step 3: Appear for the admission test and/or viva voce, if applicable.",
      "Step 4: Wait for the merit list and complete the admission formalities if selected.",
    ],
    events: [
      "Convocation Ceremony",
      "Freshers' Welcome",
      "Inter-University Sports",
      "Cultural Festival",
      "Job Fair",
      "Alumni Reunion",
      "Research Symposium",
      "Science Exhibition",
    ],
    sports: [
      "Cricket",
      "Football",
      "Basketball",
      "Volleyball",
      "Badminton",
      "Table Tennis",
      "Athletics",
      "Swimming",
    ],
  },
  {
    id: 13,
    name: "University of Chicago",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/keming-tan-xMygEKgsnes-unsplash.jpg",
    rating: 4.8,
    admissionDate: "2024-08-20",
    researchCount: 1150,
    description:
      "The University of Chicago is a private research university in Chicago, Illinois. Known for its academic rigor and intellectual freedom, it is consistently ranked among the best universities in the world, particularly in fields like economics, law, and physical sciences.",
    admissionProcess: [
      "Step 1: Submit the Coalition Application or Common Application, along with transcripts, test scores, and other required documents.",
      "Step 2: Take the SAT or ACT, and optionally, submit SAT Subject Test scores.",
      "Step 3: Participate in the alumni interview process, if offered.",
      "Step 4: Wait for the admission decision, which is typically released in late March or early April.",
    ],
    events: [
      "University of Chicago Scavenger Hunt",
      "University of Chicago Folk Festival",
      "University of Chicago Model UN Conference",
      "University of Chicago Entrepreneurship Series",
      "UChicago Arts Pass",
      "TEDxUChicago",
      "Research Symposiums",
      "Hackathons",
    ],
    sports: [
      "Basketball",
      "Football",
      "Baseball",
      "Soccer",
      "Tennis",
      "Track and Field",
      "Cross Country",
      "Volleyball",
    ],
  },
  {
    id: 14,
    name: "University of Comilla",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/m-GvPceVqbxm4-unsplash.jpg",
    rating: 3.6,
    admissionDate: "2024-07-18",
    researchCount: 280,
    description:
      "The University of Comilla is a public university located in Comilla, Bangladesh. Established in 2002, it offers a range of undergraduate and graduate programs in various fields, including sciences, humanities, and social sciences.",
    admissionProcess: [
      "Step 1: Pass the Higher Secondary Certificate (HSC) or equivalent examination and secure the required GPA.",
      "Step 2: Apply online or submit the application form with required documents and fees.",
      "Step 3: Appear for the admission test and/or viva voce, if applicable.",
      "Step 4: Wait for the merit list and complete the admission formalities if selected.",
    ],
    events: [
      "Convocation Ceremony",
      "Freshers' Welcome",
      "Inter-University Sports",
      "Cultural Festival",
      "Job Fair",
      "Alumni Reunion",
      "Research Symposium",
      "Science Exhibition",
    ],
    sports: [
      "Cricket",
      "Football",
      "Basketball",
      "Volleyball",
      "Badminton",
      "Table Tennis",
      "Athletics",
      "Swimming",
    ],
  },
  {
    id: 15,
    name: "Princeton University",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/malothu-santhosh-9jcbVG_Dzh8-unsplash.jpg",
    rating: 4.9,
    admissionDate: "2024-08-12",
    researchCount: 1300,
    description:
      "Princeton University is a private Ivy League research university in Princeton, New Jersey. It is one of the oldest and most prestigious universities in the United States, renowned for its academic excellence, residential college system, and groundbreaking research.",
    admissionProcess: [
      "Step 1: Submit the Coalition Application or Common Application, along with transcripts, test scores, and other required documents.",
      "Step 2: Take the SAT or ACT, and optionally, submit SAT Subject Test scores.",
      "Step 3: Participate in the alumni interview process, if offered.",
      "Step 4: Wait for the admission decision, which is typically released in late March or early April.",
    ],
    events: [
      "Princeton Reunions",
      "Princeton Entrepreneurship Advisory Committee Events",
      "Princeton Environmental Film Festival",
      "Princeton Student Art Exhibition",
      "Princeton Research Symposium",
      "TEDxPrincetonU",
      "Hackathons",
      "Cultural Festivals",
    ],
    sports: [
      "Basketball",
      "Football",
      "Baseball",
      "Soccer",
      "Lacrosse",
      "Tennis",
      "Track and Field",
      "Squash",
    ],
  },
  {
    id: 16,
    name: "University of Rangpur",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/manohar-manu-hNsYIjUeXJw-unsplash.jpg",
    rating: 3.4,
    admissionDate: "2024-07-22",
    researchCount: 250,
    description:
      "The University of Rangpur is a public university located in Rangpur, Bangladesh. Established in 2001, it offers a range of undergraduate and graduate programs in various fields, including sciences, humanities, and social sciences.",
    admissionProcess: [
      "Step 1: Pass the Higher Secondary Certificate (HSC) or equivalent examination and secure the required GPA.",
      "Step 2: Apply online or submit the application form with required documents and fees.",
      "Step 3: Appear for the admission test and/or viva voce, if applicable.",
      "Step 4: Wait for the merit list and complete the admission formalities if selected.",
    ],
    events: [
      "Convocation Ceremony",
      "Freshers' Welcome",
      "Inter-University Sports",
      "Cultural Festival",
      "Job Fair",
      "Alumni Reunion",
      "Research Symposium",
      "Science Exhibition",
    ],
    sports: [
      "Cricket",
      "Football",
      "Basketball",
      "Volleyball",
      "Badminton",
      "Table Tennis",
      "Athletics",
      "Swimming",
    ],
  },
  {
    id: 17,
    name: "Columbia University",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/michael-marsh-U0dBV_QeiYk-unsplash.jpg",
    rating: 4.8,
    admissionDate: "2024-08-18",
    researchCount: 1250,
    description:
      "Columbia University is a private Ivy League research university in New York City. It is one of the oldest and most prestigious universities in the United States, known for its academic excellence, diverse student body, and its location in the heart of New York City.",
    admissionProcess: [
      "Step 1: Submit the Coalition Application or Common Application, along with transcripts, test scores, and other required documents.",
      "Step 2: Take the SAT or ACT, and optionally, submit SAT Subject Test scores.",
      "Step 3: Participate in the alumni interview process, if offered.",
      "Step 4: Wait for the admission decision, which is typically released in late March or early April.",
    ],
    events: [
      "Columbia University Homecoming",
      "Columbia Entrepreneurship Events",
      "Columbia Student Film Festival",
      "Columbia Engineering Student Project Showcases",
      "TEDxColumbiaUniversity",
      "Hackathons",
      "Research Symposiums",
      "Cultural Festivals",
    ],
    sports: [
      "Basketball",
      "Football",
      "Baseball",
      "Soccer",
      "Fencing",
      "Tennis",
      "Track and Field",
      "Rowing",
    ],
  },
  {
    id: 18,
    name: "University of Jagannath",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/muzammil-soorma-9MByoiBNN1c-unsplash.jpg",
    rating: 3.2,
    admissionDate: "2024-07-28",
    researchCount: 220,
    description:
      "The University of Jagannath is a public university located in Dhaka, Bangladesh. Established in 2005, it offers a range of undergraduate and graduate programs in various fields, including sciences, humanities, and social sciences.",
    admissionProcess: [
      "Step 1: Pass the Higher Secondary Certificate (HSC) or equivalent examination and secure the required GPA.",
      "Step 2: Apply online or submit the application form with required documents and fees.",
      "Step 3: Appear for the admission test and/or viva voce, if applicable.",
      "Step 4: Wait for the merit list and complete the admission formalities if selected.",
    ],
    events: [
      "Convocation Ceremony",
      "Freshers' Welcome",
      "Inter-University Sports",
      "Cultural Festival",
      "Job Fair",
      "Alumni Reunion",
      "Research Symposium",
      "Science Exhibition",
    ],
    sports: [
      "Cricket",
      "Football",
      "Basketball",
      "Volleyball",
      "Badminton",
      "Table Tennis",
      "Athletics",
      "Swimming",
    ],
  },
  {
    id: 19,
    name: "Yale University",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/porter-raab-gnj9vj--FRY-unsplash.jpg",
    rating: 4.9,
    admissionDate: "2024-08-25",
    researchCount: 1180,
    description:
      "Yale University is a private Ivy League research university in New Haven, Connecticut. It is one of the oldest and most prestigious universities in the United States, known for its academic excellence, residential college system, and distinguished alumni.",
    admissionProcess: [
      "Step 1: Submit the Coalition Application or Common Application, along with transcripts, test scores, and other required documents.",
      "Step 2: Take the SAT or ACT, and optionally, submit SAT Subject Test scores.",
      "Step 3: Participate in the alumni interview process, if offered.",
      "Step 4: Wait for the admission decision, which is typically released in late March or early April.",
    ],
    events: [
      "Yale University Commencement",
      "Yale Entrepreneurial Institute Events",
      "Yale Student Film Festival",
      "Yale Model United Nations",
      "TEDxYale",
      "Hackathons",
      "Research Symposiums",
      "Cultural Festivals",
    ],
    sports: [
      "Basketball",
      "Football",
      "Baseball",
      "Soccer",
      "Ice Hockey",
      "Tennis",
      "Track and Field",
      "Crew",
    ],
  },
  {
    id: 20,
    name: "Jahangirnagar University",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/timothy-kassis-Qj-5RbUb1UE-unsplash.jpg",
    rating: 4,
    admissionDate: "2024-07-30",
    researchCount: 480,
    description:
      "Jahangirnagar University is a public university located in Savar, Bangladesh. Established in 1970, it offers a wide range of undergraduate and graduate programs in various disciplines, including sciences, humanities, and social sciences.",
    admissionProcess: [
      "Step 1: Pass the Higher Secondary Certificate (HSC) or equivalent examination and secure the required GPA.",
      "Step 2: Apply online or submit the application form with required documents and fees.",
      "Step 3: Appear for the admission test and/or viva voce, if applicable.",
      "Step 4: Wait for the merit list and complete the admission formalities if selected.",
    ],
    events: [
      "Convocation Ceremony",
      "Freshers' Welcome",
      "Inter-University Sports",
      "Cultural Festival",
      "Career Fair",
      "Alumni Reunion",
      "Research Symposium",
      "Science Exhibition",
    ],
    sports: [
      "Cricket",
      "Football",
      "Basketball",
      "Volleyball",
      "Badminton",
      "Table Tennis",
      "Athletics",
      "Swimming",
    ],
  },
  {
    id: 21,
    name: "University of Pennsylvania",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/vadim-sherbakov-d6ebY-faOO0-unsplash.jpg",
    rating: 4.7,
    admissionDate: "2024-08-22",
    researchCount: 1100,
    description:
      "The University of Pennsylvania is a private Ivy League research university in Philadelphia. It is one of the oldest and most prestigious universities in the United States, known for its academic excellence, interdisciplinary approach, and innovative research.",
    admissionProcess: [
      "Step 1: Submit the Coalition Application or Common Application, along with transcripts, test scores, and other required documents.",
      "Step 2: Take the SAT or ACT, and optionally, submit SAT Subject Test scores.",
      "Step 3: Participate in the alumni interview process, if offered.",
      "Step 4: Wait for the admission decision, which is typically released in late March or early April.",
    ],
    events: [
      "Penn Relays",
      "Penn Wharton Entrepreneurship Events",
      "Penn Student Film Festival",
      "Penn Engineering Design Showcases",
      "TEDxPenn",
      "Hackathons",
      "Research Symposiums",
      "Cultural Festivals",
    ],
    sports: [
      "Basketball",
      "Football",
      "Baseball",
      "Soccer",
      "Lacrosse",
      "Tennis",
      "Track and Field",
      "Crew",
    ],
  },
  {
    id: 22,
    name: "Islamic University",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/deepak-shukla-fBIqryv8AL4-unsplash.jpg",
    rating: 3.9,
    admissionDate: "2024-07-15",
    researchCount: 360,
    description:
      "The Islamic University is a public university located in Kushtia, Bangladesh. Established in 1979, it offers a range of undergraduate and graduate programs in various fields, with a focus on Islamic studies and Arabic language.",
    admissionProcess: [
      "Step 1: Pass the Higher Secondary Certificate (HSC) or equivalent examination and secure the required GPA.",
      "Step 2: Apply online or submit the application form with required documents and fees.",
      "Step 3: Appear for the admission test and/or viva voce, if applicable.",
      "Step 4: Wait for the merit list and complete the admission formalities if selected.",
    ],
    events: [
      "Convocation Ceremony",
      "Freshers' Welcome",
      "Inter-University Sports",
      "Cultural Festival",
      "Job Fair",
      "Alumni Reunion",
      "Research Symposium",
      "Islamic Lecture Series",
    ],
    sports: [
      "Cricket",
      "Football",
      "Basketball",
      "Volleyball",
      "Badminton",
      "Table Tennis",
      "Athletics",
      "Swimming",
    ],
  },
  {
    id: 23,
    name: "University of California, Berkeley",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/chenyu-guan-XgcdAE1Gqlg-unsplash.jpg",
    rating: 4.8,
    admissionDate: "2024-08-10",
    researchCount: 1350,
    description:
      "The University of California, Berkeley is a public land-grant research university in Berkeley, California. It is one of the most prestigious and highly ranked universities in the world, known for its academic excellence, research impact, and innovative spirit.",
    admissionProcess: [
      "Step 1: Submit the University of California Application, along with transcripts, test scores, and other required documents.",
      "Step 2: Take the SAT or ACT, and optionally, submit SAT Subject Test scores.",
      "Step 3: Participate in the evaluative interview process, if offered.",
      "Step 4: Wait for the admission decision, which is typically released in late March or early April.",
    ],
    events: [
      "Cal Day",
      "Cal Entrepreneurship Events",
      "Berkeley Student Film Festival",
      "Berkeley Engineering Showcases",
      "TEDxBerkeley",
      "Hackathons",
      "Research Symposiums",
      "Cultural Festivals",
    ],
    sports: [
      "Basketball",
      "Football",
      "Baseball",
      "Soccer",
      "Softball",
      "Tennis",
      "Track and Field",
      "Crew",
    ],
  },
  {
    id: 24,
    name: "Bangabandhu Sheikh Mujibur Rahman Maritime University",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/darya-tryfanava-d55fhArDES0-unsplash.jpg",
    rating: 3.7,
    admissionDate: "2024-07-20",
    researchCount: 300,
    description:
      "Bangabandhu Sheikh Mujibur Rahman Maritime University is a public university located in Chittagong, Bangladesh. Established in 2013, it specializes in maritime education and research, offering undergraduate and graduate programs related to marine engineering, navigation, and maritime management.",
    admissionProcess: [
      "Step 1: Pass the Higher Secondary Certificate (HSC) or equivalent examination and secure the required GPA.",
      "Step 2: Apply online or submit the application form with required documents and fees.",
      "Step 3: Appear for the admission test and/or viva voce, if applicable.",
      "Step 4: Wait for the merit list and complete the admission formalities if selected.",
    ],
    events: [
      "Convocation Ceremony",
      "Freshers' Welcome",
      "Inter-University Sports",
      "Cultural Festival",
      "Career Fair",
      "Alumni Reunion",
      "Research Symposium",
      "Maritime Industry Exhibitions",
    ],
    sports: [
      "Cricket",
      "Football",
      "Basketball",
      "Volleyball",
      "Badminton",
      "Table Tennis",
      "Athletics",
      "Swimming",
    ],
  },
  {
    id: 25,
    name: "University of California, Los Angeles (UCLA)",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/chenyu-guan-XgcdAE1Gqlg-unsplash.jpg",
    rating: 4.7,
    admissionDate: "2024-08-15",
    researchCount: 1200,
    description:
      "The University of California, Los Angeles (UCLA) is a public research university in Los Angeles, California. It is part of the prestigious University of California system and is renowned for its academic excellence, research impact, and vibrant campus life.",
    admissionProcess: [
      "Step 1: Submit the University of California Application, along with transcripts, test scores, and other required documents.",
      "Step 2: Take the SAT or ACT, and optionally, submit SAT Subject Test scores.",
      "Step 3: Participate in the evaluative interview process, if offered.",
      "Step 4: Wait for the admission decision, which is typically released in late March or early April.",
    ],
    events: [
      "UCLA Undie Run",
      "UCLA Entrepreneurship Events",
      "UCLA Student Film Festival",
      "UCLA Engineering Showcases",
      "TEDxUCLA",
      "Hackathons",
      "Research Symposiums",
      "Cultural Festivals",
    ],
    sports: [
      "Basketball",
      "Football",
      "Baseball",
      "Soccer",
      "Softball",
      "Tennis",
      "Track and Field",
      "Gymnastics",
    ],
  },
  {
    id: 26,
    name: "University of Michigan",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/chenyu-guan-XgcdAE1Gqlg-unsplash.jpg",
    rating: 4.7,
    admissionDate: "2024-08-20",
    researchCount: 1150,
    description:
      "The University of Michigan is a public research university in Ann Arbor, Michigan. It is one of the most prestigious and highly ranked universities in the United States, known for its academic excellence, research impact, and strong alumni network.",
    admissionProcess: [
      "Step 1: Submit the University of Michigan Application, along with transcripts, test scores, and other required documents.",
      "Step 2: Take the SAT or ACT, and optionally, submit SAT Subject Test scores.",
      "Step 3: Participate in the evaluative interview process, if offered.",
      "Step 4: Wait for the admission decision, which is typically released in late March or early April.",
    ],
    events: [
      "University of Michigan Homecoming",
      "Michigan Entrepreneurship Events",
      "Michigan Student Film Festival",
      "Michigan Engineering Showcases",
      "TEDxUofM",
      "Hackathons",
      "Research Symposiums",
      "Cultural Festivals",
    ],
    sports: [
      "Basketball",
      "Football",
      "Baseball",
      "Soccer",
      "Softball",
      "Tennis",
      "Track and Field",
      "Gymnastics",
    ],
  },
  {
    id: 27,
    name: "Bangabandhu Sheikh Mujibur Rahman Aviation and Aerospace University",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/darya-tryfanava-d55fhArDES0-unsplash.jpg",
    rating: 3.8,
    admissionDate: "2024-07-25",
    researchCount: 320,
    description:
      "Bangabandhu Sheikh Mujibur Rahman Aviation and Aerospace University is a public university located in Dhaka, Bangladesh. Established in 2019, it specializes in aviation and aerospace education and research, offering undergraduate and graduate programs related to aeronautical engineering, air traffic management, and aviation management.",
    admissionProcess: [
      "Step 1: Pass the Higher Secondary Certificate (HSC) or equivalent examination and secure the required GPA.",
      "Step 2: Apply online or submit the application form with required documents and fees.",
      "Step 3: Appear for the admission test and/or viva voce, if applicable.",
      "Step 4: Wait for the merit list and complete the admission formalities if selected.",
    ],
    events: [
      "Convocation Ceremony",
      "Freshers' Welcome",
      "Inter-University Sports",
      "Cultural Festival",
      "Career Fair",
      "Alumni Reunion",
      "Research Symposium",
      "Aviation and Aerospace Exhibitions",
    ],
    sports: [
      "Cricket",
      "Football",
      "Basketball",
      "Volleyball",
      "Badminton",
      "Table Tennis",
      "Athletics",
      "Swimming",
    ],
  },
  {
    id: 28,
    name: "University of Toronto",
    image:
      "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/chenyu-guan-XgcdAE1Gqlg-unsplash.jpg",
    rating: 4.6,
    admissionDate: "2024-08-18",
    researchCount: 1100,
    description:
      "The University of Toronto is a public research university in Toronto, Ontario, Canada. It is one of the most prestigious and highly ranked universities in the world, known for its academic excellence, research impact, and diverse student community.",
    admissionProcess: [
      "Step 1: Submit the University of Toronto Application, along with transcripts, test scores (if required), and other required documents.",
      "Step 2: Take the required standardized tests (SAT, ACT, or AP exams) if applicable.",
      "Step 3: Participate in the evaluative interview process, if offered.",
      "Step 4: Wait for the admission decision, which is typically released in late March or early April.",
    ],
    events: [
      "University of Toronto Homecoming",
      "UofT Entrepreneurship Events",
      "UofT Student Film Festival",
      "UofT Engineering Showcases",
      "TEDxUofT",
      "Hackathons",
      "Research Symposiums",
      "Cultural Festivals",
    ],
    sports: [
      "Basketball",
      "Football",
      "Baseball",
      "Soccer",
      "Ice Hockey",
      "Tennis",
      "Track and Field",
      "Rowing",
    ],
  },
];

export const fetchColleges = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get(`${BASE_API_URL}/college/all`);
  console.log(response);
  const colleges = response.data?.data;
  return colleges;
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

export const searchCollege = async (searchTerm) => {
  // Simulate network delay
  const response = await axios.get(
    `${BASE_API_URL}/college/search?name=${searchTerm}`
  );
  console.log(response.data?.data, "fcrol servicce");
  return response.data;
};

export const debounce = (func, delay) => {
  let timeout;
  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
};

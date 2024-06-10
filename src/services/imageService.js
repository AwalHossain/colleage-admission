const mockImages = [
  {
    id: 1,
    url: "https://video-gka8dxaqb0babzct.z01.azurefd.net/events/istockphoto-1368496779-1024x1024.jpg",
    description: "Graduation Ceremony",
  },
  {
    id: 2,
    url: "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/timothy-kassis-Qj-5RbUb1UE-unsplash.jpg",
    description: "Student Life",
  },
  {
    id: 3,
    url: "https://video-gka8dxaqb0babzct.z01.azurefd.net/events/istockphoto-1340342476-1024x1024.jpg",
    description: "Campus Tour",
  },
  {
    id: 4,
    url: "https://video-gka8dxaqb0babzct.z01.azurefd.net/events/istockphoto-1739895622-1024x1024.jpg",
    description: "Student Housing",
  },
  {
    id: 5,
    url: "https://video-gka8dxaqb0babzct.z01.azurefd.net/events/istockphoto-1456729829-1024x1024.jpg",
    description: "Library",
  },
  {
    id: 6,
    url: "https://video-gka8dxaqb0babzct.z01.azurefd.net/sports/jeffrey-f-lin-CUK8i7lr3l8-unsplash.jpg",
    description: "Sports Facilities",
  },
  {
    id: 7,
    url: "https://video-gka8dxaqb0babzct.z01.azurefd.net/sports/philippa-rose-tite-93YYkxujyus-unsplash.jpg",
    description: "Dining Hall",
  },
  {
    id: 8,
    url: "https://video-gka8dxaqb0babzct.z01.azurefd.net/events/istockphoto-1353372838-1024x1024.jpg",
    description: "Classroom",
  },
  {
    id: 9,
    url: "https://video-gka8dxaqb0babzct.z01.azurefd.net/events/istockphoto-597957846-1024x1024.jpg",
    description: "Laboratory",
  },
  {
    id: 10,
    url: "https://video-gka8dxaqb0babzct.z01.azurefd.net/sports/istockphoto-1278976828-1024x1024.jpg",
    description: "Campus Map",
  },
  {
    id: 11,
    url: "https://video-gka8dxaqb0babzct.z01.azurefd.net/sports/riley-mccullough-iezcEpGuYdE-unsplash.jpg",
    description: "Student Center",
  },
  {
    id: 12,
    url: "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/university-6699377_1280.jpg",
    description: "Bookstore",
  },
  {
    id: 13,
    url: "https://video-gka8dxaqb0babzct.z01.azurefd.net/college-phot/vadim-sherbakov-d6ebY-faOO0-unsplash.jpg",
    description: "Student Clubs",
  },
  {
    id: 14,
    url: "https://video-gka8dxaqb0babzct.z01.azurefd.net/sports/braden-collum-ttbCwN_mWic-unsplash.jpg",
    description: "Academic Building",
  },
  {
    id: 15,
    url: "https://video-gka8dxaqb0babzct.z01.azurefd.net/events/pang-yuhao-_kd5cxwZOK4-unsplash.jpg",
    description: "Research Center",
  },
];

export const fetchImages = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockImages;
};

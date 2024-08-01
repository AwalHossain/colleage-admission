const mockImages = [
  {
    id: 1,
    url: "https://i.ibb.co/Vj51Rvg/michael-marsh-U0d-BV-Qei-Yk-unsplash-19-11zon.jpg",
    description: "Scenic Nature",
  },
  {
    id: 2,
    url: "https://i.ibb.co/TbdrwVQ/istockphoto-475315086-1024x1024-11-11zon.jpg",
    description: "Graduation Celebration",
  },
  {
    id: 3,
    url: "https://i.ibb.co/1dHCbLM/istockphoto-1367931228-1024x1024-12-11zon.jpg",
    description: "Academic Graduates",
  },
  {
    id: 4,
    url: "https://i.ibb.co/pyJtB05/jane-last-k60-YOEj-B75k-unsplash-13-11zon.jpg",
    description: "University Campus",
  },
  {
    id: 5,
    url: "https://i.ibb.co/ZKLWRpN/jean-luc-benazet-VJ4-N18-Lq2-JQ-unsplash-14-11zon.jpg",
    description: "Classroom Setting",
  },
  {
    id: 6,
    url: "https://i.ibb.co/K714HhJ/keming-tan-x-Myg-EKgsnes-unsplash-15-11zon.jpg",
    description: "Educational Institution",
  },
  {
    id: 7,
    url: "https://i.ibb.co/vQc20fx/malothu-santhosh-9jcb-VG-Dzh8-unsplash-16-11zon.jpg",
    description: "Library Bookshelves",
  },
  {
    id: 8,
    url: "https://i.ibb.co/fN6jGW1/manohar-manu-h-Ns-YIj-Ue-XJw-unsplash-17-11zon.jpg",
    description: "College Grounds",
  },
  {
    id: 9,
    url: "https://i.ibb.co/MCK15Wy/m-Gv-Pce-Vqbxm4-unsplash-18-11zon.jpg",
    description: "University Building",
  },
  {
    id: 10,
    url: "https://i.ibb.co/yYjY5Vv/Dhaka-UNI-02-6-11zon.jpg",
    description: "Campus Exterior",
  },
  {
    id: 11,
    url: "https://i.ibb.co/dgySBLH/Dhaka-UNI-03-7-11zon.jpg",
    description: "University Facade",
  },
  {
    id: 12,
    url: "https://i.ibb.co/BfzpnjJ/divyansh-jain-BA1r4-Rf-z-M-unsplash-8-11zon.jpg",
    description: "Student Studying",
  },
  {
    id: 13,
    url: "https://i.ibb.co/mCn870d/dora-dalberto-ORz-Zt-Y2i50k-unsplash-9-11zon.jpg",
    description: "Lecture Hall",
  },
  {
    id: 14,
    url: "https://i.ibb.co/sCBN4Bq/einar-h-reynis-YW1i-xi8dt8-unsplash-10-11zon.jpg",
    description: "Academic Books",
  },
  {
    id: 15,
    url: "https://i.ibb.co/9WcTZQ3/arun-chandran-x-OSMdivrc-FM-unsplash-1-11zon.jpg",
    description: "Educational Supplies",
  },
  {
    id: 16,
    url: "https://i.ibb.co/NTvf5RG/casey-olsen-Nl-Fy-PKx-XORo-unsplash-2-11zon.jpg",
    description: "Desk Workspace",
  },
  {
    id: 17,
    url: "https://i.ibb.co/Gntv8w2/chenyu-guan-Xgcd-AE1-Gqlg-unsplash-3-11zon.jpg",
    description: "School Hallway",
  },
  {
    id: 18,
    url: "https://i.ibb.co/09cYFBC/darya-tryfanava-d55fh-Ar-DES0-unsplash-4-11zon.jpg",
    description: "Computer Laboratory",
  },
  {
    id: 19,
    url: "https://i.ibb.co/87zr2Xq/deepak-shukla-f-BIqryv8-AL4-unsplash-5-11zon.jpg",
    description: "Reading Room",
  },
  {
    id: 20,
    url: "https://i.ibb.co/4VC0PPm/braden-collum-ttb-Cw-N-m-Wic-unsplash-1-11zon.jpg",
    description: "Classroom Desks",
  },
  {
    id: 21,
    url: "https://i.ibb.co/gWygPKn/istockphoto-1278976828-1024x1024-2-11zon.jpg",
    description: "Graduate Celebration",
  },
  {
    id: 22,
    url: "https://i.ibb.co/6mKqfvr/jeffrey-f-lin-CUK8i7lr3l8-unsplash-3-11zon.jpg",
    description: "Campus Walkway",
  },
  {
    id: 23,
    url: "https://i.ibb.co/Bz6Pdsk/philippa-rose-tite-93-YYkxujyus-unsplash-4-11zon.jpg",
    description: "Academic Books",
  },
  {
    id: 24,
    url: "https://i.ibb.co/fnHK1j6/philippa-rose-tite-X1zu-CXKw-Cy8-unsplash-5-11zon.jpg",
    description: "Book Shelves",
  },
  {
    id: 25,
    url: "https://i.ibb.co/m6kwjTn/riley-mccullough-iezc-Ep-Gu-Yd-E-unsplash-6-11zon.jpg",
    description: "College Building",
  },
  {
    id: 26,
    url: "https://i.ibb.co/tBcSmRY/istockphoto-597957846-1024x1024-1-11zon.jpg",
    description: "Graduation Ceremony",
  },
  {
    id: 27,
    url: "https://i.ibb.co/wp0sjfb/istockphoto-597958786-1024x1024-2-11zon.jpg",
    description: "Graduation Celebration",
  },
  {
    id: 28,
    url: "https://i.ibb.co/fqS5n13/istockphoto-1340342476-1024x1024-3-11zon.jpg",
    description: "Graduation Ceremony",
  },
  {
    id: 29,
    url: "https://i.ibb.co/5RD3BSd/istockphoto-1353372838-1024x1024-4-11zon.jpg",
    description: "Academic Graduates",
  },
  {
    id: 30,
    url: "https://i.ibb.co/WDVGzyb/istockphoto-1368496779-1024x1024-5-11zon.jpg",
    description: "Graduation Celebration",
  },
  {
    id: 31,
    url: "https://i.ibb.co/6YfnqqS/istockphoto-1456729829-1024x1024-6-11zon.jpg",
    description: "Graduation Ceremony",
  },
  {
    id: 32,
    url: "https://i.ibb.co/cDxm8DT/istockphoto-1739895622-1024x1024-7-11zon.jpg",
    description: "Academic Achievement",
  },
  {
    id: 33,
    url: "https://i.ibb.co/ydVmQLX/pang-yuhao-kd5cxw-ZOK4-unsplash-8-11zon.jpg",
    description: "Campus Scenery",
  },
  {
    id: 34,
    url: "https://i.ibb.co/xf9grsP/rut-miit-YIdk-Wyn-Jd-Sk-unsplash-9-11zon.jpg",
    description: "Lecture Theater",
  },
  {
    id: 35,
    url: "https://i.ibb.co/k07T2Mx/university-105709-1280-10-11zon.jpg",
    description: "University Building",
  },
];
export const fetchImages = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockImages;
};

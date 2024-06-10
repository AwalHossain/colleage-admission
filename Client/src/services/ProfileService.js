// src/services/profileService.js
const mockProfile = {
  name: "John Doe",
  email: "johndoe@example.com",
  university: "Harvard University",
  address: "123 Main Street, Anytown USA",
};

export const fetchProfile = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockProfile;
};

export const updateProfile = async (updatedProfile) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Updated profile:", updatedProfile);
  return updatedProfile;
};

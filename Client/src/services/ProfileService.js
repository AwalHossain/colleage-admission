import axios from "axios";
import { BASE_API_URL } from "../config";
import { getFromLocalStorage } from "../lib/local-storage";

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

// export const updateProfile = async (updatedProfile) => {
//   // Simulate network delay
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   console.log("Updated profile:", updatedProfile);

//   const

//   return updatedProfile;
// };

export const updateProfile = async (data) => {
  const { id } = data;
  const token = getFromLocalStorage("token");
  try {
    const response = await axios.put(
      `${BASE_API_URL}/auth/update/${id}`,
      data,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    console.log(response.data, "res from login");
    return response;
  } catch (error) {
    console.error(error.response.data, "error from auth service");
    throw error;
  }
};

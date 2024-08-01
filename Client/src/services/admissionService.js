import axios from "axios";
import { toast } from "react-toastify";
import { BASE_API_URL } from "../config";
import { getFromLocalStorage } from "../lib/local-storage";

// src/services/admissionService.js
export const submitAdmission = async (formData) => {
  // Simulate network delay
  const token = getFromLocalStorage("token");
  console.log(formData, "form data from admission service");

  try {
    const response = await axios.post(
      `${BASE_API_URL}/admission/create`,
      formData,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error, "error from auth service");
    throw error;
  }
};

export const getAdmissions = async () => {
  const token = getFromLocalStorage("token");
  try {
    const response = await axios.get(`${BASE_API_URL}/admission/get`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error, "error from auth service");
    toast.error("Error: " + "Something went wrong while fetching admissions");
    throw error;
  }
};

import axios from "axios";
import { BASE_API_URL } from "../config";
import { getFromLocalStorage } from "../lib/local-storage";

export const fetchLogin = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_API_URL}/auth/login`, {
      email,
      password,
    });
    console.log(response.data, "res from login");
    return response;
  } catch (error) {
    console.error(error.response.data, "error from auth service");
    throw error;
  }
};

export const fetchRegister = async (name, email, password) => {
  try {
    const response = await axios.post(`${BASE_API_URL}/auth/create`, {
      name,
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error(error.response.data);
    throw error;
  }
};
export const fetchSocialLogin = async (name, email, photoURL) => {
  try {
    const response = await axios.post(
      `${BASE_API_URL}/auth/social-media-login`,
      {
        email,
        name,
        photoURL,
      }
    );
    return response;
  } catch (error) {
    console.error(error.response.data);
    throw error;
  }
};

export const senResetLink = async (email) => {
  try {
    const response = await axios.post(`${BASE_API_URL}/auth/reset-password`, {
      email,
    });
    return response;
  } catch (error) {
    console.error(error, "error from auth service");
    throw error;
  }
};

export const resetPassword = async (password, id, token) => {
  try {
    const response = await axios.post(
      `${BASE_API_URL}/auth/reset-password/${id}/${token}`,
      {
        password,
      }
    );
    return response;
  } catch (error) {
    console.error(error, "error from auth service");
    throw error;
  }
};

export const getMe = async () => {
  const token = getFromLocalStorage("token");

  console.log(token, "token from auth service");
  try {
    const response = await axios.get(`${BASE_API_URL}/auth/me`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error, "error from auth service");
    throw error;
  }
};

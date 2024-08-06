export const setToLocalStorage = (key, token) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  token = typeof token === "object" ? JSON.stringify(token) : token;
  return localStorage.setItem(key, token);
};
export const getFromLocalStorage = (key) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  const item = localStorage.getItem(key);
  try {
    return JSON.parse(item);
  } catch (e) {
    return item;
  }
};

// export const getNewAccesstoken = async () => {
//   return await axiosInstance({
//     url: `${getBaseUrl()}/auth/refresh-token`,
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     withCredentials: true,
//   });
// };

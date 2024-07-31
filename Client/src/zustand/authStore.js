import { create } from "zustand";
import { getFromLocalStorage, setToLocalStorage } from "../lib/local-storage";

const useAuth = create((set) => ({
  user: null,
  setUser: (user) => {
    // Store the user data in local storage
    if (user) {
      setToLocalStorage("user", user);
    } else {
      localStorage.removeItem("user");
    }
    set({ user });
  },
  isSignedIn: () => !!getFromLocalStorage("user"), // Check if user is signed in
  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    set({ user: null });
  }, // Function to log out the user
}));

export default useAuth;

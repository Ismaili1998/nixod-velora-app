import axios from "axios";
import { API_SERVER } from "@/config/constant";

export const getToken = () => {
  const token = localStorage.getItem("auth");
  return token ? JSON.parse(token)?.current.token : null;
};

const axiosInstance = axios.create({
  baseURL: `${API_SERVER}users`,
});

// 🔐 Request interceptor: add token to headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 🚨 Response interceptor: handle expired token globally
axiosInstance.interceptors.response.use(
  (response) => response, // pass through successful responses
  async (error) => {
    if (error.response && error.response.status === 403) {
      // Token expired or unauthorized
      try {
        // Call logout API to invalidate token on server
        const token = getToken();
        if (token) {
          await axios.post(
            `${API_SERVER}users/logout`,
            {},
            {
              headers: {
                Authorization: token,
              },
            }
          );
        }
      } catch (logoutError) {
        // If logout API fails, log the error but continue with cleanup
        console.error("Logout API failed:", logoutError);
      }

      // Clear stored token or auth info
      localStorage.removeItem("auth");

      // Redirect to login page
      window.location.href = "/login";

      // Optionally reject with a clear message
      return Promise.reject(new Error("Session expired. Please login again."));
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

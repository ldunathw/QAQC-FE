import axios from "axios";

const API_BASE = "http://localhost:9000/api/v1";

const http = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" }
});

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) throw new Error("NO_REFRESH");

 
        const res = await axios.post(`${API_BASE}/auth/refresh`, {
          refreshToken
        });

        if (res.data.status !== "SUCCESS") throw new Error("REFRESH_FAILED");

        const newAccess = res.data.data.accessToken;
        const newRefresh = res.data.data.refreshToken;

     
        localStorage.setItem("accessToken", newAccess);
        localStorage.setItem("refreshToken", newRefresh);

  
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;
        return http(originalRequest);
      } catch (err) {
        localStorage.clear();
        window.location.href = "/login";
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default http;

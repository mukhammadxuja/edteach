import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).accessToken}`;
  }
  return req;
});

export const fetchUsers = () => API.get("/users");
export const createUser = (newUser) => API.post("/users", newUser);
export const updateUser = (id, updatedUser) =>
  API.patch(`/users/${id}`, updatedUser);
export const deleteUser = (id) => API.delete(`/users/${id}`);

const AUTH_API = axios.create({ baseURL: "http://localhost:4000/auth" });

export const login = (formData) => AUTH_API.post("/login", formData);
export const register = (formData) => AUTH_API.post("/register", formData);
import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/Viktoriia-Piskova/My-json-thai-kitchen",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getDishes() {
    return apiClient.get("/dishes");
  },
  getDish(id) {
    return apiClient.get("/dishes/" + id);
  },
};

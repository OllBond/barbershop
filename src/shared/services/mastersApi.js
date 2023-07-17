import axios from "axios";

export const usersInstance = axios.create({
  baseURL: "https://64020c423779a8626263fc94.mockapi.io/masters",
});

export const getAllMasters = async () => {
  const { data } = await usersInstance.get("/");
  return data;
};

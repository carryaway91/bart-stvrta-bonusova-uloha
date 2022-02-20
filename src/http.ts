const axios = require("axios");

const BASE_URL = "https://reqres.in/api/users/";
export const fetchData = async (id: number) => {
  return await axios.get(`${BASE_URL}${id}`);
};

export const postData = async (data: { name: string; job: string }) => {
  return await axios.post(`${BASE_URL}`, data);
};

export const updateData = async (
  data: { name: string; job: string },
  id: number
) => {
  return await axios.put(`${BASE_URL}${id}`, data);
};

export const deleteData = async (id: number) => {
  return await axios.delete(`${BASE_URL}${id}`);
};

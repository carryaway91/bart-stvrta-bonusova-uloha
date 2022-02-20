const { fetchData, postData, updateData, deleteData } = require("../http");

export const getUser = async (id: number) => {
  try {
    const response = await fetchData(id);
    const person = response.data.data;
    return person;
  } catch (err) {
    if (err.response.status === 404) {
      return new Error("User not found");
    }
  }
};

export const postUser = async (data: { name: string; job: string }) => {
  const response = await postData(data);
  return {
    status: response.status,
    data: response.data,
  };
};

export const updateUser = async (
  data: { name: string; job: string },
  id: number
) => {
  const response = await updateData(data, id);
  return {
    status: response.status,
    data: response.data,
  };
};

export const deleteUser = async (id: number) => {
  const response = await deleteData(id);
  return response.status;
};

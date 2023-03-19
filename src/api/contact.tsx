import api from ".";
const BASE_PATH = "/contact";

export const ApiContact = async (params: any) => {
  const url = `${BASE_PATH}`;
  const data = await api.post(url, params);
  return data;
};


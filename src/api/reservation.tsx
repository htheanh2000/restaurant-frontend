import api from ".";
const BASE_PATH = "/reservation";

export const ApiReservation = async (params: any) => {
  const url = `${BASE_PATH}`;
  const data = await api.post(url, params);
  return data;
};


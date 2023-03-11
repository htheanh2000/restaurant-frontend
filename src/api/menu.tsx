import api from ".";
import { ApiUploadImamge } from "./upload";
const BASE_PATH = "/menu";

export const ApiCreateDish = async (params: any) => {
  const url = `${BASE_PATH}`;
  const imgUrl = await ApiUploadImamge(params.image);
  if (!imgUrl) {
    return {
      data: null,
      error: "Uploading image failed",
    };
  }
  const body = {
    name: params.name,
    price: params.price,
    category: params.category,
    description: params.description,
    rating: params.rating,
    url: imgUrl,
  };
  const data = await api.post(url, body);
  return data;
};

export const ApiGetMenu = async (params: any) => {
  const url = `${BASE_PATH}`;
  const data = await api.get(url, {
    params,
  });
  return data;
};

export const ApiDeleteDish = async (params: any) => {
  const url = `${BASE_PATH}/${params}`;
  const data = await api.delete(url);
  return data;
};

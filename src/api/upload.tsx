import api from ".";
const BASE_PATH = "/upload";
const ApiUploadImamge = async (file: any) => {
  const url = `${BASE_PATH}`;
  const formData = new FormData();

  formData.append("file", file);
  const {data} = await api.post(url, formData);
  return data.data || null;
};

export { ApiUploadImamge };

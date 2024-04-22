import { API_KEY, PER_PAGE, instance } from '../api';

export const getSearchPicturesApi = async (query, page) => {
  const { data } = await instance(
    `?key=${API_KEY}&q=${query}&image_type=photo&page=${page}&per_page=${PER_PAGE}`
  );
  return data;
};

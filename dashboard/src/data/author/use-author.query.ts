import Author from "@repositories/author";
import { useQuery } from "react-query";
import { Author as TAuthor } from "@ts-types/generated";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const fetchAuthor = async (id: string) => {
  const { data } = await Author.find(`${API_ENDPOINTS.AUTHORS}/${id}`);
  return data;
};

export const useAuthorQuery = (id: string) => {
  return useQuery<TAuthor, Error>([API_ENDPOINTS.AUTHORS, id], () =>
    fetchAuthor(id)
  );
};

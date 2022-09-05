import Tag from "@repositories/tag";
import { useQuery } from "react-query";
import { Tag as TTag } from "@ts-types/generated";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const fetchTag = async (id: string) => {
  const { data } = await Tag.find(`${API_ENDPOINTS.TAGS}/${id}`);
  return { tag: data };
};

type IProps = {
  tag: TTag;
};

export const useTagQuery = (id: string) => {
  return useQuery<IProps, Error>([API_ENDPOINTS.TAGS, id], () => fetchTag(id));
};

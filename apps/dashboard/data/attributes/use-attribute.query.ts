import Attribute from "@repositories/attribute";
import { useQuery } from "react-query";
import { Attribute as TAttribute } from "@ts-types/generated";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const fetchAttribute = async (id: string) => {
  const { data } = await Attribute.find(`${API_ENDPOINTS.ATTRIBUTES}/${id}`);
  return { attribute: data };
};

type Props = {
  attribute: TAttribute;
};

export const useAttributeQuery = (id: string) => {
  return useQuery<Props, Error>([API_ENDPOINTS.ATTRIBUTES, id], () =>
    fetchAttribute(id)
  );
};

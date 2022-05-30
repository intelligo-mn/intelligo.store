import AttributeValue from "@intelligo/dashboard/repositories/attribute-value";
import { useQuery } from "react-query";
import { AttributeValue as TAttributeValue } from "@intelligo/dashboard/ts-types/generated";
import { API_ENDPOINTS } from "@intelligo/dashboard/utils/api/endpoints";

export const fetchAttributeValue = async (id: string) => {
  const { data } = await AttributeValue.find(
    `${API_ENDPOINTS.ATTRIBUTE_VALUES}/${id}`
  );
  return { attributeValue: data };
};

type Props = {
  attributeValue: TAttributeValue;
};

export const useAttributeValueQuery = (id: string) => {
  return useQuery<Props, Error>([API_ENDPOINTS.ATTRIBUTE_VALUES, id], () =>
    fetchAttributeValue(id)
  );
};

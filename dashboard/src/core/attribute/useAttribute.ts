import { CreateAttributeInput, CreateAttributeMutation, DeleteAttributeInput, DeleteAttributeMutation, ListAttributesQuery, UpdateAttributeInput, UpdateAttributeMutation } from "@common/generated-types";
import { createAttribute, deleteAttribute, updateAttribute } from "@graphql/mutations";
import { listAttributes } from "@graphql/queries";
import { API } from "aws-amplify";

export const useAttribute = () => {
  const addAttribute = async (input: CreateAttributeInput): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: createAttribute,
        variables: {
          input: input,
        },
      })) as {
        data: CreateAttributeMutation;
      };
      return data.createAttribute;
    } catch (error: any) {
      console.error(error);
    }
  };

  const editAttribute = async (input: UpdateAttributeInput): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: updateAttribute,
        variables: {
          input: input,
        },
      })) as {
        data: UpdateAttributeMutation;
      };
      return data.updateAttribute;
    } catch (error: any) {
      console.error(error);
    }
  };

  const getAttributes = async (): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: listAttributes,
        
      })) as {
        data: ListAttributesQuery;
      };
      return data.listAttributes;
    } catch (error: any) {
      console.error(error);
    }
  };


  const removeAttribute = async (id: string): Promise<any> => {
    try {
      const input: DeleteAttributeInput = {
        id: id
      }
      const { data } = (await API.graphql({
        query: deleteAttribute,
        variables: {
          input: input,
        },
      })) as {
        data: DeleteAttributeMutation;
      };
      return data.deleteAttribute;
    } catch (error: any) {
      console.error(error);
    }
  };


  return {
    addAttribute,
    getAttributes,
    removeAttribute,
    editAttribute,
  };
};

export default useAttribute;

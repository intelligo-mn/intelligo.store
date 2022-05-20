import { CreateTypeInput, CreateTypeMutation, DeleteTypeInput, DeleteTypeMutation, ListCategoriesQuery, UpdateTypeInput, UpdateTypeMutation } from "@common/generated-types";
import { createType, deleteType, updateType } from "@graphql/mutations";
import { listCategories } from "@graphql/queries";
import { API } from "aws-amplify";
import { useState } from "react";

export const useType = () => {
  const [loading, setLoading] = useState();
  const addType = async (input: CreateTypeInput): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: createType,
        variables: {
          input: input,
        },
      })) as {
        data: CreateTypeMutation;
      };
      return data.createType;
    } catch (error: any) {
      console.error(error);
    }
  };

  const editType = async (input: UpdateTypeInput): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: updateType,
        variables: {
          input: input,
        },
      })) as {
        data: UpdateTypeMutation;
      };
      return data.updateType;
    } catch (error: any) {
      console.error(error);
    }
  };

  const getType = async (): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: listCategories,
        
      })) as {
        data: ListCategoriesQuery;
      };
      return data.listCategories;
    } catch (error: any) {
      console.error(error);
    }
  };


  const removeType = async (id: string): Promise<any> => {
    try {
      const input: DeleteTypeInput = {
        id: id
      }
      const { data } = (await API.graphql({
        query: deleteType,
        variables: {
          input: input,
        },
      })) as {
        data: DeleteTypeMutation;
      };
      return data.deleteType;
    } catch (error: any) {
      console.error(error);
    }
  };


  return {
    addType,
    getType,
    removeType,
    editType,
    loading
  };
};

export default useType;

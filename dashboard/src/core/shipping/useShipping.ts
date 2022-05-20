import { CreateShippingInput, CreateShippingMutation, DeleteShippingInput, DeleteShippingMutation, ListCategoriesQuery, UpdateShippingInput, UpdateShippingMutation } from "@common/generated-types";
import { createShipping, deleteShipping, updateShipping } from "@graphql/mutations";
import { listCategories } from "@graphql/queries";
import { API } from "aws-amplify";
import { useState } from "react";

export const useShipping = () => {
  const [loading, setLoading] = useState();
  const addShipping = async (input: CreateShippingInput): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: createShipping,
        variables: {
          input: input,
        },
      })) as {
        data: CreateShippingMutation;
      };
      return data.createShipping;
    } catch (error: any) {
      console.error(error);
    }
  };

  const editShipping = async (input: UpdateShippingInput): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: updateShipping,
        variables: {
          input: input,
        },
      })) as {
        data: UpdateShippingMutation;
      };
      return data.updateShipping;
    } catch (error: any) {
      console.error(error);
    }
  };

  const getShipping = async (): Promise<any> => {
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


  const removeShipping = async (id: string): Promise<any> => {
    try {
      const input: DeleteShippingInput = {
        id: id
      }
      const { data } = (await API.graphql({
        query: deleteShipping,
        variables: {
          input: input,
        },
      })) as {
        data: DeleteShippingMutation;
      };
      return data.deleteShipping;
    } catch (error: any) {
      console.error(error);
    }
  };


  return {
    addShipping,
    getShipping,
    removeShipping,
    editShipping,
    loading
  };
};

export default useShipping;

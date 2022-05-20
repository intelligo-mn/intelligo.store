import { CreateOrderInput, CreateOrderMutation, DeleteOrderInput, DeleteOrderMutation, ListCategoriesQuery, UpdateOrderInput, UpdateOrderMutation } from "@common/generated-types";
import { createOrder, deleteOrder, updateOrder } from "@graphql/mutations";
import { listCategories } from "@graphql/queries";
import { API } from "aws-amplify";
import { useState } from "react";

export const useOrder = () => {
  const [loading, setLoading] = useState();
  const addOrder = async (input: CreateOrderInput): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: createOrder,
        variables: {
          input: input,
        },
      })) as {
        data: CreateOrderMutation;
      };
      return data.createOrder;
    } catch (error: any) {
      console.error(error);
    }
  };

  const editOrder = async (input: UpdateOrderInput): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: updateOrder,
        variables: {
          input: input,
        },
      })) as {
        data: UpdateOrderMutation;
      };
      return data.updateOrder;
    } catch (error: any) {
      console.error(error);
    }
  };

  const getOrder = async (): Promise<any> => {
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


  const removeOrder = async (id: string): Promise<any> => {
    try {
      const input: DeleteOrderInput = {
        id: id
      }
      const { data } = (await API.graphql({
        query: deleteOrder,
        variables: {
          input: input,
        },
      })) as {
        data: DeleteOrderMutation;
      };
      return data.deleteOrder;
    } catch (error: any) {
      console.error(error);
    }
  };


  return {
    addOrder,
    getOrder,
    removeOrder,
    editOrder,
    loading
  };
};

export default useOrder;

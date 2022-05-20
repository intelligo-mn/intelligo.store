import { CreateWithdrawInput, CreateWithdrawMutation, DeleteWithdrawInput, DeleteWithdrawMutation, ListCategoriesQuery, UpdateWithdrawInput, UpdateWithdrawMutation } from "@common/generated-types";
import { createWithdraw, deleteWithdraw, updateWithdraw } from "@graphql/mutations";
import { listCategories } from "@graphql/queries";
import { API } from "aws-amplify";
import { useState } from "react";

export const useWithdraw = () => {
  const [loading, setLoading] = useState();
  const addWithdraw = async (input: CreateWithdrawInput): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: createWithdraw,
        variables: {
          input: input,
        },
      })) as {
        data: CreateWithdrawMutation;
      };
      return data.createWithdraw;
    } catch (error: any) {
      console.error(error);
    }
  };

  const editWithdraw = async (input: UpdateWithdrawInput): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: updateWithdraw,
        variables: {
          input: input,
        },
      })) as {
        data: UpdateWithdrawMutation;
      };
      return data.updateWithdraw;
    } catch (error: any) {
      console.error(error);
    }
  };

  const getWithdraw = async (): Promise<any> => {
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


  const removeWithdraw = async (id: string): Promise<any> => {
    try {
      const input: DeleteWithdrawInput = {
        id: id
      }
      const { data } = (await API.graphql({
        query: deleteWithdraw,
        variables: {
          input: input,
        },
      })) as {
        data: DeleteWithdrawMutation;
      };
      return data.deleteWithdraw;
    } catch (error: any) {
      console.error(error);
    }
  };


  return {
    addWithdraw,
    getWithdraw,
    removeWithdraw,
    editWithdraw,
    loading
  };
};

export default useWithdraw;

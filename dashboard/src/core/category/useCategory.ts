import { CreateCategoryInput, CreateCategoryMutation, DeleteCategoryInput, DeleteCategoryMutation, ListCategoriesQuery, UpdateCategoryInput, UpdateCategoryMutation } from "@common/generated-types";
import { createCategory, deleteCategory, updateCategory } from "@graphql/mutations";
import { listCategories } from "@graphql/queries";
import { API } from "aws-amplify";
import { useState } from "react";

export const useCategory = () => {
  const [loading, setLoading] = useState();
  const addCategory = async (input: CreateCategoryInput): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: createCategory,
        variables: {
          input: input,
        },
      })) as {
        data: CreateCategoryMutation;
      };
      return data.createCategory;
    } catch (error: any) {
      console.error(error);
    }
  };

  const editCategory = async (input: UpdateCategoryInput): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: updateCategory,
        variables: {
          input: input,
        },
      })) as {
        data: UpdateCategoryMutation;
      };
      return data.updateCategory;
    } catch (error: any) {
      console.error(error);
    }
  };

  const getCategory = async (): Promise<any> => {
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


  const removeCategory = async (id: string): Promise<any> => {
    try {
      const input: DeleteCategoryInput = {
        id: id
      }
      const { data } = (await API.graphql({
        query: deleteCategory,
        variables: {
          input: input,
        },
      })) as {
        data: DeleteCategoryMutation;
      };
      return data.deleteCategory;
    } catch (error: any) {
      console.error(error);
    }
  };


  return {
    addCategory,
    getCategory,
    removeCategory,
    editCategory,
    loading
  };
};

export default useCategory;

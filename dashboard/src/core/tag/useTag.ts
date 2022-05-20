import { CreateTagInput, CreateTagMutation, DeleteTagInput, DeleteTagMutation, ListCategoriesQuery, UpdateTagInput, UpdateTagMutation } from "@common/generated-types";
import { createTag, deleteTag, updateTag } from "@graphql/mutations";
import { listCategories } from "@graphql/queries";
import { API } from "aws-amplify";
import { useState } from "react";

export const useTag = () => {
  const [loading, setLoading] = useState();
  const addTag = async (input: CreateTagInput): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: createTag,
        variables: {
          input: input,
        },
      })) as {
        data: CreateTagMutation;
      };
      return data.createTag;
    } catch (error: any) {
      console.error(error);
    }
  };

  const editTag = async (input: UpdateTagInput): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: updateTag,
        variables: {
          input: input,
        },
      })) as {
        data: UpdateTagMutation;
      };
      return data.updateTag;
    } catch (error: any) {
      console.error(error);
    }
  };

  const getTag = async (): Promise<any> => {
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


  const removeTag = async (id: string): Promise<any> => {
    try {
      const input: DeleteTagInput = {
        id: id
      }
      const { data } = (await API.graphql({
        query: deleteTag,
        variables: {
          input: input,
        },
      })) as {
        data: DeleteTagMutation;
      };
      return data.deleteTag;
    } catch (error: any) {
      console.error(error);
    }
  };


  return {
    addTag,
    getTag,
    removeTag,
    editTag,
    loading
  };
};

export default useTag;

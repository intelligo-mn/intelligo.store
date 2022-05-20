import { CreateEntityInput, CreateEntityMutation, DeleteEntityInput, DeleteEntityMutation, ListCategoriesQuery, UpdateEntityInput, UpdateEntityMutation } from "@common/generated-types";
import { createEntity, deleteEntity, updateEntity } from "@graphql/mutations";
import { listCategories } from "@graphql/queries";
import { API } from "aws-amplify";
import { useState } from "react";

export const useEntity = () => {
  const [loading, setLoading] = useState();
  const addEntity = async (input: CreateEntityInput): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: createEntity,
        variables: {
          input: input,
        },
      })) as {
        data: CreateEntityMutation;
      };
      return data.createEntity;
    } catch (error: any) {
      console.error(error);
    }
  };

  const editEntity = async (input: UpdateEntityInput): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: updateEntity,
        variables: {
          input: input,
        },
      })) as {
        data: UpdateEntityMutation;
      };
      return data.updateEntity;
    } catch (error: any) {
      console.error(error);
    }
  };

  const getEntity = async (): Promise<any> => {
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


  const removeEntity = async (id: string): Promise<any> => {
    try {
      const input: DeleteEntityInput = {
        id: id
      }
      const { data } = (await API.graphql({
        query: deleteEntity,
        variables: {
          input: input,
        },
      })) as {
        data: DeleteEntityMutation;
      };
      return data.deleteEntity;
    } catch (error: any) {
      console.error(error);
    }
  };


  return {
    addEntity,
    getEntity,
    removeEntity,
    editEntity,
    loading
  };
};

export default useEntity;

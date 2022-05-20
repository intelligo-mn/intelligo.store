import { CreateOrganizationInput, CreateOrganizationMutation, DeleteOrganizationInput, DeleteOrganizationMutation, ListCategoriesQuery, UpdateOrganizationInput, UpdateOrganizationMutation } from "@common/generated-types";
import { createOrganization, deleteOrganization, updateOrganization } from "@graphql/mutations";
import { listCategories } from "@graphql/queries";
import { API } from "aws-amplify";
import { useState } from "react";

export const useOrganization = () => {
  const [loading, setLoading] = useState();
  const addOrganization = async (input: CreateOrganizationInput): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: createOrganization,
        variables: {
          input: input,
        },
      })) as {
        data: CreateOrganizationMutation;
      };
      return data.createOrganization;
    } catch (error: any) {
      console.error(error);
    }
  };

  const editOrganization = async (input: UpdateOrganizationInput): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: updateOrganization,
        variables: {
          input: input,
        },
      })) as {
        data: UpdateOrganizationMutation;
      };
      return data.updateOrganization;
    } catch (error: any) {
      console.error(error);
    }
  };

  const getOrganization = async (): Promise<any> => {
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


  const removeOrganization = async (id: string): Promise<any> => {
    try {
      const input: DeleteOrganizationInput = {
        id: id
      }
      const { data } = (await API.graphql({
        query: deleteOrganization,
        variables: {
          input: input,
        },
      })) as {
        data: DeleteOrganizationMutation;
      };
      return data.deleteOrganization;
    } catch (error: any) {
      console.error(error);
    }
  };


  return {
    addOrganization,
    getOrganization,
    removeOrganization,
    editOrganization,
    loading
  };
};

export default useOrganization;

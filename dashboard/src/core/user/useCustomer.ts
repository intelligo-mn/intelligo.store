import {
  CreateUserInput,
  CreateUserMutation,
  DeleteUserInput,
  ListUsersQuery,
  UpdateUserInput,
  UpdateUserMutation,
} from "@common/generated-types";
import { createUser, deleteUser, updateUser } from "@graphql/mutations";
import { listUsers } from "@graphql/queries";
import { API } from "aws-amplify";
import { useState } from "react";

export const useCustomer = () => {
  const [loading, setLoading] = useState<boolean>();
  const createCustomer = async (input: CreateUserInput): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: createUser,
        variables: {
          input: input,
        },
      })) as {
        data: CreateUserMutation;
      };
      return data.createUser;
    } catch (error: any) {
      console.error(error);
    }
  };

  const updateCustomer = async (input: UpdateUserInput): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: updateUser,
        variables: {
          input: input,
        },
      })) as {
        data: UpdateUserMutation;
      };
      return data.updateUser;
    } catch (error: any) {
      console.error(error);
    }
  };

  const listCustomer = async (): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: listUsers,
      })) as {
        data: ListUsersQuery;
      };
      return data.listUsers;
    } catch (error: any) {
      console.error(error);
    }
  };

  const removeCustomer = async (id: string): Promise<any> => {
    try {
      const input: DeleteUserInput = {
        id: id,
      };
      const { data } = (await API.graphql({
        query: deleteUser,
        variables: {
          input: input,
        },
      })) as {
        data: DeleteUserInput;
      };
      return data.id;
    } catch (error: any) {
      console.error(error);
    }
  };

  return {
    loading,
    createCustomer,
    listCustomer,
    removeCustomer,
    updateCustomer,
  };
};

export default useCustomer;

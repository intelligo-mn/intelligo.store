import { CreateCouponInput, CreateCouponMutation, DeleteCouponInput, DeleteCouponMutation, ListCategoriesQuery, UpdateCouponInput, UpdateCouponMutation } from "@common/generated-types";
import { createCoupon, deleteCoupon, updateCoupon } from "@graphql/mutations";
import { listCategories } from "@graphql/queries";
import { API } from "aws-amplify";
import { useState } from "react";

export const useCoupon = () => {
  const [loading, setLoading] = useState();
  const addCoupon = async (input: CreateCouponInput): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: createCoupon,
        variables: {
          input: input,
        },
      })) as {
        data: CreateCouponMutation;
      };
      return data.createCoupon;
    } catch (error: any) {
      console.error(error);
    }
  };

  const editCoupon = async (input: UpdateCouponInput): Promise<any> => {
    try {
      const { data } = (await API.graphql({
        query: updateCoupon,
        variables: {
          input: input,
        },
      })) as {
        data: UpdateCouponMutation;
      };
      return data.updateCoupon;
    } catch (error: any) {
      console.error(error);
    }
  };

  const getCoupon = async (): Promise<any> => {
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


  const removeCoupon = async (id: string): Promise<any> => {
    try {
      const input: DeleteCouponInput = {
        id: id
      }
      const { data } = (await API.graphql({
        query: deleteCoupon,
        variables: {
          input: input,
        },
      })) as {
        data: DeleteCouponMutation;
      };
      return data.deleteCoupon;
    } catch (error: any) {
      console.error(error);
    }
  };


  return {
    addCoupon,
    getCoupon,
    removeCoupon,
    editCoupon,
    loading
  };
};

export default useCoupon;

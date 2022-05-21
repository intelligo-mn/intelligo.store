import Base from "./base";

import {
  ApproveShopInput,
  ShopInput,
  AddStaffInput,
} from "@ts-types/generated";

class Shop extends Base<ShopInput, ShopInput> {
  staffs = (url: string) => {
    return this.http(url, "get");
  };

  approve = async (url: string, variables: ApproveShopInput) => {
    return this.http<ApproveShopInput>(url, "post", variables);
  };

  disapprove = async (url: string, variables: { id: string }) => {
    return this.http<{ id: string }>(url, "post", variables);
  };

  addStaff = async (url: string, variables: AddStaffInput) => {
    return this.http<AddStaffInput>(url, "post", variables);
  };
  removeStaff = async (url: string, id: string) => {
    return this.http<{ id: string }>(url, "delete", { id });
  };
}

export default new Shop();

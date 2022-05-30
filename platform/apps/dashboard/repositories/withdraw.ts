import Base from "./base";

import { ApproveWithdrawInput, CreateWithdrawInput } from "apps/dashboard/ts-types/generated";

class Withdraw extends Base<CreateWithdrawInput, CreateWithdrawInput> {
  approve = async (url: string, variables: ApproveWithdrawInput) => {
    return this.http<ApproveWithdrawInput>(url, "post", variables);
  };
}

export default new Withdraw();

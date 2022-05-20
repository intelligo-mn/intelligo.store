import Base from "./base";

// import { CreateRefundInput, UpdateRefundInput } from "@ts-types/generated";
interface CreateRefundInput {}
interface UpdateRefundInput {}

class Refunds extends Base<CreateRefundInput, UpdateRefundInput> {}

export default new Refunds();

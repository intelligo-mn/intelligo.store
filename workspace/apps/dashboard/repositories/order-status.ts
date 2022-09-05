import { OrderStatusInput, OrderStatusUpdateInput } from "@ts-types/generated";
import Base from "./base";

class OrderStatus extends Base<OrderStatusInput, OrderStatusUpdateInput> {}

export default new OrderStatus();

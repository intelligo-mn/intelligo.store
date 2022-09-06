import { OrderStatusInput, OrderStatusUpdateInput } from "apps/dashboard/ts-types/generated";
import Base from "./base";

class OrderStatus extends Base<OrderStatusInput, OrderStatusUpdateInput> {}

export default new OrderStatus();

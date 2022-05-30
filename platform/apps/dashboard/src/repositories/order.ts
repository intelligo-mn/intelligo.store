import {
	CheckoutVerificationInput,
	CreateOrder,
	UpdateOrder,
} from "@intelligo/dashboard/ts-types/generated";
import Base from "./base";

class Order extends Base<CreateOrder, UpdateOrder> {
	verify = async (url: string, variables: CheckoutVerificationInput) => {
		return this.http<CheckoutVerificationInput>(url, "post", variables);
	};
}

export default new Order();

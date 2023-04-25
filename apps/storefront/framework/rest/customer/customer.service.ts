import { CoreApi } from '@framework/utils/core-api';
import { API_ENDPOINTS } from '@framework/utils/endpoints';

export type CustomerType = {
  id: string;
  [key: string]: unknown;
};
export type ContactType = {
  name: string;
  email: string;
  subject: string;
  description: string;
};

class Customer extends CoreApi {
  constructor(_base_path: string) {
    super(_base_path);
  }
  updateCustomer(input: CustomerType) {
    return this.http
      .put(this._base_path + '/' + input.id, input)
      .then((res) => res.data);
  }
  contact(input: ContactType) {
    return this.http.post(API_ENDPOINTS.CONTACT, input).then((res) => res.data);
  }
  deleteAddress({ id }: { id: string }) {
    return this.http
      .delete(`${API_ENDPOINTS.ADDRESS}/${id}`)
      .then((res) => res.data);
  }
}

export const CustomerService = new Customer(API_ENDPOINTS.CUSTOMERS);

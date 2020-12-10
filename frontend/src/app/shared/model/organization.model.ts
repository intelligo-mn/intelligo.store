import { IContact } from 'src/app/shared/model/contact.model';
import { ICategory } from 'src/app/shared/model/category.model';
import { ICustomer } from 'src/app/shared/model/customer.model';
import { OrganizationStatus } from 'src/app/shared/model/enums/organization-status.model';
import { OrganizationType } from 'src/app/shared/model/enums/organization-type.model';

export interface IOrganization {
  id?: number;
  name?: string;
  status?: OrganizationStatus;
  type?: OrganizationType;
  contact?: IContact;
  distributeType?: ICategory;
  manager?: ICustomer;
}

export class Organization implements IOrganization {
  constructor(
    public id?: number,
    public name?: string,
    public status?: OrganizationStatus,
    public type?: OrganizationType,
    public contact?: IContact,
    public distributeType?: ICategory,
    public manager?: ICustomer
  ) {}
}

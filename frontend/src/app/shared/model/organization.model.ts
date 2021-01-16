import { IContact } from 'src/app/shared/model/contact.model';
import { ICategory } from 'src/app/shared/model/category.model';
import { IUser } from 'src/app/shared/model/user.model';
import { OrganizationStatus } from 'src/app/shared/model/enums/organization-status.model';
import { OrganizationType } from 'src/app/shared/model/enums/organization-type.model';

export interface IOrganization {
  id?: number;
  name?: string;
  status?: OrganizationStatus;
  type?: OrganizationType;
  phone?: number;
  email?: string;
  address?: string;
  distributeType?: ICategory;
  manager?: IUser;
}

export class Organization implements IOrganization {
  constructor(
    public id?: number,
    public name?: string,
    public status?: OrganizationStatus,
    public type?: OrganizationType,
    public phone?: number,
    public email?: string,
    public address?: string,
    public distributeType?: ICategory,
    public manager?: IUser
  ) {}
}


export interface IUser {
  activated?: boolean;
  activationKey?: string;
  authorities?: string[];
  createdBy?: string;
  createdDate?: string;
  email?: string;
  firstName?: string;
  id?: string;
  imageUrl?: string;
  langKey?: string;
  lastModifiedBy?: string;
  lastModifiedDate?: string;
  lastName?: string;
  login?: string;
  resetDate?: string;
  resetKey?: string;
}

export class User implements IUser {
  constructor(
    public activated?: boolean,
    public activationKey?: string,
    public authorities?: string[],
    public createdBy?: string,
    public createdDate?: string,
    public email?: string,
    public firstName?: string,
    public id?: string,
    public imageUrl?: string,
    public langKey?: string,
    public lastModifiedBy?: string,
    public lastModifiedDate?: string,
    public lastName?: string,
    public login?: string,
    public resetDate?: string,
    public resetKey?: string
  ) {}
}

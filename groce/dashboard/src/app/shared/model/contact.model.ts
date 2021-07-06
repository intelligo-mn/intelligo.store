export interface IContact {
  id?: number;
  phone?: number;
  email?: string;
  address?: string;
  lat?: string;
  lon?: string;
}

export class Contact implements IContact {
  constructor(
    public id?: number,
    public phone?: number,
    public email?: string,
    public address?: string,
    public lat?: string,
    public lon?: string
  ) {}
}

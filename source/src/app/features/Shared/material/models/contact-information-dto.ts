export class ContactInformation implements IContactInformation{
  Fname: string = '';
  Lname: string = '';
  Address: string = '';
  LongAddress: string = '';
  City: string = '';
  State: string = '';
  PostalCode: string = '';
  Telephone: number = 0;
  Email: string= '';
  LinkedIn: string = '';
}

export interface IContactInformation{
  Fname: string;
  Lname: string;
  Address: string;
  LongAddress : string;
  City: string;
  State: string;
  PostalCode: string;
  Telephone: number;
  Email: string;
  LinkedIn: string;
}

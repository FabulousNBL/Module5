export interface Ticket {
  id?: number;
  price?: number;
  fromPlace?: string;
  toPlace?: string;
  day?: string;
  atTime?: string;
  company:{
    id?: number;
    name?: string;
  };
  count?: number;
}

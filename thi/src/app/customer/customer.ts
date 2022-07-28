export interface Customer {
  id?: number,
  name: string,
  idCard: number,
  phone: string,
  typeCustomer: {
    typeId?: number,
    typeName?: string
  }
}

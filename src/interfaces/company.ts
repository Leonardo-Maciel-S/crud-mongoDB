export interface Company {
  name: string;
  cnpj: string;
  address: {
    number: number;
    street: number;
    state: string;
    city: string;
    postalCode: string;
  };
}

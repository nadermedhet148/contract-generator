export default class Contract {

  pdfTemplateUrl: string;
  name: string;
  phone: string;
  number: string;
  email: string;
  address: string;
  rentAmount: number;
  contractId : number;
  userId : number;

  constructor(
    pdfTemplateUrl: string,
    name: string,
    phone: string,
    number: string,
    email: string,
    address: string,
    rentAmount: number,
    contractId : number,
    userId : number,
  ) {
    this.pdfTemplateUrl = pdfTemplateUrl;
    this.name = name;
    this.phone = phone;
    this.number = number;
    this.email = email;
    this.address = address;
    this.rentAmount = rentAmount;
    this.contractId = contractId; 
    this.userId = userId; 
  }

}

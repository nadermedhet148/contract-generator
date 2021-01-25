export default class Contract {
  pdfTemplateUrl: string;
  name: string;
  phone: string;
  uniqueIdentifer: string;
  email: string;
  address: string;
  rentAmount: number;
  contractId: number;
  userId: number;

  constructor(data: {
    pdfTemplateUrl: string;
    name: string;
    phone: string;
    email: string;
    address: string;
    rentAmount: number;
    contractId?: number;
    userId?: number;
    uniqueIdentifer: string;
  }) {
    this.pdfTemplateUrl = data.pdfTemplateUrl;
    this.name = data.name;
    this.phone = data.phone;
    this.email = data.email;
    this.address = data.address;
    this.rentAmount = data.rentAmount;
    this.contractId = data.contractId;
    this.userId = data.userId;
    this.uniqueIdentifer = data.uniqueIdentifer;
  }
}

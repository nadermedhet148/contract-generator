
export default class PdfManger {
  generateContract(
    pdfTemplate: Buffer,
    pageData: {
      name: string;
      phone: string;
      number: string;
      email: string;
      address: string;
      rentAmount: number;
    }
  ): Promise<Buffer> {
    return null;
  }
}

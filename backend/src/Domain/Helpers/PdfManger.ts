import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export default class PdfManger {
  async generateContract(
    pdfTemplate: Buffer,
    pageData: {
      name: string;
      phone: string;
      email: string;
      address: string;
      rentAmount: number;
    }
  ): Promise<Buffer> {

    const pdfDoc = await PDFDocument.load(pdfTemplate)
    
    
    const page = pdfDoc.addPage()
    const { width, height } = page.getSize()
    
    page.drawText([
      `Contract Info:`,
      `  • Name : ${pageData.name} `,
      `  • Phone : ${pageData.phone} `,
      `  • Email : ${pageData.email} `,
      `  • address : ${pageData.address} `,
      `  • Rent Amount : ${pageData.rentAmount} `,
    ].join('\n'), {
      x: 5,
      y: height / 2 + 300,
      size: 18,
    })
    
    
    const pdfBytes = await pdfDoc.save()
    return Buffer.from(pdfBytes.buffer);
  }
}

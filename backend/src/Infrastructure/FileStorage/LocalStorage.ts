import { writeFile } from "fs";
import IStorageManger from "../../Domain/Interfaces/Storage/IStorageManger";

export default class LocalStorage implements IStorageManger {
  async writeFile(file: Buffer, name: string): Promise<string> {
    writeFile(`src/uploads/${name}.pdf`, file, (result) => {});
    return `uploads/${name}.pdf`;
  }
}

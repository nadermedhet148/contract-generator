import { writeFile } from "fs";
import IStorageManger from "../../Domain/Interfaces/Storage/IStorageManger";

export default class LocalStorage implements IStorageManger {
  async writeFile(file: Buffer, name: string): Promise<string> {
    const location = `uploads/${name}.pdf`;
    writeFile(location, file, (result) => {});
    return location;
  }
}

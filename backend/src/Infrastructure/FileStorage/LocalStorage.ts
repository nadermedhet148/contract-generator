import IStorageManger from "../../Domain/Interfaces/Storage/IStorageManger";

export default class LocalStorage implements IStorageManger {
    readFile(location: string): Promise<Buffer> {
        throw new Error("Method not implemented.");
    }
    writeFile(file: Buffer, location: string): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    
}
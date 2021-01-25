export default interface IStorageManger {
    readFile(name : string) : Promise<Buffer>;
    writeFile(file : Buffer,name : string) : Promise<string>;

}
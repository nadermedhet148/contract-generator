export default interface IStorageManger {
    readFile(location : string) : Promise<Buffer>;
    writeFile(file : Buffer,location : string) : Promise<Boolean>;

}
export default interface IStorageManger {
    writeFile(file : Buffer ,name : string) : Promise<string>;

}
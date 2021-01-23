import Contract from "./Contract";

export default class User {
    username : string;
    userId : number;
    contracts : Contract[];

    constructor(
        username : string,
        userId : string,
        contracts : Contract[],
    ){
        this.username = username;
        this.contracts = contracts;
        this.userId;
    }
}
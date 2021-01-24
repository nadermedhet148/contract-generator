import Contract from "./Contract";

export default class User {
    username : string;
    userId : number;
    contracts : Contract[];

    constructor(
        username : string,
        userId : number,
        contracts : Contract[],
    ){
        this.username = username;
        this.contracts = contracts;
        this.userId = userId;
    }
}
import IDomainError from "./IDomainError";

export default class ContractNotFoundError implements IDomainError {
    error = {
        code:404,
        message: 'sorry this contract not found'
    }
}

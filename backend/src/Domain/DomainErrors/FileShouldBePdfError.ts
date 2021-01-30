import IDomainError from "./IDomainError";

export default class FileShouldBePdfError implements IDomainError {
    error = {
        code:400,
        message: 'sorry this file is not a pdf format'
    }
}

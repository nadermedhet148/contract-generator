import IDomainError from "../../../../Domain/DomainErrors/IDomainError";

export default (error : IDomainError) => {
    return {
        message: error.error.message,
        errors : error.error.errors,
        code: error.error.code,
    }
}
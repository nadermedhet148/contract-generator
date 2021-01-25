import IDomainError from "../../../../Domain/DomainErrors/IDomainError";

export default (error : IDomainError) => {
    return {
        data : {
            message: error.error.message,
            errors : error.error.errors,
        },
        code: error.error.code,
    }
}
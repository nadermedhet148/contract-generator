import IDomainError from "../../../../Domain/DomainErrors/IDomainError";

export default (error : IDomainError) => {
    console.log(error);
    
    return {
        data : {
            message: error.error.message,
            errors : error.error.errors,
        },
        code: error.error.code,
    }
}
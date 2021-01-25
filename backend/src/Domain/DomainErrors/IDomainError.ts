export default interface IDomainError {
    error: {
        message: string;
        errors?: {
          [key : string]: string[];
        };
        code: number
      };
}
export default class InvalidInputError {
  error: {
    message: string;
    errors: {
      [key : string]: string[];
    };
    code: number
  };

  constructor(
    message: string,
    errors: {
      [key : string]: string[];
    }
  ) {
    this.error = {
      message,
      errors,
      code : 400
    };
  }
}

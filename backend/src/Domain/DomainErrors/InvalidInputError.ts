export default class InvalidInputError {
  error: {
    message: string;
    errors: {
      [key : string]: string[];
    };
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
    };
  }
}

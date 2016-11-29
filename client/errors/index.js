export class ParameterError extends Error {
  constructor(message, payload) {
    super();
    this.message = message || 'PARAMETER_ERROR';
    this.payload = payload;
  }
}

export class ValidateFailed extends Error {
  constructor(message, payload) {
    super();
    this.message = message;
    this.payload = payload;
  }
}

export class PayloadNotCheck extends Error {
  constructor(message, payload) {
    super();
    this.message = message;
    this.payload = payload;
  }
}

//

import { HttpError } from 'routing-controllers';

export class ApiError extends HttpError {
  errorCode?: string | undefined;
    newsBiteCode: string | undefined;
  constructor(status: number, message?: string, newsBiteCode?: string) {
    super(status, message);
    this.errorCode = newsBiteCode;
  }
}

import { Request } from 'express';

/**
 * This is the decoded access token format fetched from cyberark auth provider
 */


export interface UserJwtPayload {
  userEmail: string;
  userId: string;
  userName: string;
  platForm: string;
  phoneNumber; string;
}

export interface RequestWithUser extends Request {
  user?: UserJwtPayload;
}

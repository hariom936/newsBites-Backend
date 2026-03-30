import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class RegisterUser {
  @IsNotEmpty()
  userName: string;

  @IsEmail()
  userEmail: string;

  @MinLength(6)
  password: string;
}

export class LoginUser {
  @IsEmail()
  userEmail: string;

  @IsNotEmpty()
  password: string;
}
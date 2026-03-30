import {
  JsonController,
  Post,
  Body,
  BodyParam,
} from "routing-controllers";
import { Service, Container } from "typedi";

import { UserService } from "../../services/UserService";

@Service()
@JsonController("/auth")
export class AuthController {

  private userService = Container.get(UserService);

  @Post("/register")
  async register(@Body() body: any) {
    return this.userService.register(body);
  }


  @Post("/login")
  async login(@Body() body: any): Promise<any> {
    return this.userService.login(body);
  }
}
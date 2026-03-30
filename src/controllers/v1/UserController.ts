import {
  JsonController,
  UseBefore,
  Get,
  Post,
  Body,
  Res,
  QueryParams,
  Patch,
  Delete,
  Req,
} from "routing-controllers";
import { Service } from "typedi";
import { UserService } from "../../services/UserService";
import { AuthMiddleware } from "../../middlewares/AuthMiddleware";

@Service()
@UseBefore(AuthMiddleware)
@JsonController("/user")
export class UserController {

  constructor(private userService: UserService) {}

  @Patch("/preferences")
  updatePreferences(@Req() req: any, @Body() body: any) {
    return this.userService.updatePreferences(
      req.user.id,
      body.preferences
    );
  }

  @Get("/saved")
  getSaved(@Req() req: any) {
    return this.userService.getSavedArticles(req.user.id);
  }

  @Post("/save")
  toggleSave(@Req() req: any, @Body() body: any) {
    return this.userService.toggleSaveArticle(
      req.user.id,
      body.articleId
    );
  }
}
import {
  JsonController,
  Get,
  QueryParam,
  UseBefore
} from "routing-controllers";

import { Service } from "typedi";
import { FeedService } from "../../services/FeedService";
import { AuthMiddleware } from "../../middlewares/AuthMiddleware";

@Service()
@UseBefore(AuthMiddleware)
@JsonController("/feed")
export class FeedController {

  constructor(private service: FeedService) {}

  @Get("/")
  getFeed(@QueryParam("page") page: number) {
    return this.service.getFeed(page);
  }
}
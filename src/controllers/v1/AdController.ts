import { JsonController, Get, Post, Body, Patch, Param, Delete } from "routing-controllers";
import { Service } from "typedi";
import { AdService } from "../../services/AdService";

@Service()
@JsonController("/ads")
export class AdController {
  constructor(private service: AdService) {}

  @Post("/")
  create(@Body() body: any) {
    return this.service.create(body);
  }

  @Get("/")
  getAll() {
    return this.service.getAll();
  }

  @Patch("/:id")
  update(@Param("id") id: string, @Body() body: any) {
    return this.service.update(id, body);
  }

  @Delete("/:id")
  delete(@Param("id") id: string) {
    return this.service.delete(id);
  }
}
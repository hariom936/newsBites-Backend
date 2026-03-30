import { JsonController, Get, Post, Body, Patch, Param, Delete } from "routing-controllers";
import { Service } from "typedi";
import { AgentService } from "../../services/AgentService";

@Service()
@JsonController("/admin/agents")
export class AgentController {

    constructor(private service: AgentService) { }

    @Post("/add")
    create(@Body() body: any) {
        return this.service.create(body);
    }

    @Get("/list")
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
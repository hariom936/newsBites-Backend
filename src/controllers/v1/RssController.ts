import { JsonController, Get } from "routing-controllers";
import { Service } from "typedi";
import { RssService } from "../../services/RssService";

@Service()
@JsonController("/admin/rss")
export class RssController {

  constructor(private rssService: RssService) {}

  @Get("/fetch-now")
  async fetchNow() {
    await this.rssService.fetchAndStore();

    return {
      message: "RSS fetched successfully"
    };
  }
}
// import { JsonController, Post, Body, Get, Param, Req, UseBefore } from "routing-controllers";
// import { Service } from "typedi";
// import { AdAnalyticsService } from "../../services/AdAnalyticsService";
// import { AuthMiddleware } from "../../middlewares/AuthMiddleware";

// @Service()
// @UseBefore(AuthMiddleware)
// @JsonController("/ads/analytics")
// export class AdAnalyticsController {
//   constructor(private service: AdAnalyticsService) {}

//   @Post("/view")
//   trackView(@Req() req: any, @Body() body: any) {
//     return this.service.trackView(req.user.id, body.adId);
//   }

//   @Post("/click")
//   trackClick(@Req() req: any, @Body() body: any) {
//     return this.service.trackClick(req.user.id, body.adId);
//   }

//   @Get("/:adId")
//   stats(@Param("adId") adId: string) {
//     return this.service.getStats(adId);
//   }
// }
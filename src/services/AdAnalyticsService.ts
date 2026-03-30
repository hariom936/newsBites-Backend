// import { Service } from "typedi";
// import { AdAnalyticsModel } from "../model/AdAnalytics";

// @Service()
// export class AdAnalyticsService {

//   async trackView(userId: string, adId: string) {
//     return AdAnalyticsModel.updateOne(
//       { userId, adId },
//       { $setOnInsert: { viewed: true } },
//       { upsert: true }
//     );
//   }

//   async trackClick(userId: string, adId: string) {
//     return AdAnalyticsModel.updateOne(
//       { userId, adId },
//       { $set: { clicked: true, viewed: true } },
//       { upsert: true }
//     );
//   }

//   async getStats(adId: string) {
//     const views = await AdAnalyticsModel.countDocuments({
//       adId,
//       viewed: true,
//     });

//     const clicks = await AdAnalyticsModel.countDocuments({
//       adId,
//       clicked: true,
//     });

//     return {
//       views,
//       clicks,
//       ctr: views ? (clicks / views) * 100 : 0,
//     };
//   }
// }
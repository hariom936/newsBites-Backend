import { Service } from "typedi";
import { ArticleModel } from "../model/Article";
import { AdModel } from "../model/Ad";

@Service()
export class FeedService {

  async getFeed(page: number = 1) {
    const limit = 10;
    const skip = (page - 1) * limit;

    // ✅ Use your ArticleModel
    const articles = await ArticleModel.find()
      .sort({ pubDate: -1 }) // IMPORTANT (you used pubDate)
      .skip(skip)
      .limit(limit);

    const ads = await AdModel.find({ isActive: true });

    let result: any[] = [];
    let adIndex = 0;

    articles.forEach((article, index) => {
      result.push({ type: "article", data: article });

      // 🔥 Inject ad after every 5 articles
      if ((index + 1) % 5 === 0 && ads.length > 0) {
        result.push({
          type: "ad",
          data: ads[adIndex % ads.length],
        });
        adIndex++;
      }
    });

    return result;
  }
}
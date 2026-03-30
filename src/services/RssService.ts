import { Service } from "typedi";
import Parser from "rss-parser";
import { AgentModel } from "../model/Agent";
import { ArticleModel } from "../model/Article";

const parser = new Parser();

@Service()
export class RssService {

  async fetchAndStore() {
    try {
      const agents = await AgentModel.find({ isActive: true });

      for (const agent of agents) {
        try {
          console.log(`Fetching from: ${agent.name}`);

          const feed = await parser.parseURL(agent.rssUrl);

          for (const item of feed.items) {
            // ✅ Prevent duplicates using link
            const exists = await ArticleModel.findOne({
              link: item.link,
            });

            if (!exists) {
              await ArticleModel.create({
                title: item.title,
                description: item.contentSnippet || item.content,
                link: item.link,
                pubDate: item.pubDate,
                category: agent.category,
                source: agent.name,
              });
            }
          }

        } catch (err) {
          console.log(`Error in agent: ${agent.name}`, err instanceof Error ? err.message : String(err));
        }
      }

    } catch (error) {
      console.log("RSS Fetch Error:", error);
    }
  }
}
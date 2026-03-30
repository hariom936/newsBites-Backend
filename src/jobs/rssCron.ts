import cron from "node-cron";
import { Container } from "typedi";
import { RssService } from "../services/RssService";

export const startRssCron = () => {
  const rssService = Container.get(RssService);

  // ⏱ Every 5 minutes
  cron.schedule("*/5 * * * *", async () => {
    console.log("⏳ Running RSS Fetch Job...");
    await rssService.fetchAndStore();
  });
};
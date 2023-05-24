import { Client } from "@notionhq/client";
import getSchedule from "./google/getSchedule.js";
import getMetadata from "./notion/getMetadata.js";
import getTeams from "./notion/getTeams.js";
import getNews from "./notion/getNews.js";

import fs from "fs";
import path from "path";

import dotenv from "dotenv";
import getPartners from "./notion/getPartners.js";

dotenv.config();

const notion = new Client({
  auth: process.env.NOTION,
});

const [schedule, metadata, teams, news, partners] = await Promise.all([
  getSchedule(),
  getMetadata(notion),
  getTeams(notion),
  getNews(notion),
  getPartners(notion),
]);

const output = {
  schedule,
  metadata,
  teams,
  news,
  partners,
};

fs.writeFileSync(
  path.join(process.cwd(), "cache", `output.json`),
  JSON.stringify(output)
);

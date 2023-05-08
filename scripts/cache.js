import { Client } from "@notionhq/client";
import getSchedule from "./google/getSchedule.js";
import getMetadata from "./notion/getMetadata.js";
import getTeams from "./notion/getTeams.js";
import getNews from "./notion/getNews.js";

import fs from "fs";
import path from "path";

import dotenv from "dotenv";

dotenv.config();

const notion = new Client({
  auth: process.env.NOTION,
});

const [schedule, metadata, teams, news] = await Promise.all([
  getSchedule(),
  getMetadata(notion),
  getTeams(notion),
  getNews(notion),
]);

const output = {
  schedule,
  metadata,
  teams,
  news,
};

fs.writeFileSync(
  path.join(process.cwd(), "cache", `output.json`),
  JSON.stringify(output)
);

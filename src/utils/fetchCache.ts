import fs from "fs";
import path from "path";

export type Team = {
  id: string;
  name: string;
  image: string;
};

export type Partner = {
  name: string;
  logo: string;
  url: string;
};

export type Event = {
  id: string;
  status: string;
  htmlLink: string;
  location: string;
  summary: string;
  description: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
};

export type Article = {
  id: string;
  title: string;
  image: string;
  url: string;
  game: string;
};

export type Cache = {
  schedule: Event[];
  teams: Team[];
  metadata: {
    banner: { message: string; url: string };
    tagline: string;
  };
  news: Article[];
  partners: Partner[];
};

export default function fetchCache() {
  return JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "cache", "output.json"), "utf8")
  ) as Cache;
}

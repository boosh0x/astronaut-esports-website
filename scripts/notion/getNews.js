import validateData from "../utils/validateData.js";

export default async function getNews(notion) {
  const articles = [];

  const response = await notion.databases.query({
    database_id: "f375ac9b562e4f8ca86840dd5d3b9a87",
  });

  const results = response.results;

  for (const result of results) {
    const article = validateData("article", {
      id: result.id,
      title: result.properties.Title.title[0]?.plain_text,
      game: result.properties.Game.relation[0]?.id,
      url: result.properties.URL?.url,
    });

    articles.push(article);
  }

  return articles;
}

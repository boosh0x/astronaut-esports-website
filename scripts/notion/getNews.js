import validateData from "../utils/validateData.js";
import downloadImage from "../utils/downloadImage.js";

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
      image: await downloadImage(result.properties.Image.files[0].file?.url),
      url: result.properties.URL?.url,
    });

    articles.push({ ...article, game: result.properties.Game.relation[0]?.id });
  }

  return articles;
}

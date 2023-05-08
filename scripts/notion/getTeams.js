import downloadImage from "../utils/downloadImage.js";
import validateData from "../utils/validateData.js";

export default async function getTeams(notion) {
  const teams = [];

  const response = await notion.databases.query({
    database_id: "6ff36dd37f414cd0bd5c2a3d9028e770",
  });

  const results = response.results;

  for (const result of results) {
    const team = validateData("team", {
      id: result.id,
      name: result.properties.Name.title[0]?.plain_text,
      image: await downloadImage(result.properties.Image.files[0].file?.url),
    });

    teams.push(team);
  }

  return teams;
}

import validateData from "../utils/validateData.js";
import downloadImage from "../utils/downloadImage.js";

export default async function getPartners(notion) {
  const partners = [];

  const response = await notion.databases.query({
    database_id: "129c159798dd4e9f8f200d7eaf2c6b12",
  });

  const results = response.results;

  for (const result of results) {
    const partner = validateData("partner", {
      name: result.properties.Name.title[0]?.plain_text,
      logo: await downloadImage(result.properties.Logo.files[0].file?.url),
      url: result.properties.URL?.url,
    });

    partners.push(partner);
  }

  return partners;
}

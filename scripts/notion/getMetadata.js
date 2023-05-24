import validateData from "../utils/validateData.js";

export default async function getMetadata(notion) {
  let metadata = {
    banner: {
      id: "096bb6e1-e9ec-45be-8ee2-63013291c2e0",
    },
    tagline: {
      id: "c04468f1-89c2-474f-bbfc-b0b002ff2808",
    },
  };

  const response = await notion.databases.query({
    database_id: "3b2e4e0a3b1340199c6e6910eb5aee01",
  });

  const results = response.results;

  for (const result of results) {
    if (result.id === metadata.banner.id) {
      const banner = {
        message: result.properties.Text.rich_text[0]?.text.content,
        url: result.properties.URL?.url,
      };

      if (banner.message && banner.url) {
        metadata.banner = { ...metadata.banner, ...banner };
      } else metadata.banner = undefined;
    }

    if (result.id === metadata.tagline.id) {
      const tagline = validateData("tagline", {
        text: result.properties.Text.rich_text[0]?.text.content,
      });

      metadata.tagline = tagline.text;
    }
  }

  return metadata;
}

import "server-only";

import { Client } from "@notionhq/client";

const notionSecret = process.env.NOTION_SECRET;
export const notionClient = new Client({ auth: notionSecret });

export const getDatabase = async (
  id: string,
  property = "Order",
  direction = "ascending"
) => {
  if (!notionSecret || !id)
    throw new Error("Notion secret or database ID not found");
  const response = await notionClient.databases.query({
    database_id: id,
    sorts: [
      {
        property,
        direction: direction as "descending" | "ascending",
      },
    ],
    filter: {
      property: "Status",
      status: {
        equals: "Published",
      },
    },
  });
  return response;
};

export async function fetchProjects() {
  const databaseID = process.env.NOTION_DATABASE_ID || "";
  const query = await getDatabase(databaseID);
  return query.results;
}
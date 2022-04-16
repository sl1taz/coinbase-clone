import sanityClient from "@sanity/client";


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.NEXT_PUBLIC_SANITY_API_TOKEN;

export const client = sanityClient({
  projectId: projectId,
  token: token,
  dataset: "production",
  apiVersion: "v1",
  useCdn: false,
});

import linkIndex from "../public/link/index.json";

const GetLinkItems = () => {
  const linkItems = linkIndex.map(({ label, url }) => ({
    label,
    url,
    comment: url,
    externalUrl: url.includes("http"),
  }));

  return linkItems;
};

export default GetLinkItems;

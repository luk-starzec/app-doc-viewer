import fs from "fs";

const GetAdrItems = () => {
  const adrFiles = fs.readdirSync("public/adr");
  const adrNames = adrFiles.map((file) => file.replace(".md", ""));
  const adrItems = adrNames.map((name) => ({
    url: `/adr/${name}`,
    label: name.replace(/-/g, " "),
  }));

  return adrItems;
};

export default GetAdrItems;

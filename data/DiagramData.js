import fs from "fs";

const GetDiagramItems = () => {
  const diagramFiles = fs.readdirSync("public/diagram");
  const diagramItems = diagramFiles.map((name) => ({
    url: `/diagram/${name.replace(/\./g, "-")}`,
    label: `${name.replace(/-/g, " ").split(".").shift()}`,
    comment: `[${name.replace(/-/g, " ").split(".").pop()}]`,
  }));

  return diagramItems;
};

export default GetDiagramItems;

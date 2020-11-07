import GetAdrItems from "../../data/AdrData";
import GetDiagramItems from "../../data/DiagramData";
import {
  SECTION_TYPE_ADR,
  SECTION_TYPE_DIAGRAM,
} from "../../components/shared/SectionIcon";

export default (req, res) => {
  const adr = GetAdrItems().map((item) => ({
    label: item.label,
    url: item.url,
    type: SECTION_TYPE_ADR,
  }));
  const diagram = GetDiagramItems().map((item) => ({
    label: item.label,
    url: item.url,
    type: SECTION_TYPE_DIAGRAM,
  }));
  const items = [...adr, ...diagram];

  const text = req.query.text;
  const results = text
    ? items.filter(({ label }) =>
        label.toLowerCase().includes(text.toLowerCase())
      )
    : [];

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
};

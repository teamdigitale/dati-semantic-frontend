export const AT_ONTOLOGY = "ontology";
export const AT_VOCABULARY = "vocabulary";
export const AT_SCHEMA = "schema";

export const AT_TO_LABEL = [
  { type: AT_ONTOLOGY, label: "Ontologia" },
  { type: AT_VOCABULARY, label: "Vocabolario controllato" },
  { type: AT_SCHEMA, label: "Schema" },
];

export const SUPPORTED_ASSET_TYPES = AT_TO_LABEL.map((t2l) => t2l.type);

export function getAssetLabel(type) {
  return AT_TO_LABEL.find((sat) => sat.type === type).label;
}

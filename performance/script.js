import http from "k6/http";
import { Trend } from "k6/metrics";
import { SharedArray } from "k6/data";
import { check } from "k6";
import { sleep } from "k6";

const semanticAssetTrend = new Trend("semantic_asset_trend");
const byIRITrend = new Trend("by_iri_trend");
const cvTrend = new Trend("cv_trend");

const labelData = new SharedArray("Label Data", function () {
  return JSON.parse(open("./data.json")).LABEL;
});

const iriData = new SharedArray("IRI Data", function () {
  return JSON.parse(open("./data.json")).IRI;
});

const cvData = new SharedArray("CV Data", function () {
  return JSON.parse(open("./data.json")).CV;
});

export const options = {
  scenarios: {
    "semantic-assets": {
      executor: "ramping-vus",
      startVUs: 0,
      stages: [
        { duration: "30s", target: 10 },
        { duration: "2m", target: 15 },
        { duration: "20s", target: 0 },
      ],
      gracefulRampDown: "10s",
      exec: "semanticAssets",
    },
    "by-iri": {
      executor: "ramping-vus",
      startVUs: 0,
      stages: [
        { duration: "30s", target: 5 },
        { duration: "2m", target: 10 },
        { duration: "20s", target: 0 },
      ],
      gracefulRampDown: "10s",
      exec: "byIRI",
    },
    "vocabulari-contratto": {
      executor: "ramping-vus",
      startVUs: 0,
      stages: [
        { duration: "30s", target: 5 },
        { duration: "2m", target: 15 },
        { duration: "20s", target: 0 },
      ],
      gracefulRampDown: "10s",
      exec: "controlledVocabulary",
    },
  },
  thresholds: {
    semantic_asset_trend: ["p(95) < 2000"],
    by_iri_trend: ["p(95) < 2000"],
    cv_trend: ["p(95) < 2000"],
  },
};

export function semanticAssets() {
  const res = http.get(
    `https://ndc-dev.apps.cloudpub.testedev.istat.it/api/semantic-assets?q=${
      labelData[Math.floor(Math.random() * labelData.length)]
    }&offset=0&limit=5`
  );
  semanticAssetTrend.add(res.timings.duration);
  check(res, { "status was 200": (r) => r.status == 200 });
  sleep(1);
}

export function byIRI() {
  const res = http.get(
    `https://ndc-dev.apps.cloudpub.testedev.istat.it/api/semantic-assets/by-iri?iri=${
      iriData[Math.floor(Math.random() * iriData.length)]
    }`
  );
  byIRITrend.add(res.timings.duration);
  check(res, { "status was 200": (r) => r.status == 200 });
  check(res, {
    "verify assetIri": (r) => r.body.includes("w3id.org/italia"),
  });
  sleep(1);
}

export function controlledVocabulary() {
  const res = http.get(cvData[Math.floor(Math.random() * cvData.length)]);
  cvTrend.add(res.timings.duration);
  check(res, { "status was 200": (r) => r.status == 200 });
  sleep(1);
}

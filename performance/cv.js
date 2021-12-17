import http from "k6/http";
import { check, sleep } from "k6";
import { SharedArray } from "k6/data";

const data = new SharedArray("IRI Data", function () {
  return JSON.parse(open("./data.json")).cv;
});

export const options = {
  stages: [
    { duration: "30s", target: 20 },
    { duration: "5m", target: 10 },
    { duration: "20s", target: 0 },
  ],
  thresholds: {
    http_req_failed: ["rate<0.01"], // http errors should be less than 1%
    http_req_duration: ["p(99.9) < 2000"], // 99.9% within 2s
  },
};

export default function () {
  const res = http.get(`${data[Math.floor(Math.random() * data.length)]}`);
  check(res, { "status was 200": (r) => r.status == 200 });
  sleep(1);
}

const mbHelper = require("../mountebank-helper");
const settings = require("../settings");

const addService = () => {
  const response = { message: "hello world" };
  const orangeResponse = {
    message: "hello orange",
  };

  const stubs = [
    {
      predicates: [
        {
          equals: {
            method: "GET",
            path: "/",
          },
        },
      ],
      responses: [
        {
          is: {
            statusCode: 200,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(response),
          },
        },
      ],
    },
    {
      predicates: [
        {
          equals: {
            method: "GET",
            path: "/orange",
          },
        },
      ],
      responses: [
        {
          is: {
            statusCode: 200,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET, POST, PUT",
            },
            body: JSON.stringify(orangeResponse),
          },
        },
      ],
    },
    {
      predicates: [
        {
          equals: {
            method: "OPTIONS",
            path: "/orange",
          },
        },
      ],
      responses: [
        {
          is: {
            statusCode: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET, POST, PUT",
              "Access-Control-Allow-Headers": "*",
              "Access-Control-Max-Age": 86400,
            },
          },
        },
      ],
    },
  ];

  const imposter = {
    port: settings.main_service_port,
    protocol: "http",
    stubs,
  };

  return mbHelper.postImposter(imposter);
};

module.exports = { addService };

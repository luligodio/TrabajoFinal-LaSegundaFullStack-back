const port = process.env.PORT || 4000;

module.exports = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api backend Full stack",
      version: "0.0.1",
      description: "Full stack API Documentation",
    },
    servers: [
      {
        url: `http://localhost:${port}/`,
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

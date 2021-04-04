export default async (app) => {
  app.get("/", async (req, reply) => {
    return { hello: "world" };
  });
};

export default async (app) => {
  app.get("/", async (req, reply) => {
    return { hello: "world" };
  });
  
  app.get("/houses", async (req, reply) => {
    return { houses: ['ravemclaw', 'gryffindor', 'slytherin', 'hufflepuff'] };
  });
};

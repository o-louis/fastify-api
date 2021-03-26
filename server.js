const fastify = require("fastify")();
const PORT = process.env.SERVER_PORT || 3000;

fastify.get("/", function (request, reply) {
  reply.send({ title: "Harry Potter API" });
});

fastify.listen(PORT, function (err, address) {
  if (err) throw err;
  console.log(`server listening on ${fastify.server.address().port}`);
});

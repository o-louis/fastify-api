import fastify from "fastify";
import autoload from "fastify-autoload";
import path from "path";

export default function (opts) {
  const app = fastify(opts);

  app.register(autoload, {
    dir: path.join(path.resolve(), "routes"),
  });

  return app;
}

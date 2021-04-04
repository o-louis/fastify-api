import createApp from "./app.js";

const start = async () => {
  const app = createApp({ logger: true });

  await app.listen(process.env.PORT || 3000);
};

start();

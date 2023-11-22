import { registerApplication, start, LifeCycles } from "single-spa";

const APP_NAME = "@test/app";

registerApplication({
  name: APP_NAME,
  app: () => System.import<LifeCycles>(APP_NAME),
  activeWhen: ["/"],
});

start();

import controllers from "./controller";

export function setup(router) {
  router.get("/", controllers.getHello).post("/webhook", controllers.webhook);
}

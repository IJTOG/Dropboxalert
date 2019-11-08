import controllers from "./controller";
export function setup(router) {
  router.get("/", controllers.getById).post("/test", controllers.test);
}

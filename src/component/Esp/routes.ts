import controllers from "./controller";
export function setup(router) {
  router.get("/:id", controllers.addById);
}

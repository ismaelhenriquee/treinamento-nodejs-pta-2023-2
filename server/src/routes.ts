import express from "express";
import userController from "./controllers/UserController";

const routes = express.Router();

routes.post("/user", userController.create);
routes.get("/user", userController.get);
routes.delete("/user/:id", userController.delete);
routes.patch("/user/:id", userController.update);
routes.get("/user/:id", userController.getByid);
routes.get("/busca/:name", userController.getByname);
routes.get("/busca/:age", userController.getByage);
export default routes;

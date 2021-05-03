import express from "express";
import { ExerciseController } from "./controllers/ExerciseController";
import { UserController } from "./controllers/UserController";

const routes = express.Router();

const userController = new UserController();
const exerciseController = new ExerciseController();

routes.post("/users", userController.create);
routes.get("/users", userController.list);

routes.post("/users/:id/exercises", exerciseController.create);
routes.get("/users/:id/exercises/logs", exerciseController.getByUser);

export { routes };

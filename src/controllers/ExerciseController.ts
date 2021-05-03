import { Response, Request } from "express";
import { ExerciseService } from "../services/Exercise";
import { UserService } from "../services/User";
import { DateFormater } from "../utils/DateFormater";
class ExerciseController {
  async create(req: Request, res: Response) {
    const { id } = req.params;
    const { description, duration, date } = req.body;

    const exerciseService = new ExerciseService();
    const userService = new UserService();
    const dateFormate = new DateFormater();

    const newExercise = await exerciseService.create(
      description,
      duration,
      id,
      date
    );
    const user = await userService.getByID(id);

    const data = {
      username: user.username,
      description: newExercise.description,
      duration: newExercise.duration,
      _id: user._id,
      date: dateFormate.execute(newExercise.date),
    };

    return res.json(data);
  }

  async getByUser(req: Request, res: Response) {
    const { id } = req.params;
    const { from, to, limit } = req.query;

    const exerciseService = new ExerciseService();
    const userService = new UserService();

    const user = await userService.getByID(id);
    const exercises = await exerciseService.getByUser(
      id,
      from || 0,
      to || Date.now(),
      Number(limit) || undefined
    );

    const data = {
      username: user.username,
      _id: user._id,
      log: exercises,
    };

    return res.json(data);
  }
}

export { ExerciseController };

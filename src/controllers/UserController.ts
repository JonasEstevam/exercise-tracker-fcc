import { Request, Response } from "express";
import { UserService } from "../services/User";

class UserController {
  async create(req: Request, res: Response) {
    const { username } = req.body;

    const userService = new UserService();

    const newUser = await userService.create(username);

    return res.json(newUser);
  }

  async list(req: Request, res: Response) {
    const userService = new UserService();

    const users = await userService.list();

    return res.json(users);
  }
}

export { UserController };

import { User } from "../models/User";

class UserService {
  async create(username: string) {
    const newUser = await User.create({ username });

    return newUser;
  }

  async list() {
    const users = await User.find();
    return users;
  }

  async getByID(id: string) {
    const user = await User.findById(id);
    return user;
  }
}

export { UserService };

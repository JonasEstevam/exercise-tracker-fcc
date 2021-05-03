import { Exercise } from "../models/Exercises";

class ExerciseService {
  async create(
    description: string,
    duration: number,
    userID: string,
    date?: Date
  ) {
    const newExercise = await Exercise.create({
      description,
      duration,
      date,
      userID,
    });

    return newExercise;
  }
  async getByUser(id: string, from?, to?, limit?) {
    const exercises = await Exercise.find({
      $and: [{ userID: id }, { date: { $gt: from } }, { date: { $lt: to } }],
    }).limit(limit);
    return exercises;
  }
}

export { ExerciseService };

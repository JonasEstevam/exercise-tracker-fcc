import { Document, model, Schema, Model } from "mongoose";

interface IExerciseDocument extends Document {
  duration: number;
  description: string;
  date: Date;
}

const ExerciseSchema: Schema<IExerciseDocument> = new Schema({
  description: {
    type: String,
  },
  duration: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  userID: {
    type: String,
  },
});

const Exercise: Model<IExerciseDocument> = model("Exercise", ExerciseSchema);

export { Exercise };

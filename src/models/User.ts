import { Document, model, Schema, Model } from "mongoose";

interface IUserDocument extends Document {
  username: string;
  log?: object;
}

const UserSchema: Schema<IUserDocument> = new Schema({
  username: {
    required: true,
    unique: true,
    type: String,
  },
});

const User: Model<IUserDocument> = model("User", UserSchema);

export { User };

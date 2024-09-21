import { model, models, Schema, Document } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  email: string;
  name: string;
  username: string;
  password?: string;
  favourites?: Schema.Types.ObjectId[];
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String },
  favourites: [{ type: Schema.Types.ObjectId, ref: "Outfit" }],
});

const User = models.User || model("User", UserSchema);

export default User;

import mongoose, { Schema, Document } from "mongoose";
import bcryptjs from "bcryptjs";

export interface IUser extends Document {
  fullname: string;
  email: string;
  password: string;
  isAdmin?: boolean;
  friends: Array<IUser["_id"]>;
  matchPassword: (password: string) => boolean;
  totalPoint?: number;
}

const userSchema: Schema<IUser> = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
    ],
    totalPoint: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();

  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcryptjs.compare(enteredPassword, this.password);
};

const User = mongoose.model<IUser>("user", userSchema);

export default User;

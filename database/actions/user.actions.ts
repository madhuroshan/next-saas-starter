"use server";

import User from "../models/user.model";
import { connectToDatabase } from "../mongoose";

export const createUser = async (params: CreateUserParams) => {
  try {
    await connectToDatabase();
    const { clerkId, email, name, username } = params;
    const user = await User.create({
      clerkId,
      email,
      name,
      username,
    });

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating user");
  }
};

export const updateUser = async (params: UpdateUserParams) => {
  try {
    await connectToDatabase();
    const { clerkId, email, name, username } = params;
    const user = await User.findOneAndUpdate(
      { clerkId },
      { email, name, username },
      { new: true }
    );

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Error updating user");
  }
};

export const deleteUser = async (clerkId: string) => {
  try {
    await connectToDatabase();
    const user = await User.findOneAndDelete({ clerkId });
    // TODO: delete any outfits they created or saved, and closet
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Error deleting user");
  }
};

export const getUser = async (clerkId: string) => {
  try {
    await connectToDatabase();
    const user = await User.findOne({ clerkId });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting user");
  }
};

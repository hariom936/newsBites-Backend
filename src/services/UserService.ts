import { Service } from "typedi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { Types } from "mongoose";

import { UserModel } from "../model/User";
import config from "../config/config";
import { ApiError } from "../utils/Apierror";
import httpStatus from "http-status";

@Service()
export class UserService {

  async register(user: any) {
    const exists = await UserModel.findOne({
      userEmail: user.userEmail,
    });

    if (exists) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Email already exists");
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const newUser = await UserModel.create({
      ...user,
      password: hashedPassword,
    });

    // ✅ FIX: convert to plain object
    return newUser.toObject();
  }

  async login(data: any) {
    const user = await UserModel.findOne({
      userEmail: data.userEmail,
    });

    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }

    const isMatch = await bcrypt.compare(data.password, user.password);

    if (!isMatch) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Invalid credentials");
    }

    const sessionId = crypto.randomUUID();

    user.session = {
      sessionId,
      expiresOn: new Date(Date.now() + 24 * 60 * 60 * 1000),
    };

    await user.save();

    const token = jwt.sign(
      {
        id: user._id,
        sessionId,
        role: user.role,
      },
      config.jwts.secret,
      { expiresIn: "1d" }
    );

    return { user, token };
  }

  async updatePreferences(userId: string, preferences: string[]) {
    return UserModel.findByIdAndUpdate(
      userId,
      { preferences },
      { new: true }
    );
  }

  async getSavedArticles(userId: string) {
    return UserModel.findById(userId).populate("savedArticles");
  }



  async toggleSaveArticle(userId: string, articleId: string) {
    const user = await UserModel.findById(userId);

    // ✅ FIX 1: null check
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }

    // ✅ convert string → ObjectId
    const articleObjectId = new Types.ObjectId(articleId);

    // ✅ FIX 2: proper comparison
    const exists = user.savedArticles.some(
      (id) => id.toString() === articleId
    );

    if (exists) {
      // ✅ FIX 3: use filter instead of pull (TS safe)
      user.savedArticles = user.savedArticles.filter(
        (id) => id.toString() !== articleId
      );
    } else {
      user.savedArticles.push(articleObjectId);
    }

    await user.save();

    return user.savedArticles;

  }
}
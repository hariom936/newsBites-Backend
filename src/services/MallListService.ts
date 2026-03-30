/**
 * @author: Hariom Verma
 * @file: src/services/MallListService.ts
 * @description: User Service is used as a service for exposing user related methods for primarily
 * MallListController. User Service interacts with Database for user related CRUD operations.
 */

import { Service } from "typedi";
const crypto = require("crypto");
import jwt from "jsonwebtoken";
// import { config } from 'dotenv'
import config from "../config/config";
import { MallListModel } from "../model/MallList";

import { ApiError } from "../utils/Apierror";
import httpStatus from "http-status";
import apiConfigs from "../config/apiConfig";
import errorMessage from "../constant/errorMessage";
import { collectionNames } from "../constant/databaseConstant";
import { platform } from "os";
import messages from "../constant/messages";
import moment from "moment";

@Service()
export class MallListService {
  /**
   * Method checkValidations checks for validations before user creation process.
   * @param {Object} user
   * @returns {Object} ErrorObject
   */
  public async checkValidations(list) {
    const duplicateMallListCheck = await this.CheckduplicateUserCheck(
      list
    );

    if (duplicateMallListCheck) {
      return true;
    }
    return false;
  }
  /**
   * CheckduplicateUserCheck method is used to check duplicate user id in our system.
   * In case we edit the user, the method will check email id for other users in the system,
   * In case of create a new user the method will check duplicate email for all users present in the system
   * @param {Object} user
   * @returns {boolean} exists
   */
  public async CheckduplicateUserCheck(list) {
    let exists;

    const listId = list.listId;
    const mallName = list.mallName;
    if (list.listId) {
      exists = await MallListModel.findOne({
        _id: listId,
        mallName: mallName,
      });
    } else {
      exists = await MallListModel.findOne({ mallName: mallName });
    }

    return exists ? true : false;
  }

  /**
   * Create a new user in system database
   * @param {Object} user
   * @returns {boolean} true if created successfully, falsez if not.
   */
  public async createMall(list) {
    try {
      console.log("created user called ---")
      // let token
      list.mallName =  list.mallName;
      list.location = list.location;
      list.timing = list.timing;
      list.phoneNumber = list.phoneNumber;
      list.createdBy = "653a3a3ed3f6eaf4a9c88f0f";
      list.updatedBy = "653a3a3ed3f6eaf4a9c88f0f";
      const date = new Date()
      const createdMall= await MallListModel.create(list);
      const mallData = await createdMall.save();
      //  at the time or registration we will not creat token 
      return { createdMall, token: null };
      
      // return user;
    } catch (error: any) {
      console.log(error, "error");
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        error
          ? error.errorResponse.errmsg
          : errorMessage.mall_List.ADD_MALL_LIST_ERROR.errorMessage
      );
    }
  }


  public async fetchData(query) {
    const apiSearchFilterConditions = apiConfigs.apiSearchFilterConditions;
    let filterBy = query?.filterBy;
    const filterValue = query?.filterValue;
    const filterCondtion = query?.filterCondition;
    let sortBy = query?.sortBy
      ? query?.sortBy
      : apiSearchFilterConditions.defaultSortBy;
    if (sortBy === "cityName") {
      sortBy = "list.cityName";
    }
    const sortType = query.sortType
      ? query.sortType
      : apiSearchFilterConditions.defaultSortType;
    const queryCondition = {};
    const sortObject = {};
    const page = query?.page
      ? query?.page
      : apiSearchFilterConditions.defaultPageNum;
    const limit = query?.limit
      ? query?.limit
      : apiSearchFilterConditions.defaultLimit;

    if (filterBy) {
      switch (filterCondtion) {
        case apiSearchFilterConditions.isEqualTo:
          queryCondition[filterBy] = { $eq: filterValue || "" };
          break;
        case apiSearchFilterConditions.isNotEqualTo:
          queryCondition[filterBy] = { $ne: filterValue || "" };
          break;
        case apiSearchFilterConditions.startsWith:
          const startsWithRegex = new RegExp(`^${filterValue}*`);
          queryCondition[filterBy] = { $regex: startsWithRegex, $options: "i" };
          break;
        case apiSearchFilterConditions.endsWith:
          const endsWithRegex = new RegExp(`${filterValue}$`);
          queryCondition[filterBy] = { $regex: endsWithRegex, $options: "i" };
          break;
        case apiSearchFilterConditions.contains:
          const containsRegex = new RegExp(`${filterValue}`);
          queryCondition[filterBy] = { $regex: containsRegex, $options: "i" };
          break;
        case apiSearchFilterConditions.nullValue:
          queryCondition[filterBy] = "";
          break;
      }
    } else {
      filterBy = "_id";
      queryCondition[filterBy] = { $ne: null };
    }

    sortObject[sortBy] = sortType;

    const skip = (page - 1) * limit;

    const pipeline = [
      {
        $lookup: {
          from: collectionNames.Users,
          localField: "listId",
          foreignField: "_id",
          as: "list",
        },
      },
      {
        $unwind: { path: "$list", preserveNullAndEmptyArrays: true },
      },
      {
        $match: queryCondition,
      },
      {
        $project: {
          // user: {
          //   userName: "$user.userName",
          // },
          mallName: 1,
          location: 1,
          timing:1,
          phoneNumber: 1,
          createdBy: 1,
          updatedBy: 1,
        },
      },
      {
        $sort: {
          [sortBy]: sortType,
        },
      },
      {
        $skip: skip,
      },
      {
        $limit: limit,
      },
    ];
    const countQuery = await MallListModel.countDocuments(queryCondition);

    // const countQuery = await UserModel.count(queryCondition);
    const paginatedQuery = await MallListModel.aggregate(pipeline, {
      collation: { locale: "en", strength: 2 },
    });

    return {
      count: countQuery,
      records: paginatedQuery,
    };
  }

  /**
   * findOneUser method finds a user by it's id in system
   * @param userId
   * @returns {Object} user details
   */
  public async findOneUser(listId: string) {
    return MallListModel.findOne({ _id: listId });
  }

  /**
   * checkValidUserId method checks if user id exists in system or not.
   * @param userId
   * @returns {boolean} true if exists false if not
   */
  public async checkValidUserId(listId) {
    const validateUser = await MallListModel.findOne({ _id: listId });
    return validateUser ? true : false;
  }

  public async editUser(list) {
    const listId = list.listId;
    const updatedBy = listId;
    const filter = { _id: listId };
    const update = {
      updatedBy: updatedBy,
      userName: list.cityName,
    };

    const updatedData = await MallListModel.findOneAndUpdate(filter, update, {
      new: true,
    });

    const newData = await MallListModel.findOne(filter);
    return {
      updatedData: updatedData,
      newUserData: newData,
    };
  }

  
}



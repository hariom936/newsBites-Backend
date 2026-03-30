import { UserModel as User } from "../src/model/User";
import seederConstants from "../src/constant/seederConstant";
const data = [
  {
    userEmail: "admin@kellton.com",
    userName: "admin",
    platForm:'Admin',
    role: "User", 
    phoneNumber: 9682296759,
    createdBy: seederConstants.user.appUserId,
    updatedBy: seederConstants.user.appUserId,
  },
  {
    userEmail: "hariom.verma@kellton.com",
    userName: "hari",
    platForm:'User',
    role: "User", 
    phoneNumber: 9682296756,
    createdBy: seederConstants.user.appUserId,
    updatedBy: seederConstants.user.appUserId,
  },
  {
    userEmail: "rakesh.chandra@kellton.com",
    userName: "rakesh",
    platForm:'Admin',
    role: "User", 
    phoneNumber: 9871798972,
    createdBy: seederConstants.user.appUserId,
    updatedBy: seederConstants.user.appUserId,
  },
  {
    userEmail: "amnan@kellton.com",
    userName: "aman",
    platForm:'Admin',
    role: "User", 
    phoneNumber: 9871798971,
    createdBy: seederConstants.user.appUserId,
    updatedBy: seederConstants.user.appUserId,
  },
];

const up = async () => {
  await User.insertMany(data);
};

const down = async () => {
  await User.deleteMany({});
};

module.exports = {
  up,
  down,
};

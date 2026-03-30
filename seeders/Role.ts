import { roleModel as Role } from "../src/model/Role";
import seederConstants from "../src/constant/seederConstant";
const data = [
  {
    roleName: "Super Admin",
    title: 'superAdmin',
    moduleName: [{
      title: 'tierManagement',
      name: 'Tier Management',
      status: true,
      canRead: true,
      canUpdate: true
    },
    {
      title: 'mallManagement',
      name: 'Mall Management',
      status: true,
      canRead: true,
      canUpdate: true
    },
    {
      title: 'userManagement',
      name: 'User Management',
      status: true,
      canRead: true,
      canUpdate: true
    },

    ],
    status: true,
    createdBy: seederConstants.user.appUserId,
    updatedBy: seederConstants.user.appUserId,
  },
  {
    roleName: " Admin",
    title: 'admin',
    moduleName: [{
      title: 'tierManagement',
      name: 'Tier Management',
      status: true,
      canRead: true,
      canUpdate: true
    },
    {
      title: 'mallManagement',
      name: 'Mall Management',
      status: true,
      canRead: true,
      canUpdate: true
    },
    {
      title: 'userManagement',
      name: 'User Management',
      status: true,
      canRead: true,
      canUpdate: true
    },

    ],
    status: true,
    createdBy: seederConstants.user.appUserId,
    updatedBy: seederConstants.user.appUserId,
  },

  {
    roleName: "Sub Admin",
    title: 'subAdmin',
    moduleName: [{
      title: 'tierManagement',
      name: 'Tier Management',
      status: true,
      canRead: true,
      canUpdate: true
    },
    {
      title: 'mallManagement',
      name: 'Mall Management',
      status: true,
      canRead: true,
      canUpdate: true
    },
    {
      title: 'userManagement',
      name: 'User Management',
      status: true,
      canRead: true,
      canUpdate: true
    },

    ],
    status: true,
    createdBy: seederConstants.user.appUserId,
    updatedBy: seederConstants.user.appUserId,
  },
  {
    roleName: "Operation",
    title: 'operation',
    moduleName: [{
      title: 'tierManagement',
      name: 'Tier Management',
      status: true,
      canRead: true,
      canUpdate: true
    },
    {
      title: 'mallManagement',
      name: 'Mall Management',
      status: true,
      canRead: true,
      canUpdate: true
    },
    {
      title: 'userManagement',
      name: 'User Management',
      status: true,
      canRead: true,
      canUpdate: true
    },
    ],

    createdBy: seederConstants.user.appUserId,
    updatedBy: seederConstants.user.appUserId,
  },


  {
    roleName: "User",
    title: 'user',
    moduleName: [{
      title: 'tierManagement',
      name: 'Tier Management',
      status: true,
      canRead: true,
      canUpdate: true
    },
    {
      title: 'mallManagement',
      name: 'Mall Management',
      status: true,
      canRead: true,
      canUpdate: true
    },
    {
      title: 'userManagement',
      name: 'User Management',
      status: true,
      canRead: true,
      canUpdate: true
    },

    ],
    status: true,
    createdBy: seederConstants.user.appUserId,
    updatedBy: seederConstants.user.appUserId,
  },

];

const up = async () => {
  await Role.insertMany(data);
};

const down = async () => {
  await Role.deleteMany({});
};

module.exports = {
  up,
  down,
};

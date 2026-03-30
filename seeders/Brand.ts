import {Brand } from "../src/model";
import seederConstants from "../src/constant/seederConstant";
const data = [
  {
    title: "Nike",
    value: 'nike',
    image: 'nike.jpg',
    status: true,
    createdBy: seederConstants.user.appUserId,
    updatedBy: seederConstants.user.appUserId,
  },

  {
    title: "Reebok",
    value: 'Reebok',
    image: 'reebok.jpg',
    status: true,
    createdBy: seederConstants.user.appUserId,
    updatedBy: seederConstants.user.appUserId,
  },
 

];

const up = async () => {
  await Brand.insertMany(data);
};

const down = async () => {
  await Brand.deleteMany({});
};

module.exports = {
  up,
  down,
};

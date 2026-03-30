import { MallListModel as Mall } from "../src/model/MallList";
import seederConstants from "../src/constant/seederConstant";
import { listenerCount } from "process";
const data = [
  {
    mallName: "The Mall Of Faridabad",
    location:
      "The Mall Of Faridabad NIT Bus Stand, K L Mehta Road, 01, New Industrial Township, Faridabad, Haryana 121001",
    phoneNumber: +917888888011388660641,
    timing: [
      "Sunday: 11:00 AM - 10:00 PM",
      "Monday: 11:00 AM - 10:00 PM",
      "Tuesday: 11:00 AM - 10:00 PM",
      "Wednesday: 11:00 AM - 10:00 PM",
      "Thursday: 11:00 AM - 10:00 PM",
      "Friday: 11:00 AM - 10:00 PM",
      //i want to add this listenerCount
      "Saturday: 11:00 AM - 10:00 PM",
    ],
    createdBy: seederConstants.user.appUserId,
    updatedBy: seederConstants.user.appUserId,
  },
  // {
  //   mallName: "Tagore Garden",
  //   location:
  //     "Najafgarh Rd, Tagore Garden, Tilak Nagar, New Delhi, Delhi, 110018",
  //   phoneNumber: +919953399833,
  //   timing: {
  //     Home: [
  //       "Sunday: 11:00 AM - 10:00 PM",
  //       "Monday: 11:00 AM - 10:00 PM",
  //       "Tuesday: 11:00 AM - 10:00 PM",
  //       "Wednesday: 11:00 AM - 10:00 PM",
  //       "Thursday: 11:00 AM - 10:00 PM",
  //       "Friday: 11:00 AM - 10:00 PM",
  //       "Saturday: 11:00 AM - 10:00 PM",
  //     ],
  //     Kitchen: [
  //       "Sunday: 11:00 AM - 11:00 PM",
  //       "Monday: 11:00 AM - 11:00 PM",
  //       "Tuesday: 11:00 AM - 11:00 PM",
  //       "Wednesday: 11:00 AM - 11:00 PM",
  //       "Thursday: 11:00 AM - 11:00 PM",
  //       "Friday: 11:00 AM - 11:00 PM",
  //       "Saturday: 11:00 AM - 11:00 PM",
  //     ],
  //   },
  //   createdBy: seederConstants.user.appUserId,
  //   updatedBy: seederConstants.user.appUserId,
  // },
  // {
  //   mallName: "Dehradun",
  //   location: "newsBite mall, Rajpur Rd, Jakhan, Dehradun, Uttarakhand 248001",
  //   phoneNumber: +919953399834,
  //   timing: {
  //     Home: [
  //       "Sunday: 11:00 AM - 10:00 PM",
  //       "Monday: 11:00 AM - 10:00 PM",
  //       "Tuesday: 11:00 AM - 10:00 PM",
  //       "Wednesday: 11:00 AM - 10:00 PM",
  //       "Thursday: 11:00 AM - 10:00 PM",
  //       "Friday: 11:00 AM - 10:00 PM",
  //       "Saturday: 11:00 AM - 10:00 PM",
  //     ],
  //     Kitchen: [
  //       "Sunday: Closed",
  //       "Monday: 11:00 AM - 9:00 PM",
  //       "Tuesday: 11:00 AM - 9:30 PM",
  //       "Wednesday: 11:00 AM - 9:00 PM",
  //       "Thursday: 11:00 AM - 9:30 PM",
  //       "Friday: 11:00 AM - 9:00 PM",
  //       "Saturday: 11:00 AM - 9:00 PM",
  //     ],
  //   },
  //   createdBy: seederConstants.user.appUserId,
  //   updatedBy: seederConstants.user.appUserId,
  // },
  // {
  //   mallName: "Dwarka",
  //   location: "Dwarka Sector 21 Metro Station, Dwarka, Delhi, 110077",
  //   phoneNumber: +919953399835,
  //   timing: {
  //     Home: [
  //       "Sunday: 11:00 AM - 9:30 PM",
  //       "Monday: 11:00 AM - 9:30PM",
  //       "Tuesday: 11:00 AM - 9:30PM",
  //       "Wednesday: 11:00 AM - 9:30 PM",
  //       "Thursday: 11:00 AM - 9:30 PM",
  //       "Friday: 11:00 AM - 9:30 PM",
  //       "Saturday: 11:00 AM - 9:30 PM",
  //     ],
  //     Kitchen: [
  //       "Sunday: 11:00 AM - 11:00 PM",
  //       "Monday: 11:00 AM - 11:00 PM",
  //       "Tuesday: 11:00 AM - 11:00 PM",
  //       "Wednesday: 11:00 AM - 11:00 PM",
  //       "Thursday: 11:00 AM - 11:00 PM",
  //       "Friday: 11:00 AM - 11:00 PM",
  //       "Saturday: 11:00 AM - 11:00 PM",
  //     ],
  //   },
  //   createdBy: seederConstants.user.appUserId,
  //   updatedBy: seederConstants.user.appUserId,
  // },
  // {
  //   mallName: "NSP Pitampura ",
  //   location: "Pitampura, New Delhi, Delhi, 110034",
  //   phoneNumber: +9101169019400,
  //   timing: {
  //     Home: [
  //       "Sunday: 11:00 AM - 10:00 PM",
  //       "Monday: 11:00 AM - 10:00 PM",
  //       "Tuesday: 11:00 AM - 10:00 PM",
  //       "Wednesday: 11:00 AM - 10:00 PM",
  //       "Thursday: 11:00 AM - 10:00 PM",
  //       "Friday: 11:00 AM - 10:00 PM",
  //       "Saturday: 11:00 AM - 10:00 PM",
  //     ],
  //     PickUp: [
  //       "Sunday: 11:00 AM - 11:30 PM",
  //       "Monday: 11:30 AM - 11:00 PM",
  //       "Tuesday: 11:00 AM - 11:00 PM",
  //       "Wednesday: 11:00 AM - 11:00 PM",
  //       "Thursday: 11:00 AM - 11:00 PM",
  //       "Friday: 11:00 AM - 11:00 PM",
  //       "Saturday: 11:00 AM - 11:00 PM",
  //     ],
  //     Kitchen: [
  //       "Sunday: 11:00 AM - 11:00 PM",
  //       "Monday: 11:00 AM - 11:00 PM",
  //       "Tuesday: 11:00 AM - 11:00 PM",
  //       "Wednesday: 11:00 AM - 11:00 PM",
  //       "Thursday: 11:00 AM - 11:00 PM",
  //       "Friday: 11:00 AM - 11:00 PM",
  //       "Saturday: 11:00 AM - 11:00 PM",
  //     ],
  //   },
  //   createdBy: seederConstants.user.appUserId,
  //   updatedBy: seederConstants.user.appUserId,
  // },
  // {
  //   mallName: "Ghaziabad",
  //   location:
  //     "Plot Alpha, Sahibabad Industrial Area Site 4, Sahibabad, Ghaziabad, Uttar Pradesh 201010",
  //   phoneNumber: +911122334455,
  //   timing: {
  //     Home: [
  //       "Sunday: 11:00 AM - 9:30 PM",
  //       "Monday: 11:00 AM - 9:30 PM",
  //       "Tuesday: 11:00 AM -  9:30 PM",
  //       "Wednesday: 11:00 AM -  9:30 PM",
  //       "Thursday: 11:00 AM -  9:30 PM",
  //       "Friday: 11:00 AM -  9:30 PM",
  //       "Saturday: 11:00 AM -  9:30 PM",
  //     ],
  //   },
  //   createdBy: seederConstants.user.appUserId,
  //   updatedBy: seederConstants.user.appUserId,
  // },
];

const up = async () => {
  await Mall.insertMany(data);
};

const down = async () => {
  await Mall.deleteMany({});
};

module.exports = {
  up,
  down,
};

import { BarDatum } from "@nivo/bar";
import { CalendarDatum } from "@nivo/calendar";
import { Serie } from "@nivo/line";

// ! TODO: Try replacing some of this w/ faker in the future.
export const user_graph_data: Serie[] = [
  {
    id: "New Registrations",
    data: [
      { x: "January", y: 1000 },
      { x: "Feburary", y: 600 },
      { x: "March", y: 853 },
      { x: "April", y: 655 },
      { x: "May", y: 874 },
      { x: "June", y: 766 },
      { x: "July", y: 920 },
      { x: "August", y: 511 },
      { x: "September", y: 419 },
      { x: "October", y: 785 },
      { x: "November", y: 996 },
      { x: "December", y: 858 },
    ],
  },
  {
    id: "Active users",
    data: [
      { x: "January", y: 701 },
      { x: "Feburary", y: 839 },
      { x: "March", y: 432 },
      { x: "April", y: 356 },
      { x: "May", y: 753 },
      { x: "June", y: 231 },
      { x: "July", y: 881 },
      { x: "August", y: 726 },
      { x: "September", y: 327 },
      { x: "October", y: 250 },
      { x: "November", y: 302 },
      { x: "December", y: 459 },
    ],
  },
];

export const database_graph_data: Serie[] = [
  {
    id: "Reads",
    data: [
      { x: "January", y: 1760 },
      { x: "Feburary", y: 4237 },
      { x: "March", y: 2931 },
      { x: "April", y: 4400 },
      { x: "May", y: 2621 },
      { x: "June", y: 1811 },
      { x: "July", y: 4617 },
      { x: "August", y: 4261 },
      { x: "September", y: 2086 },
      { x: "October", y: 1284 },
      { x: "November", y: 4680 },
      { x: "December", y: 1396 },
    ],
  },
  {
    id: "Writes",
    data: [
      { x: "January", y: 2164 },
      { x: "Feburary", y: 4897 },
      { x: "March", y: 4768 },
      { x: "April", y: 2213 },
      { x: "May", y: 4660 },
      { x: "June", y: 3299 },
      { x: "July", y: 1582 },
      { x: "August", y: 2122 },
      { x: "September", y: 3413 },
      { x: "October", y: 2154 },
      { x: "November", y: 3800 },
      { x: "December", y: 3207 },
    ],
  },
];

export const storage_graph_data = [
  {
    id: "Used",
    label: "Used",
    value: 475,
  },
  {
    id: "Free",
    label: "Free",
    value: 207,
  },
];

export const activity_graph_data: CalendarDatum[] = [
  {
    day: "2023-01-01",
    value: 10,
  },
  {
    day: "2023-01-07",
    value: 20,
  },
  {
    day: "2023-01-09",
    value: 50,
  },
  {
    day: "2023-01-13",
    value: 30,
  },
  {
    day: "2023-01-14",
    value: 54,
  },
  {
    day: "2023-01-15",
    value: 43,
  },
  {
    day: "2023-01-19",
    value: 59,
  },
  {
    day: "2023-01-21",
    value: 56,
  },
  {
    day: "2023-01-23",
    value: 62,
  },
  {
    day: "2023-01-26",
    value: 39,
  },
  {
    day: "2023-02-04",
    value: 50,
  },
  {
    day: "2023-02-18",
    value: 21,
  },
  {
    day: "2023-02-21",
    value: 41,
  },
  {
    day: "2023-02-23",
    value: 57,
  },
  {
    day: "2023-02-25",
    value: 30,
  },
  {
    day: "2023-02-26",
    value: 53,
  },
  {
    day: "2023-02-28",
    value: 33,
  },
  {
    day: "2023-03-02",
    value: 99,
  },
  {
    day: "2023-03-07",
    value: 60,
  },
  {
    day: "2023-03-10",
    value: 61,
  },
  {
    day: "2023-03-17",
    value: 11,
  },
  {
    day: "2023-03-19",
    value: 41,
  },
  {
    day: "2023-03-24",
    value: 81,
  },
  {
    day: "2023-03-28",
    value: 87,
  },
  {
    day: "2023-04-01",
    value: 22,
  },
  {
    day: "2023-04-05",
    value: 56,
  },
  {
    day: "2023-04-10",
    value: 47,
  },
  {
    day: "2023-04-14",
    value: 76,
  },
  {
    day: "2023-04-20",
    value: 21,
  },
  {
    day: "2023-04-24",
    value: 37,
  },
  {
    day: "2023-04-27",
    value: 98,
  },
  {
    day: "2023-05-01",
    value: 26,
  },
  {
    day: "2023-05-08",
    value: 13,
  },
  {
    day: "2023-05-15",
    value: 44,
  },
  {
    day: "2023-05-18",
    value: 91,
  },
  {
    day: "2023-05-19",
    value: 4,
  },
  {
    day: "2023-05-23",
    value: 38,
  },
  {
    day: "2023-05-28",
    value: 21,
  },
  {
    day: "2023-06-04",
    value: 52,
  },
  {
    day: "2023-06-06",
    value: 21,
  },
  {
    day: "2023-06-10",
    value: 70,
  },
  {
    day: "2023-06-13",
    value: 35,
  },
  {
    day: "2023-06-19",
    value: 43,
  },
  {
    day: "2023-06-25",
    value: 28,
  },
  {
    day: "2023-06-28",
    value: 55,
  },
  {
    day: "2023-06-30",
    value: 61,
  },
  {
    day: "2023-07-02",
    value: 37,
  },
];

export const billing_graph_data: BarDatum[] = [
  {
    Month: "January",
    billCost: 6971,
  },
  {
    Month: "Feburary",
    billCost: 7087,
  },
  {
    Month: "March",
    billCost: 3541,
  },
  {
    Month: "April",
    billCost: 5143,
  },
  {
    Month: "May",
    billCost: 455,
  },
  {
    Month: "June",
    billCost: 2596,
  },
  {
    Month: "July",
    billCost: 6195,
  },
  {
    Month: "August",
    billCost: 9447,
  },
  {
    Month: "September",
    billCost: 3363,
  },
  {
    Month: "October",
    billCost: 7214,
  },
  {
    Month: "November",
    billCost: 614,
  },
  {
    Month: "December",
    billCost: 6621,
  },
];

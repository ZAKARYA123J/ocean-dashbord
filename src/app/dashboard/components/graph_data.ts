import { BarDatum } from "@nivo/bar";
import { CalendarDatum } from "@nivo/calendar";
import { Serie } from "@nivo/line";
import { DefaultRawDatum, MayHaveLabel } from "@nivo/pie";

export const user_graph_data: Serie[] = [
  {
    id: "New Registrations",
    data: [
      { x: "January", y: 975 },
      { x: "Feburary", y: 811 },
      { x: "March", y: 853 },
      { x: "April", y: 565 },
      { x: "May", y: 874 },
      { x: "June", y: 904 },
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
      { x: "March", y: 51 },
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
      { x: "Feburary", y: 4730 },
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
      { x: "October", y: 1951 },
      { x: "November", y: 4652 },
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
    value: 952,
  },
  {
    day: "2023-01-06",
    value: 49,
  },
  {
    day: "2023-01-10",
    value: 172,
  },
  {
    day: "2023-01-17",
    value: 54,
  },
  {
    day: "2023-01-22",
    value: 478,
  },
  {
    day: "2023-01-31",
    value: 631,
  },
  {
    day: "2023-02-04",
    value: 481,
  },
  {
    day: "2023-02-10",
    value: 776,
  },
  {
    day: "2023-02-23",
    value: 319,
  },
  {
    day: "2023-02-24",
    value: 326,
  },
  {
    day: "2023-02-28",
    value: 988,
  },
  {
    day: "2023-02-31",
    value: 119,
  },
  {
    day: "2023-03-03",
    value: 541,
  },
  {
    day: "2023-03-10",
    value: 305,
  },
  {
    day: "2023-03-17",
    value: 931,
  },
  {
    day: "2023-03-24",
    value: 672,
  },
  {
    day: "2023-03-28",
    value: 137,
  },
  {
    day: "2023-04-01",
    value: 641,
  },
  {
    day: "2023-04-05",
    value: 204,
  },
  {
    day: "2023-04-10",
    value: 371,
  },
  {
    day: "2023-04-14",
    value: 164,
  },
  {
    day: "2023-04-20",
    value: 220,
  },
  {
    day: "2023-05-01",
    value: 875,
  },
  {
    day: "2023-05-08",
    value: 212,
  },
  {
    day: "2023-05-15",
    value: 954,
  },
  {
    day: "2023-05-18",
    value: 85,
  },
  {
    day: "2023-05-30",
    value: 71,
  },
  {
    day: "2023-06-04",
    value: 725,
  },
  {
    day: "2023-06-06",
    value: 591,
  },
  {
    day: "2023-06-13",
    value: 75,
  },
  {
    day: "2023-06-19",
    value: 358,
  },
  {
    day: "2023-06-25",
    value: 717,
  },
  {
    day: "2023-06-29",
    value: 408,
  },
  {
    day: "2023-07-02",
    value: 102,
  },
  {
    day: "2023-07-09",
    value: 384,
  },
  {
    day: "2023-07-15",
    value: 878,
  },
  {
    day: "2023-07-19",
    value: 271,
  },
  {
    day: "2023-07-24",
    value: 602,
  },
  {
    day: "2023-08-01",
    value: 265,
  },
  {
    day: "2023-08-04",
    value: 180,
  },
  {
    day: "2023-08-13",
    value: 985,
  },
  {
    day: "2023-08-23",
    value: 74,
  },
  {
    day: "2023-08-25",
    value: 235,
  },
  {
    day: "2023-09-04",
    value: 374,
  },
  {
    day: "2023-09-09",
    value: 552,
  },
  {
    day: "2023-09-16",
    value: 299,
  },
  {
    day: "2023-09-21",
    value: 852,
  },
  {
    day: "2023-09-29",
    value: 972,
  },
  {
    day: "2023-10-06",
    value: 476,
  },
  {
    day: "2023-10-14",
    value: 130,
  },
  {
    day: "2023-10-19",
    value: 763,
  },
  {
    day: "2023-10-24",
    value: 364,
  },
  {
    day: "2023-11-01",
    value: 217,
  },
  {
    day: "2023-11-07",
    value: 574,
  },
  {
    day: "2023-11-13",
    value: 85,
  },
  {
    day: "2023-11-19",
    value: 297,
  },
  {
    day: "2023-11-24",
    value: 71,
  },

  {
    day: "2023-12-03",
    value: 252,
  },
  {
    day: "2023-12-07",
    value: 306,
  },
  {
    day: "2023-12-13",
    value: 194,
  },
  {
    day: "2023-12-19",
    value: 458,
  },
  {
    day: "2023-12-23",
    value: 70,
  },
  {
    day: "2023-12-31",
    value: 367,
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

import { faker } from "@faker-js/faker";
import { BarDatum } from "@nivo/bar";
import { CalendarDatum } from "@nivo/calendar";
import { Serie } from "@nivo/line";

export const user_graph_data: Serie[] = [
  {
    id: "New Registrations",
    data: [
      { x: "January", y: faker.number.int({ min: 5, max: 1000 }) },
      { x: "Feburary", y: faker.number.int({ min: 5, max: 1000 }) },
      { x: "March", y: faker.number.int({ min: 5, max: 1000 }) },
      { x: "April", y: faker.number.int({ min: 5, max: 1000 }) },
      { x: "May", y: faker.number.int({ min: 5, max: 1000 }) },
      { x: "June", y: faker.number.int({ min: 5, max: 1000 }) },
      { x: "July", y: faker.number.int({ min: 5, max: 1000 }) },
      { x: "August", y: faker.number.int({ min: 5, max: 1000 }) },
      { x: "September", y: faker.number.int({ min: 5, max: 1000 }) },
      { x: "October", y: faker.number.int({ min: 5, max: 1000 }) },
      { x: "November", y: faker.number.int({ min: 5, max: 1000 }) },
      { x: "December", y: faker.number.int({ min: 5, max: 1000 }) },
    ],
  },
  {
    id: "Active users",
    data: [
      { x: "January", y: faker.number.int({ min: 80, max: 3000 }) },
      { x: "Feburary", y: faker.number.int({ min: 80, max: 3000 }) },
      { x: "March", y: faker.number.int({ min: 80, max: 3000 }) },
      { x: "April", y: faker.number.int({ min: 80, max: 3000 }) },
      { x: "May", y: faker.number.int({ min: 80, max: 3000 }) },
      { x: "June", y: faker.number.int({ min: 80, max: 3000 }) },
      { x: "July", y: faker.number.int({ min: 80, max: 3000 }) },
      { x: "August", y: faker.number.int({ min: 80, max: 3000 }) },
      { x: "September", y: faker.number.int({ min: 80, max: 3000 }) },
      { x: "October", y: faker.number.int({ min: 80, max: 3000 }) },
      { x: "November", y: faker.number.int({ min: 80, max: 3000 }) },
      { x: "December", y: faker.number.int({ min: 80, max: 3000 }) },
    ],
  },
];

export const database_graph_data: Serie[] = [
  {
    id: "Reads",
    data: [
      { x: "January", y: faker.number.int({ min: 800, max: 10000 }) },
      { x: "Feburary", y: faker.number.int({ min: 800, max: 10000 }) },
      { x: "March", y: faker.number.int({ min: 800, max: 10000 }) },
      { x: "April", y: faker.number.int({ min: 800, max: 10000 }) },
      { x: "May", y: faker.number.int({ min: 800, max: 10000 }) },
      { x: "June", y: faker.number.int({ min: 800, max: 10000 }) },
      { x: "July", y: faker.number.int({ min: 800, max: 10000 }) },
      { x: "August", y: faker.number.int({ min: 800, max: 10000 }) },
      { x: "September", y: faker.number.int({ min: 800, max: 10000 }) },
      { x: "October", y: faker.number.int({ min: 800, max: 10000 }) },
      { x: "November", y: faker.number.int({ min: 800, max: 10000 }) },
      { x: "December", y: faker.number.int({ min: 800, max: 10000 }) },
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
    value: faker.number.int({ min: 10, max: 800 }),
  },
  {
    id: "Free",
    label: "Free",
    value: faker.number.int({ min: 10, max: 800 }),
  },
];

function createActivityData(): CalendarDatum {
  const date = faker.date.between({
    from: "2024-01-13T00:00:00.000Z",
    to: "2024-12-31T00:00:00.000Z",
  });

  return {
    day:
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      date.getDate().toString().padStart(2, "0"),
    value: faker.number.int({ min: 10, max: 1000 }),
  };
}

export const activity_graph_data: CalendarDatum[] = faker.helpers.multiple(
  createActivityData,
  {
    count: 300,
  },
);

export const billing_graph_data: BarDatum[] = [
  {
    Month: "January",
    billCost: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    Month: "Feburary",
    billCost: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    Month: "March",
    billCost: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    Month: "April",
    billCost: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    Month: "May",
    billCost: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    Month: "June",
    billCost: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    Month: "July",
    billCost: faker.number.int({ min: 100, max: 10000 }),
  },
];

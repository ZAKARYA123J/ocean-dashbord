import { faker } from "@faker-js/faker";

export type Log = {
  time: Date;
  priority: "VERBOSE" | "INFO" | "DEBUG" | "WARNING" | "ERROR";
  message: String;
  source: "NODE" | "API";
};

function createRandomLog(): Log {
  return {
    time: faker.date.recent(),
    priority: faker.helpers.arrayElement([
      "VERBOSE",
      "INFO",
      "DEBUG",
      "WARNING",
      "ERROR",
    ]),
    message: faker.lorem.sentence(),
    source: faker.helpers.arrayElement(["NODE", "API"]),
  };
}

export const userData = faker.helpers.multiple(createRandomLog, {
  count: 100,
});

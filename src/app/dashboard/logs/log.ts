import { faker } from "@faker-js/faker";

export const LogPriorities = <const>[
  "VERBOSE",
  "INFO",
  "DEBUG",
  "WARNING",
  "ERROR",
];
export type Log = {
  time: Date;
  priority: (typeof LogPriorities)[number];
  message: String;
  source: "NODE" | "API";
};

function createRandomLog(): Log {
  return {
    time: faker.date.recent(),
    priority: faker.helpers.arrayElement(LogPriorities),
    message: faker.lorem.sentence(),
    source: faker.helpers.arrayElement(["NODE", "API"]),
  };
}

export const userData = faker.helpers.multiple(createRandomLog, {
  count: 100,
});

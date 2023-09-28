import { faker } from "@faker-js/faker";

export type User = {
  id: String;
  email: String;
  username: String;
  role: "USER" | "ADMIN";
};

// ----- Generate fake data -----
function createRandomUser(): User {
  return {
    id: faker.string.uuid().slice(0, 15),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    role: faker.helpers.arrayElement(["USER", "ADMIN"]),
  };
}

export const userData = faker.helpers.multiple(createRandomUser, {
  count: 100,
});

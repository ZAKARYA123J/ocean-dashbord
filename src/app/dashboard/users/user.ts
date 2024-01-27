import { faker } from "@faker-js/faker";

export type User = {
  id: String;
  email: String;
  username: String;
  role: "USER" | "ADMIN";
};

// ----- Generate fake data -----

function createRandomUser(): User {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    id: faker.string.uuid().slice(0, 15),
    email: faker.internet.email({ firstName, lastName }),
    username: faker.internet.userName({ firstName, lastName }),
    role: faker.helpers.arrayElement(["USER", "ADMIN"]),
  };
}

export const userData = faker.helpers.multiple(createRandomUser, {
  count: 100,
});

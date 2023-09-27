export type User = {
  id: String;
  email: String;
  username: String;
  role: "USER" | "ADMIN";
};

export const userData: User[] = [
  {
    id: "e052dc64efdb5dcf",
    email: "sev@ijo.gl",
    username: "Luke_Johnson",
    role: "USER",
  },
  {
    id: "7cb62c57e7095b81",
    email: "mifve@ro.td",
    username: "Will.Washington",
    role: "USER",
  },
  {
    id: "39f76d370ccc595f",
    email: "vesirdoj@vus.eu",
    username: "LinniePope",
    role: "ADMIN",
  },
];

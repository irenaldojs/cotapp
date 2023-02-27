import { createContext } from "react";

const UserContext = createContext({
  user: {
    email: "",
    password: "",
  },
  itemSelect: "Home",
  login: false,
});

export default UserContext;

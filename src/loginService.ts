import { User } from "./types";

export const initCredentials = () => {
  localStorage.setItem(
    "credentials",
    JSON.stringify({
      username: "root",
      password: "1234",
      name: "Root",
    })
  );
};

export const login = (username: string, password: string): Promise<User> => {
  initCredentials();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const savedUser = localStorage.getItem("credentials");
      if (!savedUser) throw new Error("Credentials not saved.");
      const savedUserData: User = JSON.parse(savedUser);

      if (
        username !== savedUserData.username ||
        password !== savedUserData.password
      )
        reject(new Error("Invalid Credentials."));

      resolve(savedUserData);
    }, 1000);
  });
};

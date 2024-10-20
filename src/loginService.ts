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

const getUserFormLocalStorage = (): User => {
  const savedUser = localStorage.getItem("credentials");
  if (!savedUser) throw new Error("Credentials not saved.");
  return JSON.parse(savedUser) as User;
};

export const login = (username: string, password: string): Promise<User> => {
  initCredentials();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const savedUser = getUserFormLocalStorage();
      if (username !== savedUser.username || password !== savedUser.password)
        reject(new Error("Invalid Credentials."));

      localStorage.setItem("loggedInDate", Date.now().toString());
      resolve(savedUser);
    }, 1000);
  });
};

function isDateExpired(dateString: string): boolean {
  const currentDate = new Date();
  const givenDate = new Date(dateString);

  return givenDate < currentDate;
}

export const verifyLogin = (): Promise<User> => {
  initCredentials();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const loggedInDateAsString = localStorage.getItem("loggedInDate");
        if (!loggedInDateAsString) reject(new Error("Session expired."));
        const isSessionExpired = isDateExpired(loggedInDateAsString as string);
        if (isSessionExpired) reject(new Error("Session expired."));
        resolve(getUserFormLocalStorage());
      } catch (e) {
        reject(e);
      }
    }, 1000);
  });
};

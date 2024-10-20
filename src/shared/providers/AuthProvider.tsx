import { PropsWithChildren, useEffect, useState } from "react";
import * as loginService from "../../loginService.ts";
import { User } from "../../types.ts";
import { AuthContext, AuthStatus } from "../context/AuthContext";

const AuthProvider = ({ children }: Readonly<PropsWithChildren>) => {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<AuthStatus>(AuthStatus.IDLE);

  useEffect(() => {
    verifyLogin();
  }, []);

  const login = async (username: string, password: string) => {
    console.log("Hello");

    setStatus(AuthStatus.LOADING);
    try {
      const user = await loginService.login(username, password);
      setStatus(AuthStatus.LOGGED_IN);
      setUser(user);
    } catch (error) {
      setStatus(AuthStatus.ERROR);
      alert("Error during login: " + error);
    }
  };

  const logout = async (): Promise<void> => {
    setUser(null);
    setStatus(AuthStatus.IDLE);
  };

  const verifyLogin = async () => {
    setStatus(AuthStatus.LOADING);
    try {
      const user = await loginService.verifyLogin();
      setStatus(AuthStatus.LOGGED_IN);
      setUser(user);
    } catch (error) {
      setStatus(AuthStatus.ERROR);
      alert("Error during login: " + error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        status,
        login,
        logout,
        verifyLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

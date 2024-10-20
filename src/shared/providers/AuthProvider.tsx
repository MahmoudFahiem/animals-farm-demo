import { PropsWithChildren, useMemo, useState } from "react";
import * as loginService from "../../loginService.ts";
import { User } from "../../types.ts";
import { AuthContext, AuthStatus } from "../context/AuthContext";

const AuthProvider = ({ children }: Readonly<PropsWithChildren>) => {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<AuthStatus>(AuthStatus.IDLE);

  const login = async (username: string, password: string) => {
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

  const logout = () => {
    setUser(null);
    setStatus(AuthStatus.IDLE);
  };

  const providerValue = useMemo(
    () => ({
      user,
      status,
      login,
      logout,
    }),
    [user, status]
  );

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

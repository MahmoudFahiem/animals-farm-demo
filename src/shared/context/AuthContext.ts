import { createContext, useContext } from "react";
import { User } from "../../types";

interface AuthContextType {
  user: User | null;
  status: AuthStatus;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export enum AuthStatus {
  IDLE,
  LOADING,
  LOGGED_IN,
  ERROR,
}

const AUTH_CONTEXT_INITIAL_VALUE: AuthContextType = {
  user: null,
  status: AuthStatus.IDLE,
  login: () => {
    throw new Error("login is not implemented.");
  },
  logout: () => {
    throw new Error("logout is not implemented.");
  },
};

export const AuthContext = createContext<AuthContextType>(
  AUTH_CONTEXT_INITIAL_VALUE
);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./AuthProvider";
import MuiProvider from "./MuiProvider";

function AppProvider({ children }: PropsWithChildren) {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MuiProvider>{children}</MuiProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default AppProvider;

import { useEffect } from "react";
import "./App.css";
import { initCredentials } from "./loginService";
import Layout from "./shared/components/layout/Layout";
import AppProvider from "./shared/providers/AppProvider";

function App() {
  useEffect(() => {
    initCredentials();
  }, []);

  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  );
}

export default App;

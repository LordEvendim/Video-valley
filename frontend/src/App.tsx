import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Center } from "@chakra-ui/react";

import { NavigationBar } from "./components/NavigationBar";
import { About } from "./components/pages/About";
import { Contracts } from "./components/pages/Contracts";
import { Mainpage } from "./components/pages/Mainpage";
import { useApplicationInitialization } from "./modules/initialization/useApplicationInitialization";
import { useWallet } from "./hooks/useWallet";
import { Dashboard } from "./components/pages/Dashboard";
import { useSeasonData } from "./stores/useSeasonData";

const App: React.FC<{}> = () => {
  const status = useApplicationInitialization();
  const [, connectWallet] = useWallet();

  const fetchSeasonEnding = useSeasonData((state) => state.fetchSeasonEnding);

  useEffect(() => {
    fetchSeasonEnding();
  }, [fetchSeasonEnding]);

  useEffect(() => {
    connectWallet();
  }, [connectWallet]);

  switch (status.status) {
    case "failed":
      return <div>Failed to initalize application</div>;
    case "loading":
      return <div>Loading...</div>;
    case "succeeded":
      return (
        <>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/videos" element={<Dashboard />} />
            <Route path="/contracts" element={<Contracts />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </>
      );
    default:
      return <Center>Application has failed!</Center>;
  }
};

export default App;

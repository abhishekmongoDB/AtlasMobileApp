// matlasadminapi-pwbagqp
// App.js
import React from "react";
import { GlobalProvider } from "./source_files/context/universal/Global/Global.context";
import AppNavigation from "./AppNavigation";

function App() {
  // AppIdSetupScreen
  return (
    <GlobalProvider>
      <AppNavigation />
    </GlobalProvider>
  );
}

export default App;

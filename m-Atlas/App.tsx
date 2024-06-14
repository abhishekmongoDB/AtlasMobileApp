// App.js
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationScreen } from "./source_files/navigation/NavigationContainer";
import { fetchRequest } from "./source_files/api/fetch.Request";
import { API_ENDPOINTS } from "./source_files/constant/API.constant";

function App() {
  
  return (
    <NavigationContainer>
      <NavigationScreen />
    </NavigationContainer>
  );
}

export default App;

// source_files/screens/BeforeLogin/LoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import Logo from "../../../source_files/assets/png/logo.png";
import Icon from "react-native-vector-icons/FontAwesome";
import { loginStyles } from "./LoginStyle";
import { useAppGlobal } from "../../context/universal/Global/Global.context";

const AppIdSetupScreen = ({}) => {
  const { setUpAppId } = useAppGlobal();

  const [appIdInput, setAppIdInput] = useState<string>("");
  return (
    <View style={loginStyles.container}>
      <Image source={Logo} style={loginStyles.logo} />

      <TextInput
        placeholder="App Id"
        style={loginStyles.username}
        onChange={(e) => {
          setAppIdInput(e.nativeEvent.text);
        }}
      />

      <TouchableOpacity
        onPress={() => {
          setUpAppId(appIdInput);
        }}
        style={loginStyles.button}
      >
        <Text style={loginStyles.text}>Setup App Id</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppIdSetupScreen;

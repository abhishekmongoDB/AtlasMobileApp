// source_files/screens/BeforeLogin/LoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import Logo from "../../../source_files/assets/png/logo.png";
import Icon from "react-native-vector-icons/FontAwesome";
import { loginStyles } from "./LoginStyle";
import { useAuth, useEmailPasswordAuth } from "@realm/react";

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { result, logInWithEmailPassword } = useAuth();
  const { register } = useEmailPasswordAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={loginStyles.container}>
      <Image source={Logo} style={loginStyles.logo} />

      <TextInput
        placeholder="Username"
        style={loginStyles.username}
        value={email}
        onChangeText={setEmail}
      />

      <View style={loginStyles.password}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          style={{
            flex: 1,
          }}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon
            name={passwordVisible ? "eye" : "eye-slash"}
            size={24}
            color="#2B664C"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => logInWithEmailPassword({ email, password })}
        style={loginStyles.button}
      >
        <Text style={loginStyles.text}>Login</Text>
      </TouchableOpacity>

      <Pressable
        onPress={() => register({ email, password })}
        style={[
          // styles.button,
          result.pending && styles.buttonDisabled,
          styles.registerButton,
        ]}
        disabled={result.pending}
      >
        <Text
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
            borderRadius: 5,
            backgroundColor: "#2A3642",
          }}
        >
          Register
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2A3642",
  },

  inputContainer: {
    padding: 10,
    alignSelf: "stretch",
    marginHorizontal: 10,
  },

  error: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
    color: "#FFFFFF",
  },

  input: {
    borderWidth: 1,
    borderColor: "#B5B5B5",
    padding: 10,
    height: 50,
    marginVertical: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    // ...shadows,
  },

  buttons: {
    marginTop: 16,
    flexDirection: "row",
  },

  // button: {
  //   ...buttonStyles.button,
  //   ...shadows,
  // },

  buttonDisabled: {
    opacity: 0.5,
  },

  registerButton: {
    backgroundColor: "#4238a6",
  },
});

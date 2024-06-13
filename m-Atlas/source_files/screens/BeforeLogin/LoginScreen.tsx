// source_files/screens/BeforeLogin/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, TextInput } from 'react-native';
import Logo from '../../../source_files/assets/png/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import { loginStyles, } from './LoginStyle';


const LoginScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View
      style={loginStyles.container}
    >
      <Image
        source={Logo}
        style={loginStyles.logo}
      />

      <TextInput
        placeholder="Username"
        style={loginStyles.username}
      />

      <View
        style={loginStyles.password}
      >
        <TextInput
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          style={{
            flex: 1,
          }}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon name={passwordVisible ? 'eye' : 'eye-slash'} size={24} color="#2B664C" />
        </TouchableOpacity>
      </View>


      <TouchableOpacity
        onPress={() => navigation.navigate('MainTabs')}
        style={loginStyles.button}
      >
        <Text
          style={loginStyles.text}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

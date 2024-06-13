import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const GifExample = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../source_files/assets/gif/splash.gif')} 
        style={styles.gif}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B664C',
  },
  gif: {
    width: "100%",   
    height: 300,
  },
});

export default GifExample;

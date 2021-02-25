import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState }from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
  TextInput,
  Switch,
  Modal
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Spacer = () => <View style={styles.spacing} />;

function Onboard(){
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/logo.png')} />
      <Spacer />
      <Text style={styles.title}>
        Capture and share first person narratives of complex social experiences
      </Text>
      <Spacer />

      <Button
        title="Login with Email"
        color="#f08f80"
        onPress={() =>
          navigation.navigate('Login with Email', { name: 'Login with Email' })
        }
      />
      <Spacer />
      <Spacer />
      <Button
        title="Login with Project ID"
        color="#f08f80"
        onPress={() => navigation.navigate('Login with Project ID', { name: 'Login with Project ID' })}
      />
      <Spacer />


      <Text style={styles.miniText}>
        By clicking continue, you agree to Soapbox’s Terms of Service and
        Privacy Policy.
      </Text>
      <Spacer />
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    //marginHorizontal: 16,
    backgroundColor: 'white',
  },

  title: {
    textAlign: 'center',
    marginVertical: 40,
    marginHorizontal: 30,
  },

  miniText: {
    textAlign: 'center',
    marginVertical: 40,
    marginHorizontal: 70,
    fontSize: 10,
  },

  image: {
    width: 150,
    height: 150,
    marginTop: 100 ,
    alignSelf: "center",
  },
});

export default Onboard;

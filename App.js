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

function Onboarding({ navigation }) {
  return (

    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/logo.png')} />
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

function WithEmail({ navigation }) {
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Profile screen</Text>
    //   <Button title="Go back" onPress={() => navigation.goBack()} />
    // </View>
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/logo.png')} />
      <Spacer />
      <Text style={styles.title}>
        Capture and share first person narratives of complex social experiences
      </Text>
      <Spacer />
      <View style={styles.boxes}>
        <TextInput
          style={{
            height: 60,
            width: 300,
            borderColor: 'gray',
            borderBottomWidth: 1.5,
            padding: 0,
            fontSize: 18,
            alignItems: 'center',
          }}
          placeholder="Email"
        />
        <Spacer />
        <TextInput
          style={{
            height: 60,
            width: 300,
            borderColor: 'gray',
            borderBottomWidth: 1.5,
            padding: 0,
            fontSize: 18,
            alignItems: 'center',
          }}
          placeholder="Password"
        />
      </View>
      <Spacer />

      <Button
        title="Login"
        color="#f08f80"
        onPress={() =>
          navigation.navigate('Consent Form', { name: 'Consent Form' })
        }
      />
      <Spacer />
      <View style={styles.miniCon}>
        <Text style={styles.miniCon}>Forgot Password</Text>
      </View>
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
    </View>
  );
}

function WithID({ navigation }) {
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Profile screen</Text>
    //   <Button title="Go back" onPress={() => navigation.goBack()} />
    // </View>
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/logo.png')} />
      <Spacer />
      <Text style={styles.title}>
        Capture and share first person narratives of complex social experiences
      </Text>
      <Spacer />
      <View style={styles.boxes}>
        <TextInput
          style={{
            height: 60,
            width: 300,
            borderColor: 'gray',
            borderBottomWidth: 1.5,
            padding: 0,
            fontSize: 18,
            alignItems: 'center',
          }}
          placeholder="Project ID"
        />
      <Spacer />
      <Button
        title="Login"
        color="#f08f80"
        onPress={() =>
          navigation.navigate('Consent Form', { name: 'Consent Form' })
        }
      />
      </View>
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
    </View>
  );
}

function ConsentForm({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const [isEnabled4, setIsEnabled4] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
  const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.containerConsent}>
      <Text style={[styles.titleBig]}>
        CONSENT
      </Text>

      <Text style={[styles.title]}>
        I consent to share my story with [organization name] and its affiliates for use at their discretion. I recognize that uses may include but are not limited to marketing, grant writing, fundraising, and research.
      </Text>

      <View style={styles.rows}>
        <Text style={[styles.contitle]}>
          I consent for my audio file to be used
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#0dd417" }}
          thumbColor={isEnabled ? "#8dfc93" : "#f4f3f4"}
          ios_backgroundColor="#c91212"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.rows}>
        <Text style={[styles.contitle]}>
          I consent for my video file to be used
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#0dd417" }}
          thumbColor={isEnabled2 ? "#8dfc93" : "#f4f3f4"}
          ios_backgroundColor="#c91212"
          onValueChange={toggleSwitch2}
          value={isEnabled2}
        />
      </View>
      <View style={styles.rows}>
        <Text style={[styles.contitle]}>
          I am over 18
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#0dd417" }}
          thumbColor={isEnabled3 ? "#8dfc93" : "#f4f3f4"}
          ios_backgroundColor="#c91212"
          onValueChange={toggleSwitch3}
          value={isEnabled3}
        />
      </View>
      <View style={styles.rows}>
        <Text style={[styles.contitle]}>
          I am signing on behalf of someone under 18
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#0dd417" }}
          thumbColor={isEnabled4 ? "#8dfc93" : "#f4f3f4"}
          ios_backgroundColor="#c91212"
          onValueChange={toggleSwitch4}
          value={isEnabled4}
        />
      </View>
      <TextInput
          style={{
            height: 60,
            width: 300,
            borderColor: 'gray',
            borderBottomWidth: 1.5,
            padding: 0,
            fontSize: 18,
            alignItems: 'center',
            alignSelf:'center',
          }}
          placeholder="Sign Here"
        />
      <Spacer />
      <Spacer />
      <Spacer />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Closed.");
        }}
      >
        <View style={styles.bottomView}>
          <View style={styles.modalView}>
            <Text style={[styles.titleBig]}>
              Remember you can always request a copy of this recording.
            </Text>
            <Spacer />
            <Spacer />
            <Spacer />
            <View style={styles.button}>
              <Button
                title="Continue"
                color="#f08f80"
                onPress={() => {
                setModalVisible(!modalVisible);
              }}
              />
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.button}>
        <Button
          title="Done"
          color="#f08f80"
          onPress={() => {
          setModalVisible(true);
        }}
        />
      </View>
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Login with Email"
          component={WithEmail}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="Login with Project ID"
          component={WithID}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="Consent Form"
          component={ConsentForm}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    //marginHorizontal: 16,
    backgroundColor: 'white',
  },
  containerConsent: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    backgroundColor: 'white',
  },
  rows:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  titleBig: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 30,
    alignSelf:'center',
  },
  button: {
    marginBottom: 60,
    alignSelf: 'center',
  },
  miniCon: {
    textDecorationLine: 'underline',
    marginLeft: 20,
  },
  boxes: {
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 40,
    marginHorizontal: 30,
  },
  contitle: {
    marginHorizontal: 30,

  },
  miniText: {
    textAlign: 'center',
    marginVertical: 40,
    marginHorizontal: 70,
    fontSize: 10,
  },
  spacing: {
    marginVertical: 15,
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 100 ,
    alignSelf: "center",
  },
  bottomView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    height: 400,
    width: 400,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 45,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
});

export default App;

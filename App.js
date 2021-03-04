import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState, useEffect }from 'react';
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
  Modal,
  FlatList,
  TouchableOpacity,
  Picker,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Audio } from 'expo-av';
import { Camera } from 'expo-camera';

const Spacer = () => <View style={styles.spacing} />;

function Onboarding({ navigation }) {
  return (

    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/logo.jpeg')} />
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
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/logo.jpeg')} />
      <Spacer />
      <Text style={styles.title}>
        Capture and share first person narratives of complex social experiences
      </Text>
      <Spacer />
      <View style={styles.boxes}>
        <TextInput
          style={styles.tInput}
          placeholder="Email"
        />
        <Spacer />
        <TextInput
          style={styles.tInput}
          placeholder="Password"
        />
      </View>
      <Spacer />

      <Button
        title="Login"
        color="#f08f80"
        onPress={() =>
          navigation.navigate('Project Page', { name: 'Project Page' })
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
    </KeyboardAvoidingView>
  );
}

function WithID({ navigation }) {
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Profile screen</Text>
    //   <Button title="Go back" onPress={() => navigation.goBack()} />
    // </View>
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/logo.jpeg')} />
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
          navigation.navigate('Interviews', { name: 'Interviews' })
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
    </KeyboardAvoidingView>
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
                setModalVisible(false)
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
          onPress={() =>
            navigation.navigate('IntDescription', { name: 'IntDescription' })
          }
        />
      </View>
    </View>
  );
}


const DATA = [
  {
    id: 'p1',
    title: 'Project 1',
    nav: 'Interviews'
  },
  {
    id: 'p2',
    title: 'Project 2',
    nav: 'Consent Form'
  },
  {
    id: 'p3',
    title: 'Project 3',
    nav: 'Consent Form'
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity
    onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.listtitle}>{item.title}</Text>
  </TouchableOpacity>
);

function ProjectPage({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#f08f80" : "#f08f80";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        onPress={() =>
          navigation.navigate(item.nav, { name: item.nav })}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>

    </View>


  );
}

const INTDATA = [
  {
    id: 'int1',
    title: 'John Smith',
    nav: 'IntDetails'
  },
];
function Interviews({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#f08f80" : "#f08f80";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        onPress={() =>
          navigation.navigate(item.nav, { name: item.nav })}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={INTDATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>

      <Button
        title="Add Interview"
        color="#f08f80"
        onPress={() =>
          navigation.navigate('Consent Form', { name: 'Consent Form' })
        }
      />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
    </View>
  );
}

function IntDescription({ navigation }) {

      return (
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
        <ScrollView>
        <View style={styles.container}>

          <View style={styles.boxes}>
            <TextInput style={styles.tInput}
              placeholder="Project Name"
            />

            <Spacer />

            <TextInput style={styles.tInput}
              placeholder="Project Description"
            />

            <Spacer />

            <TextInput style={styles.tInput}
              placeholder="Project Contact"
            />

            <Spacer />

          </View>

          <Picker
            style={styles.onePicker} itemStyle={styles.onePickerItem}
            onValueChange={(value) => console.log(value)}
            placeholder="Gender"
          >
            <Picker.Item label='Gender' value=''/>
            <Picker.Item label="Male" value="male"/>
            <Picker.Item label="Female" value="female"/>
            <Picker.Item label="Non-Binary" value="nonBinary" />
            <Picker.Item label="Prefer not to say" value="na" />
          </Picker>


          <Picker
            style={styles.onePicker} itemStyle={styles.onePickerItem}
            onValueChange={(value) => console.log(value)}
          >
            <Picker.Item label='Race' value=''/>
            <Picker.Item label="American Indian" value="americanIndian" />
            <Picker.Item label="Asian" value="asian" />
            <Picker.Item label="Black or African American" value="black" />
            <Picker.Item label="Native Hawaiian" value="hawaiian" />
            <Picker.Item label="White" value="white" />
            <Picker.Item label="Other" value="other" />
            <Picker.Item label="Prefer not to say" value="na" />
          </Picker>

          <View style={styles.boxes}>
          <TextInput style={styles.tInput}
            placeholder="Age"
          />

          <Spacer />

          <TextInput style={styles.tInput}
            placeholder="Date of Recording"
          />

          <Spacer />

          <TextInput style={styles.tInput}
            placeholder="Location"
          />

          <Spacer />

          <TextInput style={styles.tInput}
            placeholder="Tags"
          />

          <Spacer />

          </View>

          <View style={styles.button}>
          <Button
            title="Next"
            color="#f08f80"
            // onPress={() =>
            //   navigation.navigate('Consent Form', { name: 'Consent Form' })
            // }
          />
        </View>

        </View>
        </ScrollView>
        </KeyboardAvoidingView>
      );

}

const JOHNDATA = [
  {
    id: 'consentF',
    title: 'Consent Form',
    nav: 'John Smith'
  },
  {
    id: 'IntDes',
    title: 'Interview Description',
    nav: 'John Smith'
  },
  {
    id: 'audios',
    title: 'Audio 1',
    nav: 'John Smith'
  },
];
function IntDetails({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#f08f80" : "#f08f80";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        onPress={() =>
          navigation.navigate(item.nav, { name: item.nav })}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={JOHNDATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
      <Button
        title="Add Recording"
        color="#f08f80"
        onPress={() =>
          navigation.navigate('QuickAdd', { name: 'QuickAdd' })
        }
      />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Button
        title="Upload to Database"
        color="#f08f80"
        // onPress={() =>
        //   navigation.navigate('Consent Form', { name: 'Consent Form' })
        // }
      />

      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
    </View>
  );
}

const QUICKADD = [
  {
    id: 'aud',
    title: 'New Audio Recording',
    nav: 'RecAudio'
  },
  {
    id: 'vid',
    title: 'New Video Recording',
    nav: 'RecVideo'
  },
  {
    id: 'note',
    title: 'New Note',
    nav: 'Notes'
  },
];
function QuickAdd({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#f08f80" : "#f08f80";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        onPress={() =>
          navigation.navigate(item.nav, { name: item.nav })}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={QUICKADD}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>

    </View>
  );
}

function Notes({ navigation }) {
  return(
    <View style={styles.noteCon}>
    <View style={styles.rectangle}>
      <TextInput
        style={styles.noteInput}
        placeholder="Notes"
      />

    </View>
    <Spacer />
    <Spacer />

    <Button
      title="Add"
      color="#f08f80"
      // onPress={() =>
      //   navigation.navigate('Consent Form', { name: 'Consent Form' })
      // }
    />
    </View>

  );
}

function RecAudio({ navigation }) {
  const [recording, setRecording] = React.useState();
  const [sound, setSound] = React.useState();
  const [uriLoc, setUriLoc] = React.useState();
  const [rec, setRec] = React.useState(false);

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log('Starting recording..');
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setUriLoc(uri)
    console.log('Recording stopped and stored at', uri);
    setRec(true)
  }


  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(uriLoc);
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);


  return (

    <View style={styles.audio}>

      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
        color='#f08f80'
      />

      <Button
        title={rec ? 'Play' : ''}
        onPress={playSound}
        color='#f08f80'
      />

    </View>
    // <TouchableOpacity>
    //   <Image style={styles.micImage} source={require('./assets/microphone.jpeg')} />
    //   <View style={styles.SeparatorLine} />
    //   <Text style={styles.TextStyle} > Record </Text>
    // </TouchableOpacity>
  );
}

// function RecVideo({ navigation }) {
//   const [recording, setRecording] = React.useState();
//   const [sound, setSound] = React.useState();
//   const [uriLoc, setUriLoc] = React.useState();
//   const [rec, setRec] = React.useState(false);
//
//   async function startRecording() {
//     try {
//       console.log('Requesting permissions..');
//       await Audio.requestPermissionsAsync();
//       await Audio.setAudioModeAsync({
//         allowsRecordingIOS: true,
//         playsInSilentModeIOS: true,
//       });
//       console.log('Starting recording..');
//       const recording = new Audio.Recording();
//       await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
//       await recording.startAsync();
//       setRecording(recording);
//       console.log('Recording started');
//     } catch (err) {
//       console.error('Failed to start recording', err);
//     }
//   }

function RecVideo({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonV}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
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
        <Stack.Screen
          name="Project Page"
          component={ProjectPage}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="Interviews"
          component={Interviews}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="IntDescription"
          component={IntDescription}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="IntDetails"
          component={IntDetails}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="QuickAdd"
          component={QuickAdd}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="Notes"
          component={Notes}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="RecAudio"
          component={RecAudio}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="RecVideo"
          component={RecVideo}
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
  item: {
    justifyContent: 'center',
    backgroundColor: '#f08f80',
    marginVertical: 1,
    height: 60,
  },
  listtitle: {
    color: 'white',
    textAlign: 'left',
    fontSize: 18,
    marginLeft: 15,
  },
  tInput: {
    height: 60,
    width: 300,
    borderColor: 'gray',
    borderBottomWidth: 1.5,
    padding: 0,
    fontSize: 18,
    alignItems: 'center',
  },
  onePicker: {
    color: '#f08f80',
    marginBottom: 20
  },
  onePickerItem: {

    color: '#f08f80'
  },
  noteCon: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  noteInput: {
    height: 60,
    width: 300,
    marginTop: 20,
    fontSize: 18,
    alignItems: 'center',
  },
  rectangle: {
    marginVertical: 35,
    marginHorizontal:10,
    height: 500,
    width: 350,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    borderRadius: 30
  },
  audio: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    color: '#f08f80',
    padding: 10,
  },
  micImage: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  buttonV: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  }
});

export default App;

import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  Image,
  Alert,
  Button,
  TextInput
} from "react-native";
import { Icon } from "@rneui/themed";
import { auth } from '../firebase'
import { StatusBar } from "expo-status-bar";
import DropDownPicker from "react-native-dropdown-picker";

const HomeScreen = () => {

 const navigation = useNavigation();

 const handleSignOut = () => {
   auth
     .signOut()
     .then(() => {
       navigation.replace("Login");
     })
     .catch((error) => alert(error.message));
 };



   const [isLoading, setLoading] = useState(true);
   const [data, setData] = useState([]);


         const getAnActivity = () => {
           fetch("https://www.boredapi.com/api/activity")
             .then((response) => response.json())
             .then((json) => {
               setData(json);
             })
             .catch((error) => console.error(error))
             .finally(() => {setLoading(false);});

             console.log(data);
         };
       
 
if (isLoading) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topb}>
        <TouchableOpacity onPress={handleSignOut}>
          <Icon
            name="unlock"
            type="evilicon"
            color="#fff"
            style={styles.test}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={require("../assets/FADET.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.pagetext}>Wait lemme think..</Text>
      <TouchableOpacity
        onPress={getAnActivity}
        style={[styles.button, styles.buttonstyle1]}
      >
        <Text style={styles.buttonText}>Get an activity</Text>
      </TouchableOpacity>
    </View>
  );
}

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topb}>
        <TouchableOpacity onPress={handleSignOut}>
          <Icon
            name="unlock"
            type="evilicon"
            color="#fff"
            style={styles.test}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={require("../assets/FADET.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={getAnActivity}
          style={[styles.button, styles.buttonstyle1]}
        >
          <Text style={styles.buttonText}>Get another activity</Text>
        </TouchableOpacity>
      </View>
      <Text>Activity Name :</Text>
      <Text style={styles.resText}>{data.activity}</Text>
      <Text>Activity Type :</Text>
      <Text style={styles.resText}>{data.type}</Text>
    </View>
  );
}


export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#b8612e",
  },
  contentContainer: {
    paddingBottom: "80%",
  },
  resText : {
    color : "white",
  },
  image: {
    width: 200,
    height: 153,
    marginBottom: 15,
  },

  buttonContainer: {
    height: 36,
    width: 286,
    marginTop: 1,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#06cab5",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonstyle1: {
    height: 36,
    width: 286,
    marginTop: 15,
    backgroundColor: "#ffffff",
  },
  buttonText: {
    color: "black",
    fontWeight: "700",
    fontSize: 12,
    minHeight: 15,
  },
  topb: {
    alignSelf: "stretch",
    height: 42,
    flexDirection: "row", // row
    alignItems: "center",
    justifyContent: "space-between", // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
    marginTop:25,
    marginBottom:100
  },
  test: {
    marginTop: 0,
  },
  pagetext: {
    color: "white",
  }
});

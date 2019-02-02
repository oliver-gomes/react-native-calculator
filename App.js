import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import { LinearGradient } from "expo";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#37498F", "#19153E"]}
          start={[0.1, 0.1]}
          end={[1, 1]}
        >
          <View style={styles.top}>
            <Text style={styles.number}>0</Text>
          </View>
        </LinearGradient>

        <View style={styles.bottom}>
          <View style={styles.row}>
            <Button text="clear" />
            <Button text="pow" />
            <Button text="swap" />
            <Button text="/" />
          </View>
          <View style={styles.row}>
            <Button text="9" />
            <Button text="8" />
            <Button text="7" />
            <Button text="X" />
          </View>
          <View style={styles.row}>
            <Button text="6" />
            <Button text="5" />
            <Button text="4" />
            <Button text="-" />
          </View>
          <View style={styles.row}>
            <Button text="3" />
            <Button text="2" />
            <Button text="1" />
            <Button text="+" />
          </View>
          <View style={styles.row}>
            <Button text="0" />
            <Button text="." />
            <Button text="enter" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    paddingTop: 100
    // backgroundColor: "#2B336D"
  },
  bottom: {
    flex: 1,
    backgroundColor: "#5A7BE9"
  },
  number: {
    color: "#fff",
    // backgroundColor: "#2B336D",
    textAlign: "right",
    padding: 10,
    fontSize: 30,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderColor: "#fff"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "pink"
  }
});

import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Button = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#6192FF" },
  text: {}
});
export default Button;

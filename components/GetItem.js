import React from "react";
import { View, Text, StyleSheet } from "react-native";
const GetItem = () => {
  return (
    <View style={styles.listItem}>
      <Text>Hii</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10, //this is based on the css but not the css
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
export default GetItem;

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import GetItem from "./components/GetItem";
export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    // setCourseGoals([...courseGoals,enteredGoal])
    //we should not do like above but we should update the state with function if new state is dependent on the previous one
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
    console.log(enteredGoal);
    console.log(courseGoals);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList
        data={courseGoals}
        renderItem={itemData => {
          <View style={styles.listItem}>
            <Text>{itemData.item.value} </Text>
            <Text>Hii guys</Text>
          </View>;
        }}
      />
      <GetItem />
      {/* <ScrollView>
        {courseGoals.map(goal => (
          <View style={styles.listItem} key={goal}>
            <Text>{goal} </Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
  },
});

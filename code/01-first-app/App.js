import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);


  function addGoalHandler(enteredGoalText) {
    console.log(enteredGoalText);
    setCourseGoals(currentCourseGoals =>
      [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }]
    );
  };

  function deleteGoalHandler(id) {
    console.log('DELETE');
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.
        filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return <GoalItem
            id={itemData.item.id}
            text={itemData.item.text}
            onDeleteItem={deleteGoalHandler} />
        }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}>

        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // Set padding to 75 for top and bottom, 50 for left and right
    paddingTop: 75,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5
  }
});

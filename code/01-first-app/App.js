import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    console.log(enteredGoalText);
    setCourseGoals(currentCourseGoals =>
      [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }]
    );
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal'
          placeholderTextColor={'#D3D3D3'}
          onChangeText={goalInputHandler}
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (<View style={styles.goalItem}>
            <Text style={styles.goalText}>{itemData.item.text}</Text>
          </View>)
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 8,
    color: 'white'
  },
  goalText: {
    color: 'white'
  }
});

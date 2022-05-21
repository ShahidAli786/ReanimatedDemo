/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-shadow */
import {View, Text, StyleSheet} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import ListItem from '../components/ListItem';
import {ScrollView} from 'react-native-gesture-handler';

const BACKGROUND_COLOR = '#FAFBFF';

const TITLES = [
  'Toturial React Native',
  'Learn Animation in React Native',
  'Applying Gesture Handler in React Native',
  'Swipe to Delete in React Native',
  'Leave a ⭐️ on the GitHub Repo',
];

export interface TaskInterface {
  title: string;
  index: number;
}

const TASKS: TaskInterface[] = TITLES.map((title, index) => ({title, index}));

export default function SwipeToDelete() {
  const [tasks, setTasks] = useState(TASKS);

  const scrollRef = useRef(null);
  const onDismiss = useCallback((task: TaskInterface) => {
    setTasks(tasks => tasks.filter(item => item.index !== task.index));
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks</Text>
      <ScrollView ref={scrollRef} style={{flex: 1}}>
        {tasks.map(task => (
          <ListItem
            simultaneousHandlers={scrollRef}
            key={task.index}
            task={task}
            onDismiss={onDismiss}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  title: {
    fontSize: 60,
    marginVertical: 20,
    paddingLeft: '5%',
  },
});

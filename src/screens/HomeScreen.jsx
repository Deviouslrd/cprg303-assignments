/**
 * Home screen
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Button} from 'react-native';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import {useState} from 'react';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({navigation}) {
  const [taskList, setTaskList] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = taskText => {
    setTaskList([...taskList, taskText]);
  };

  return (
    <MainLayout>
      <SafeAreaView>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
        <ToDoList tasks={taskList} />
        <ToDoForm addTask={addTask} />
      </SafeAreaView>
    </MainLayout>
  );
}

export default HomeScreen;

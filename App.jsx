/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import {useState} from 'react';

function App() {
  const [taskList, setTaskList] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  return (
    <SafeAreaView>
      <ToDoList tasks={taskList} />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;

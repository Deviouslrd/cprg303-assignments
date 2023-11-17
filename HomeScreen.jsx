/**
 * Home screen
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

  const addTask = taskText => {
    setTaskList([...taskList, taskText]);
  };

  return (
      <SafeAreaView>
        <ToDoList tasks={taskList} />
        <ToDoForm addTask={addTask} />
      </SafeAreaView>
  );
}

export default App;

import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({navigation}) {
  return (
    <MainLayout>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <SafeAreaView>
        <Text styles={styles.task}>To Do List</Text>
        <Text styles={styles.task}>Connor deHaas</Text>
        <Text styles={styles.task}>November 17, 2023</Text>
      </SafeAreaView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default AboutScreen;

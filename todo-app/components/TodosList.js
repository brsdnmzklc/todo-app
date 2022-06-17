import React, {useState} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const TodosList = ({item, todos, setTodos}) => {
  const removeTodo = key => {
    setTodos(todos.filter(e => e.key !== key));
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => removeTodo(item.key)}>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    margin: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#2b9348',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default TodosList;

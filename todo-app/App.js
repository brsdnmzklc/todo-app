import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import AddTodos from './components/AddTodos';
import TodosList from './components/TodosList';

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Yapılacaklar</Text>
        <Text style={styles.headerText}>{todos.length}</Text>
      </View>
      <FlatList
        data={todos}
        keyExtractor={item => item.key}
        renderItem={({item}) => {
          return <TodosList todos={todos} setTodos={setTodos} item={item} />;
        }}
      />
      <AddTodos todos={todos} setTodos={setTodos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#001b29',
  },
  header: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    marginTop: 10,
  },
  headerText: {
    fontSize: 24,
    color: '#f77f00',
    fontWeight: 'bold',
  },
});

export default App;

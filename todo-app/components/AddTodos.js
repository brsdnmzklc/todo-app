import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const AddTodos = ({todos, setTodos}) => {
  const [text, setText] = useState('');
  const addTodos = text => {
    setTodos([
      ...todos,
      {title: text, key: Math.floor(Math.random() * 9999).toString()},
    ]);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Yapılacak..."
        style={styles.textInput}
        placeholderTextColor="#8d99ae"
        onChangeText={text => setText(text)}
      />
      <View style={styles.line} />
      <TouchableOpacity
        style={[styles.button, {backgroundColor: text ? '#d90429' : '#8d99ae'}]}
        onPress={() => addTodos(text)}>
        <Text style={styles.text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 130,
    backgroundColor: '#2b2d42',
    borderRadius: 8,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    marginHorizontal: 15,
    borderRadius: 8,
  },
  text: {
    color: '#edf2f4',
  },
  textInput: {
    fontSize: 16,
    color: '#edf2f4',
  },
  line: {
    borderWidth: 1,
    borderColor: '#8d99ae',
    marginBottom: 10,
  },
});

export default AddTodos;

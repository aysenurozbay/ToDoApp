import React, {FC, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';

import {fonts} from '../../assets/fonts';
import NoteIcon from '../../assets/icons/noteIcon';
import ToDoCard from '../../components/ToDoCard/ToDoCard';
import colors from '../../utils/colors';
import {metrics} from '../../utils/metrics';

interface IHomeViewProps {}

const HomeView: FC<IHomeViewProps> = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTask = newTask => {
    console.log(tasks.some(year => year === newTask));

    if (newTask) {
      if (tasks.some(inputNew => inputNew === newTask)) {
        Alert.alert('KENDİMLE ÜÇ SANİYE FELAN GURUR DUYMUŞTUM HALBUKİ');
      } else {
        setTasks([...tasks, newTask]);
      }
    }
  };

  const renderItem = ({item}) => <ToDoCard task={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>To-Do List </Text>
        {/* <Text style={styles.description}>Enter the ToDo and Hit the button</Text> */}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter the ToDo and Hit the button"
          value={input}
          onChangeText={text => setInput(text)}
        />
        <TouchableOpacity style={styles.button} onPress={() => handleAddTask(input)}>
          <NoteIcon fill="#D65108" size={150} />
        </TouchableOpacity>
      </View>

      <View style={styles.toDoListContainer}>
        <FlatList data={tasks} renderItem={renderItem} keyExtractor={item => item.id} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {margin: 10},
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    color: '#D65108',
    fontSize: 40,
    fontFamily: fonts.eBGaramond,
  },
  description: {
    color: '#adb5bd',
    fontFamily: fonts.silkScreen,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: metrics.screenWidth - 10,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    fontSize: 12,
    borderColor: colors.gray.borderGray,
    width: metrics.screenWidth - 75,
    borderRadius: 10,
  },
  button: {
    height: 40,
    marginLeft: 10,
  },
  subtitle: {
    fontFamily: fonts.eBGaramond,
    fontSize: 20,
  },

  toDoListContainer: {
    marginTop: 20,
  },
});
export default HomeView;

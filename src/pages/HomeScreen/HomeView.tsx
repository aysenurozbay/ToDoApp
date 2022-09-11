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
import NoteIcon from '../../assets/icons/noteIcon';
import ToDoCard from '../../components/ToDoCard/ToDoCard';
import {fonts} from '../../assets/fonts';
import colors from '../../utils/colors';
import {metrics} from '../../utils/metrics';
import {ToDoType} from './TodoType';

interface IHomeViewProps {}

const HomeView: FC<IHomeViewProps> = () => {
  const [tasks, setTasks] = useState<Array<{id: string; toDo: string; isCompleted: boolean}>>([]);
  const [input, setInput] = useState<string>('');

  const handleAddTask = (useInput: string) => {
    // console.log(tasks);

    const isTaskExist = tasks.find(post => post.toDo === useInput);

    if (!!input.length && !isTaskExist) {
      setTasks([
        ...tasks,
        {
          id: Math.random().toString(36).substr(2, 9),
          toDo: input,
          isCompleted: false,
        },
      ]);
      return;
    }
    Alert.alert('There must be something wrong!');
  };
  const handleDeleteTodo = (id: string) => {
    setTasks(
      tasks.filter(todo => {
        if (todo.id !== id) {
          return true;
        }
      }),
    );
  };
  const handleChecked = (id: string) => {
    setTasks(
      tasks.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      }),
    );
  };

  const renderItem = ({item}: {item: ToDoType}) => (
    <ToDoCard
      task={item}
      setChecked={() => handleChecked(item.id)}
      deleteTask={() => handleDeleteTodo(item.id)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>ToDo List </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter the ToDo and Hit the button"
          onChangeText={text => setInput(text)}
        />
        <TouchableOpacity style={styles.button} onPress={() => handleAddTask(input)}>
          <NoteIcon fill="#ff7c1f" size={150} />
        </TouchableOpacity>
      </View>

      <View style={styles.toDoListContainer}>
        <FlatList data={tasks} renderItem={renderItem} keyExtractor={item => item.id} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    flexDirection: 'column',
  },
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.orange,
    fontSize: 40,
    fontFamily: fonts.eBGaramond,
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
    fontFamily: fonts.eBGaramond,
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

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import colors from '../../utils/colors';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import CheckIcon from '../../assets/icons/CheckIcon';
import {ToDoType} from '../../pages/HomeScreen/TodoType';
import EmptyDotIcon from '../../assets/icons/EmptyDotIcon';

interface IToDoCardProps {
  // task: Array<ToDoType>;
  task: ToDoType;
  deleteTask: () => void;
  setChecked: () => void;
}

const ToDoCard: FC<IToDoCardProps> = ({task, deleteTask, setChecked}) => {
  return (
    <View style={styles.container}>
      <View style={styles.toDoContainer}>
        <EmptyDotIcon fill={task.isCompleted ? '#54a72a' : '#d3081c'} size={30} />

        <Text style={task.isCompleted ? styles.completedTodoTitle : styles.notCompletedTodoTitle}>
          {task.toDo}
        </Text>
      </View>

      <View style={styles.iconContainer}>
        {!task.isCompleted ? (
          <TouchableOpacity onPress={setChecked}>
            <CheckIcon fill="#54a72a" size={27} />
          </TouchableOpacity>
        ) : null}

        <TouchableOpacity onPress={deleteTask}>
          <DeleteIcon fill="#d3081c" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.gray.borderGray,
    marginTop: 12,
    padding: 5,
    paddingVertical: 10,
  },
  notCompletedTodoTitle: {
    color: colors.black,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  completedTodoTitle: {
    color: colors.black,
    fontWeight: 'bold',
    paddingHorizontal: 30,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  todoId: {
    color: colors.gray.default,
  },
  iconContainer: {
    width: 60,
    backgroundColor: colors.white,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  toDoContainer: {
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ToDoCard;

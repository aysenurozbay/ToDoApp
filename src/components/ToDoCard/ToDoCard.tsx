import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC, useState} from 'react';
import colors from '../../utils/colors';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import CheckIcon from '../../assets/icons/CheckIcon';
import {ToDoType} from '../../pages/HomeScreen/TodoType';
import EmptyDotIcon from '../../assets/icons/EmptyDotIcon';

interface IToDoCardProps {
  // task: Array<ToDoType>;
  task: ToDoType;
}

const ToDoCard: FC<IToDoCardProps> = ({task}) => {
  // const [renderTask, setRenderTask] =
  //   useState<Array<{id: string; toDo: string; isCompleted: boolean}>>();
  // setRenderTask(...task);
  const completeTask = () => {
    // setRenderTask({
    //   id: task.id,
    //   toDo: task.toDo,
    //   isCompleted: true,
    // });
    task.isCompleted = true;

    console.log(task.isCompleted);
  };

  const deleteTask = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.toDoContainer}>
        <EmptyDotIcon fill={task.isCompleted ? '#2dc653' : '#d90429'} size={30} />

        <Text style={task.isCompleted ? styles.completedTodoTitle : styles.notCompletedTodoTitle}>
          {task.toDo}
        </Text>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => completeTask()}>
          <CheckIcon fill="#2dc653" size={27} />
        </TouchableOpacity>
        <DeleteIcon fill="#d90429" size={30} />
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
    paddingHorizontal: 20,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000',
  },
  todoId: {
    color: colors.gray.default,
  },
  iconContainer: {
    width: 60,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
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

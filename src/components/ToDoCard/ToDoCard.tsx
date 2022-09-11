import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import CheckIcon from '../../assets/icons/CheckIcon';
import EmptyDotIcon from '../../assets/icons/EmptyDotIcon';
import {ToDoType} from '../../pages/HomeScreen/TodoType';
import colors from '../../utils/colors';
import {fonts} from '../../assets/fonts';

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
        {task.isCompleted ? (
          <CheckIcon fill="#54a72a" size={27} />
        ) : (
          <EmptyDotIcon fill={'#54a72a'} size={30} />
        )}

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

    paddingHorizontal: 20,
    fontFamily: fonts.eBGaramond,
  },
  completedTodoTitle: {
    color: colors.black,

    paddingHorizontal: 30,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontFamily: fonts.eBGaramond,
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

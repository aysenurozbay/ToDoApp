import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import colors from '../../utils/colors';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import CheckIcon from '../../assets/icons/CheckIcon';

interface IToDoCardProps {
  task: any;
}

const ToDoCard: FC<IToDoCardProps> = ({task}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.todoTitle}>{task}</Text>
      <View style={styles.iconContainer}>
        <CheckIcon fill="#2dc653" size={27} />
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
  todoTitle: {
    color: colors.black,
  },
  iconContainer: {
    width: 60,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ToDoCard;

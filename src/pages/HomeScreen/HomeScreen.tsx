import React, {FC} from 'react';
import {View} from 'react-native';
import HomeView from './HomeView';

interface IHomeScreenProps {}

const HomeScreen: FC<IHomeScreenProps> = () => {
  return (
    <View>
      <HomeView />
    </View>
  );
};

export default HomeScreen;

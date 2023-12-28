import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeHeader from '../components/molecules/homeHeader';
import {ScrollView} from 'react-native';
import Category from '../components/molecules/category/Category';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <HomeHeader />
      <ScrollView>
        <Category />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Card from '../../atoms/card';

const Category = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <Card imgUrl="https://links.papareact.com/gn7" title="test" />
      <Card imgUrl="https://links.papareact.com/gn7" title="test" />
      <Card imgUrl="https://links.papareact.com/gn7" title="test" />
      <Card imgUrl="https://links.papareact.com/gn7" title="test" />
      <Card imgUrl="https://links.papareact.com/gn7" title="test" />
      <Card imgUrl="https://links.papareact.com/gn7" title="test" />
      <Card imgUrl="https://links.papareact.com/gn7" title="test" />
      <Card imgUrl="https://links.papareact.com/gn7" title="test" />
      <Card imgUrl="https://links.papareact.com/gn7" title="test" />
    </ScrollView>
  );
};

export default Category;

import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from 'react-native-heroicons/outline';

const HomeHeader = () => {
  return (
    <View className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-2">
        <Image
          source={{uri: 'https://links.papareact.com/wru'}}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-xs text-gray-400">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color={'#00CCBB'} />
          </Text>
        </View>
        <UserIcon size={35} color={'#00CCBB'} />
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-2">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restorents and Customers"
            keyboardType="default"
          />
        </View>
        <AdjustmentsHorizontalIcon color={'#00CCBB'} />
      </View>
    </View>
  );
};

export default HomeHeader;

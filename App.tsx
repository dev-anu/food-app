import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import {routes} from './src/routes/main';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {routes?.map((item: RouteType) => (
          <Stack.Screen
            name={item?.name}
            component={item?.screen}
            options={{headerShown: false}}
            key={item?.id}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './screens/AuthScreen';
import MainScreen from './screens/MainScreen';
import AuthContext from './AuthContext';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
                    <Stack.Screen name="Main" component={MainScreen} />
                    ) : (
                      <Stack.Screen name="Auth" component={AuthScreen} />
                    )}
    </Stack.Navigator>
    </NavigationContainer>
    );
};
export default AppNavigator;


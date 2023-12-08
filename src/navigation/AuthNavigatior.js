import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '../screens/auth/Login';

const Stack = createNativeStackNavigator();

const getIsSignedIn = async () => {
  try {
    const token = await AsyncStorage.getItem('token');

    console.log(token);

    if (token === null) {
      return false;
    } else {
      return true;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

export default function AuthNavigatior() {
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  React.useEffect(() => {
    const checkSignIn = async () => {
      const signedIn = await getIsSignedIn();
      setIsSignedIn(signedIn);
    };

    checkSignIn();
  }, []); // Empty dependency array ensures that the effect runs only once on component mount

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

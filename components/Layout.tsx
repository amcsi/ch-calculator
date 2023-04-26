import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {background} from '../data/colors';
import Credits from './Credits';
import Main from './Main';
import {StyleProp, TextStyle, View, ViewStyle} from "react-native";

class Layout extends React.Component {
  render() {
    const Stack = createNativeStackNavigator();

    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: background,
            },
            headerTintColor: '#fff',
            headerShown: false,
          }}>
            <Stack.Screen name="main" component={Main} />
            <Stack.Screen name="credits" component={Credits} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles: Record<'container' | 'credits', StyleProp<ViewStyle | TextStyle>> = {
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#00695C',
  },
  credits: {
    textAlign: 'center',
  },
};

export default Layout;

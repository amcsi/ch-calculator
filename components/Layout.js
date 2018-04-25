import React from 'react';
import { StackNavigator } from 'react-navigation';
import Main from './Main';
import Credits from './Credits';
import { background } from '../data/colors';
import { SafeAreaView } from 'react-native';

class Layout extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
      main: {
        screen: Main,
      },
      credits: { screen: Credits },
    }, {
      navigationOptions: {
        headerStyle: {
          backgroundColor: background,
        },
        headerTintColor: '#fff',
      },
      lazy: true,
      swipeEnabled: false,
    });

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: background }}>
        <MainNavigator style={styles.container} />
      </SafeAreaView>
    );
  }
}

const styles = {
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
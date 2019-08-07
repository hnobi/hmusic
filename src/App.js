/*eslint-disable */

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MusicPlayer from './components/MusicPlayer';
import HomePage from './components/Home';



const RootStack = createStackNavigator(
  {
    Home: HomePage,
    Player: MusicPlayer,
  },
  {
		initialRouteName: 'Player',
		defaultNavigationOptions:{
			headerTirrntColor: '#707070',
			headerTitleStyle:{
				textAlign: 'center',
				flex:1 
			}
		}
  }
);

const AppContainer = createAppContainer(RootStack);

class App extends React.Component {

	render() {
		return (
			<AppContainer/>
		)
		
	}
}

export default App;

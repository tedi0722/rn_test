import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../components/HomeScreen';
import Settings from '../components/Settings'

const BottomTabNavigator = createBottomTabNavigator ({
    Home: {
      screen: HomeScreen
    },
    Settings: {
      screen: Settings
    }
  })

export default BottomTabNavigator
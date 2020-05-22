import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';

import { store } from './src/redux/store';
import Home from './src/containers/screens/Home';
import TableView from './src/containers/screens/TableView';
import CardView from './src/containers/screens/CardView';
import TreeView from './src/containers/screens/TreeView';
import { colors } from './src/utils/colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabStyle = {
  showIcon: false,
  activeTintColor: colors.darkGreen,
  inactiveTintColor: colors.grey,
  labelStyle: { fontWeight: 'bold', fontSize: 16 },
};

function Tabs() {
  return (
    <Tab.Navigator tabBarOptions={tabStyle}>
      <Tab.Screen name="Table" component={TableView} />
      <Tab.Screen name="Card" component={CardView} />
      <Tab.Screen name="Tree" component={TreeView} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Tabs" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

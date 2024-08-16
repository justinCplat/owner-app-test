import {createStackNavigator} from '@react-navigation/stack';
import Detail from '../view/Detail';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="MainTab"
        component={TabNavigator}
      />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

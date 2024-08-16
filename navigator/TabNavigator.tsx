import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../view/Home';
import Order from '../view/Order';
import Store from '../view/Store';
import More from '../view/More';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Store" component={Store} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

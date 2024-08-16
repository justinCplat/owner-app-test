import {createStackNavigator} from '@react-navigation/stack';
import Detail1 from '../view/Detail/Detail1';
import Detail2 from '../view/Detail/Detail2';
import Detail3 from '../view/Detail/Detail3';
import ModalDetail1 from '../view/Modal/ModalDetail1';
import ModalHome from '../view/Modal/ModalHome';
import ModalDetail2 from '../view/Modal/ModalDetail2';
import ModalDetail3 from '../view/Modal/ModalDetail3';
import {RootStackParamList} from '../types/react-navigation';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Detail1" component={Detail1} />
      <Stack.Screen name="Detail2" component={Detail2} />
      <Stack.Screen name="Detail3" component={Detail3} />
      <Stack.Screen name="ModalHome" component={ModalHome} />
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="ModalDetail1" component={ModalDetail1} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'card'}}>
        <Stack.Screen name="ModalDetail2" component={ModalDetail2} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'transparentModal'}}>
        <Stack.Screen name="ModalDetail3" component={ModalDetail3} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;

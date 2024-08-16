import {Button, Text, View} from 'react-native';

const ModalHome = ({navigation}: any) => {
  return (
    <View>
      <Text>ModalHome</Text>
      <Button
        onPress={() => navigation.navigate('ModalDetail1')}
        title="Open ModalDetail1"
      />
      <Button
        onPress={() => navigation.navigate('ModalDetail2')}
        title="Open ModalDetail2"
      />
      <Button
        onPress={() => navigation.navigate('ModalDetail3')}
        title="Open ModalDetail3"
      />
    </View>
  );
};

export default ModalHome;

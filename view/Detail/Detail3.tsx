import {Button, Text, View} from 'react-native';

const Detail3 = ({navigation}: any) => {
  return (
    <View>
      <Text>Detail3</Text>
      <Button
        onPress={() => navigation.navigate('ModalHome')}
        title="Move to ModalHome"
      />
    </View>
  );
};

export default Detail3;

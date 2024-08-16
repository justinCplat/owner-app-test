import {Button, Text, View} from 'react-native';

const Detail2 = ({navigation}: any) => {
  return (
    <View>
      <Text>Detail2</Text>
      <Button
        onPress={() => navigation.navigate('Detail3')}
        title="Move to Detail3"
      />
    </View>
  );
};

export default Detail2;

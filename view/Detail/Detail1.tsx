import {Button, Text, View} from 'react-native';

const Detail1 = ({navigation}: any) => {
  return (
    <View>
      <Text>Detail1</Text>
      <Button
        onPress={() => navigation.navigate('Detail2')}
        title="Move to Detail2"
      />
    </View>
  );
};

export default Detail1;

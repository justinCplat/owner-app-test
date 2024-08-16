import {Button, Text, View} from 'react-native';

const Home = ({navigation}: any) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

export default Home;

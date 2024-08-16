import {useEffect} from 'react';
import {Button, Text, View} from 'react-native';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="call api"
        onPress={() => {
          fetch('https://example.com/user').then(res => {
            console.log('res');
            console.log(res);
          });
        }}></Button>
    </View>
  );
};

export default Home;

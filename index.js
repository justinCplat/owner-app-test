import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

async function enableMocking() {
  if (!__DEV__) return;

  try {
    await import('./msw.polyfills');
    const {server} = await import('./mocks/server');
    server.listen();
  } catch (error) {
    console.error('Failed to enable mocking:', error);
  }
}

AppRegistry.registerComponent(appName, () => App);
enableMocking();

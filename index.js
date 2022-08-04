/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import StackApp from './navigation/StackApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => StackApp);

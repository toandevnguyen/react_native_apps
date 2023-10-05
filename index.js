/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Todos from './src/screens/Todos';

AppRegistry.registerComponent(appName, () => Todos);

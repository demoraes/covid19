import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import To_help from './pages/To_help';
import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    To_help,
    Detail,
    Dashboard
  })
);

export default Routes;
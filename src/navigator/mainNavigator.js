import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile891686Navigator from '../features/UserProfile891686/navigator';
import Maps991685Navigator from '../features/Maps991685/navigator';
import NotificationList1091684Navigator from '../features/NotificationList1091684/navigator';
import Tutorial791681Navigator from '../features/Tutorial791681/navigator';
import SignUp1491678Navigator from '../features/SignUp1491678/navigator';
import SignUp1591677Navigator from '../features/SignUp1591677/navigator';
import SignUp1391676Navigator from '../features/SignUp1391676/navigator';
import Settings90917Navigator from '../features/Settings90917/navigator';
import Maps90915Navigator from '../features/Maps90915/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile891686: { screen: UserProfile891686Navigator },
Maps991685: { screen: Maps991685Navigator },
NotificationList1091684: { screen: NotificationList1091684Navigator },
Tutorial791681: { screen: Tutorial791681Navigator },
SignUp1491678: { screen: SignUp1491678Navigator },
SignUp1591677: { screen: SignUp1591677Navigator },
SignUp1391676: { screen: SignUp1391676Navigator },
Settings90917: { screen: Settings90917Navigator },
Maps90915: { screen: Maps90915Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

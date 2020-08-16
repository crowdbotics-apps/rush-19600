import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps90954Navigator from '../features/Maps90954/navigator';
import Settings90932Navigator from '../features/Settings90932/navigator';
import Settings90917Navigator from '../features/Settings90917/navigator';
import NotificationList90916Navigator from '../features/NotificationList90916/navigator';
import Maps90915Navigator from '../features/Maps90915/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps90954: { screen: Maps90954Navigator },
Settings90932: { screen: Settings90932Navigator },
Settings90917: { screen: Settings90917Navigator },
NotificationList90916: { screen: NotificationList90916Navigator },
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

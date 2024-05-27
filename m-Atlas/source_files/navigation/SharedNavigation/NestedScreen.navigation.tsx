import NavigationConstant from "../../constant/NavigationConstant";
import About from "../../screens/AfterLogin/About";

/**
 * List all the child screen here
 * so that naviagtion can be managed from eaech place
 */
export const nestedScreenNavigator = {
    screens: [
      {
        name: NavigationConstant.about,
        component: About,
        options: {
          headerShown: true,
          animationEnabled: true,
          tabBarVisible: false,
        },
        navigationOptions: {
          title: NavigationConstant.about,
          tabBarVisible: false,
        },
      },
    //   {
    //     name: NavigationConstant.contact,
    //     component: Contact,
    //     options: {
    //       headerShown: true,
    //       animationEnabled: true,
    //       tabBarVisible: false,
    //     },
    //     navigationOptions: {
    //       title: NavigationConstant.contact,
    //       tabBarVisible: false,
    //     },
    //   },
      
    ],
  };
  
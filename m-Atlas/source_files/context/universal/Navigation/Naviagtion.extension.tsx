import { CommonActions, NavigationProp, ParamListBase } from '@react-navigation/native';
import { BottomTabName } from '../../../constant/NavigationConstant';

// In your component where you want to reset the navigation
// Assuming you have access to the navigation prop
// Reset the navigation stack and set the UI to index zero
export const resetNavigation = (navigation: NavigationProp<ParamListBase>): void => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: BottomTabName.feed }], // Replace 'feed' with your initial route/screen name
      }),
    );
};

export const resetNavigationByName = (navigation: NavigationProp<ParamListBase>, routeName: string): void => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: routeName }],
      }),
    );
};

  
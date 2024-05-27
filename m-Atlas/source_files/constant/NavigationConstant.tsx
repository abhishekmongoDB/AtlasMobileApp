
const onBoardingNavigator = {
  walkThrough: 'walkThrough',
  getStarted: 'getStarted',
  signIn: 'signIn',
  signUp: 'signUp',
  validateOTP: 'validateOTP',
};

const onBoardedNavigator = {
  home: 'home',
  contact: 'contact',
  about: 'about',
};

const NavigationConstant = {
  ...onBoardingNavigator,
  ...onBoardedNavigator,
};

export default NavigationConstant;

const BottomTabName = {
  feed: 'browse',
  search: 'search',
  mylist: 'mylist',
  notifs: 'notifs',
};

export {
    onBoardingNavigator,
    onBoardedNavigator,
    BottomTabName
}
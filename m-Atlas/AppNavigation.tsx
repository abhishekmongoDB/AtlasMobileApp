// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationScreen } from "./source_files/navigation/NavigationContainer";
import { useAppGlobal } from "./source_files/context/universal/Global/Global.context";
import AppIdSetupScreen from "./source_files/screens/BeforeLogin/AppIdSetupScreen";
import Realm from "realm";
import { AppProvider, RealmProvider, UserProvider } from "@realm/react";
import LoginScreen from "./source_files/screens/BeforeLogin/LoginScreen";

function AppNavigation() {
  const { appId } = useAppGlobal();

  // const newrealmAccessBehavior: Realm.OpenRealmBehaviorConfiguration = {
  //   type: Realm.OpenRealmBehaviorType.DownloadBeforeOpen,
  // };

  // const realmAccessBehavior: Realm.OpenRealmBehaviorConfiguration = {
  //   type: Realm.OpenRealmBehaviorType.OpenImmediately,
  // };

  return (
    <>
      {appId?.length > 0 ? (
        <AppProvider id={appId}>
          <UserProvider fallback={LoginScreen}>
            <RealmProvider
              // schema={[]}
              // sync={{
              //   // flexible: false,
              //   newRealmFileBehavior: newrealmAccessBehavior,
              //   existingRealmFileBehavior: realmAccessBehavior,
              //   // initialSubscriptions: {
              //   //   update(subs, realm) {
              //   //     // subs.add(realm.objects(Task));
              //   //   },
              //   // },
              // }}
            >
              <NavigationContainer>
                <NavigationScreen />
              </NavigationContainer>
            </RealmProvider>
          </UserProvider>
        </AppProvider>
      ) : (
        <AppIdSetupScreen />
      )}
    </>
  );
}

export default AppNavigation;

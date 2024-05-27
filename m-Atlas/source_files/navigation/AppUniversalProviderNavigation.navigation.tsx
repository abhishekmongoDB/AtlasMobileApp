import { Text } from 'react-native'
import React from 'react'
import SpinnerLoader from '../utiles/frameworks/Loader/SpinnerLoader.component'
import NoInternetBottomSheet from '../utiles/frameworks/NoInternet/NoInternetBottomSheet'
import { LoaderProvider } from '../context/universal/Loader/Loader.context'
import { AppUniversalProvider } from '../context/universal/AppUniversal/AppUniversal.context'
import DisableUserInteraction from '../utiles/frameworks/DisableUserInteraction'
import { LocalizationProvider } from '../localization/Localization.context.language'
import { AnalyticsTrackingProvider } from '../context/universal/Analytics/AnalyticsTracking.context'
import { GlobalProvider } from '../context/universal/Global/Global.context'
import { ToastProvider } from 'react-native-toast-notifications'
import { ToastMessageProvider } from '../context/universal/Toast/ToastMessage.context'
import { AppNavigationProvider } from '../context/universal/Navigation/AppNavigation.context'
import { ThemeProvider } from '@react-navigation/native'
import { AsyncStorageProvider } from '../context/universal/AsyncStorage/AsyncStorage.context'

export default function AppUniversalProviderNavigation() {
    return (
        <>
            <AnalyticsTrackingProvider>
                <GlobalProvider>
                    <ToastProvider>
                        <ToastMessageProvider>
                            <AppNavigationProvider>
                                <ThemeProvider>
                                    <AsyncStorageProvider>
                                        <LocalizationProvider>
                                            <LoaderProvider>
                                                <AppUniversalProvider>
                                                    <SpinnerLoader loading={false} />
                                                    <NoInternetBottomSheet />
                                                    <DisableUserInteraction />
                                                </AppUniversalProvider>
                                            </LoaderProvider>
                                        </LocalizationProvider>
                                    </AsyncStorageProvider>
                                </ThemeProvider>
                            </AppNavigationProvider>
                        </ToastMessageProvider>
                    </ToastProvider>
                </GlobalProvider>
            </AnalyticsTrackingProvider>
        </>
    )
}
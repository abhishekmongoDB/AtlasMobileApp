import React, { useEffect, useState } from "react";
import { Alert, Modal, SafeAreaView, Text, View } from "react-native";

import UpdateDisableUIEnum from "./UpdateDisableUIEnum";
import { useAppUniversal } from "../../../context/universal/AppUniversal/AppUniversal.context";
import { useLocalization } from "../../../localization/Localization.context.language";

export default DisableUserInteraction = () => {
    const { translations } = useLocalization();

    const { updateDisableAction } = useAppUniversal()

    const renderUserInteraction = () => {
        switch (updateDisableAction) {

            case UpdateDisableUIEnum.FORCE_STOP:
                return <ForceScreen translations={translations} />

            case UpdateDisableUIEnum.FORCE_UPDATE:
                return <UpdateScreen
                    translations={translations}
                />;

            case UpdateDisableUIEnum.UPDATE_REQUEST_WITH_SKIP:
                return <UpdateScreenWithSkip
                    translations={translations}
                />;
            default:
                return (<></>);
        }
    };

    return (
        <>
            <Modal visible={updateDisableAction !== UpdateDisableUIEnum.NO_ACTION}>
               {renderUserInteraction()}
            </Modal>
        </>
    );
};

export function UpdateScreenWithSkip() {
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView>
                <Text>UpdateScreenWithSkip</Text>
            </SafeAreaView>
        </View>
    )
}
export function UpdateScreen() {
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView>
                <Text>UpdateScreen</Text>
            </SafeAreaView>
        </View>
    )
}

export function ForceScreen() {
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView>
                <Text>ForceScreen</Text>
            </SafeAreaView>
        </View>
    )
}
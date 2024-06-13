
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, View } from "react-native"

const Tab = createBottomTabNavigator();


const Cluster = ({ }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Cluster Screen</Text>
        </View>


    );
};

export default Cluster;
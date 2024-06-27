import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";
import { Alert, Clipboard, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { fetchProjectList } from "../../../api/module/project/Project.api";
import Icon from "react-native-vector-icons/FontAwesome";
import Realm from "realm";

const Tab = createBottomTabNavigator();

const Project = () => {
    const [data, setData] = useState<GroupProjectList[] | Error>([]);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        getProjectList();
    }, []);

    const getProjectList = async () => {
        const data = await fetchProjectList();
        if (!(data instanceof Error) && data != null) {
            setData(data.results);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const copyToClipboard = (text) => {
        Clipboard.setString(text);
        // Alert.alert('Copied to Clipboard', text);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                
                <View style={styles.dropdown}>
                    <Text style={styles.headertext}>Organization ID</Text>
                    <TouchableOpacity onPress={() => setClicked(!clicked)}>
                        {clicked ? (
                            <Image
                                source={require('../../../assets/png/upload.png')}
                                style={{ width: 16, height: 16 }}
                            />
                        ) : (
                            <Image
                                source={require('../../../assets/png/dropdown.png')}
                                style={{ width: 16, height: 16 }}
                            />
                        )}
                    </TouchableOpacity>
                </View>

                {clicked && (
                    <View
                        style={styles.dropdownID}
                    >
                        {Array.isArray(data) && data.length > 0 && (
                            <Text style={styles.subText}>{data[0].orgId}</Text>
                        )}
                        <TouchableOpacity onPress={() => copyToClipboard(data[0].orgId)}>
                            <Icon name="copy" size={16} color="#000" />
                        </TouchableOpacity>
                    </View>)}

                   <View
                   style={styles.flatList}>
                   <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        console.log(item);
                        const hasTags = item.tags && item.tags.length > 0;
                        if (hasTags) {
                            console.log('Touseef');
                        }
                        return (
                            <View style={{marginBottom:15}}>
                                <View style={styles.row}>
                                    <Text style={styles.text}>{item.id}</Text>
                                    <TouchableOpacity onPress={() => copyToClipboard(item.id)}>
                                        <Icon name="copy" size={18} color="#000" />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.row}>
                                <Text style={styles.keytext}>Org Name</Text>
                                <Text style={styles.subText}>{item.name}</Text>
                                </View>
                                <View style={styles.row}>
                                <Text style={styles.keytext}>Cluster Count</Text>
                                <Text style={styles.subText}>{item.clusterCount}</Text>
                                </View>
                                {hasTags && (
                                    <View style={styles.row}>
                                        <Text style={styles.keytext}>Platform</Text>
                                        {item.tags.map((tag, index) => (
                                            <Text style={styles.subText} key={index}>{tag.value}</Text>
                                        ))}
                                    </View>
                                )}
                                <View style={{alignItems:'flex-end'}}>
                                <Text style={{paddingTop:5}}>Created : {formatDate(item.created)}</Text>
                                </View>
                            </View>
                        );
                    }}/>
                   </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    dropdown:{
        width: '100%',
        height: 40,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
    },
    dropdownID:{
        elevation: 5,
        alignSelf: 'center',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:5,
        
    },
    headertext: {
        color: '#263238',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        marginTop: 5,
    },
    keytext: {
        color: '#2B664C',
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 10,
        marginTop: 5,
    },
    flatList:{
        height:'100%',
        color: 'white',
        width:'100%',
        paddingTop:10,
        paddingLeft:15,
        paddingRight:15,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: '#263238',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
        marginTop: 5,
    },
    subText: {
        color: '#263238',
        fontSize: 15,
    },
});

export default Project;

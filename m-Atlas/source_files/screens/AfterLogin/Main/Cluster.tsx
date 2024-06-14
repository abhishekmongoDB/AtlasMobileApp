import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { fetchRequest } from "../../../api/fetch.Request";
import { API_ENDPOINTS } from "../../../constant/API.constant";
import { fetchProjectList } from "../../../api/module/project/Project.api";
import { isNotNullAndUndefined } from "../../../utiles/app_utiles/Lodash.utils";

const Tab = createBottomTabNavigator();

const Cluster = ({}) => {
  const [data, setData] = useState<GroupProjectList[] | Error>([]);
  useEffect(() => {
    getProjectList()
  }, []);

  const getProjectList = async () => {
    const data  : ProjectListResponse | null | Error =  await fetchProjectList();
    if(!(data instanceof Error) && data != null){
        setData(data.results);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Cluster Screen</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            console.log(item);
            return <Text>{item.name}</Text>;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Cluster;

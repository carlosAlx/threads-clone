import {
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import Lottie from "lottie-react-native";

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "gray",
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30 }),
        }}
        refreshControl={
          <RefreshControl refreshing={false} tintColor={"transparent"} />
        }
      >
        <Lottie
          source={require("../../lottier-animation/threads.json")}
          loop={false}
          autoPlay
          style={{ width: 90, height: 90, alignItems: "center" }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

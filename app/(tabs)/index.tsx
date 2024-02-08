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
import { useRef } from "react";

export default function TabOneScreen() {
  const animationRef = useRef<Lottie>(null);
  <SafeAreaView>
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingTop: Platform.select({ android: 30 }),
      }}
      refreshControl={
        <RefreshControl
          onRefresh={() => {animationRef.current?.play}}
          refreshing={false}
          tintColor={"transparent"}
        />
      }
    >
      <Lottie
        ref={animationRef}
        source={require("../../lottier-animation/threads.json")}
        loop={false}
        autoPlay
        style={{ width: 90, height: 90, alignItems: "center" }}
      />
    </ScrollView>
  </SafeAreaView>;
}

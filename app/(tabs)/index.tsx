import {
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { Text, View } from "@/components/Themed";
import Lottie from "lottie-react-native";
import * as React from "react";

export default function TabOneScreen() {
  console.log("certo");
  const animationRef = React.useRef<Lottie>(null);
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: Platform.select({ android: 40 }),
        }}
        refreshControl={
          <RefreshControl
            onRefresh={() => {
              animationRef.current?.play;
            }}
            refreshing={true}
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
    </SafeAreaView>
  );
}

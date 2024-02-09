import {
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { Text, View } from "@/components/Themed";
import Lottie from "lottie-react-native";
import * as React from "react";
import { ThreadsContext } from "@/context/thread-content";
import { ThreadsItem } from "@/components/ThreadsItem";

export default function TabOneScreen() {
  const animationRef = React.useRef<Lottie>(null);
  const threads = React.useContext(ThreadsContext);
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
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
          style={{
            width: 90,
            height: 90,
            alignItems: "center",
          }}
        />
        {threads.map((thread) => (
          <ThreadsItem key={thread.id} {...thread} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

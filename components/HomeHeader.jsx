import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {Image} from 'expo-image'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { blurhash } from "@/utils/common";
import { useAuth } from "@/context/authContext";
export default function HomeHeader() {
  const { top } = useSafeAreaInsets();
  const {user} = useAuth()
  return (
    <View
      className="pb-2 rounded-b-2xl px-5 flex-row justify-between bg-emerald-400"
      style={{ paddingTop: top + 10 }}
    >
      <StatusBar style="dark" />

      <Text style={{ fontSize: hp(3) }} className="font-medium text-white">
        Chats
      </Text>
      <Image
        style={{height: hp(4.3),borderRadius:100,aspectRatio:1}}
        source={user?.profileUrl}
        placeholder={require('../assets/images/no-profile.png')}
        contentFit="fill"
        transition={500}
      />
    </View>
  );
}

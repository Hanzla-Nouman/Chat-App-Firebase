import { View, Text, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Octicons } from "@expo/vector-icons";

export default function logIn() {
  return (
    <View className="flex-1 ">
      <StatusBar style="dark" />
      <View
        style={{ paddingTop: hp(4), paddingHorizontal: wp(5) }}
        className="flex-1 gap-12"
      >
        <View className="items-center">
          <Image
            style={{ height: hp(28), width: wp(90) }}
            resizeMode="contain"
            source={require("../assets/images/login.jpg")}
          />
        </View>
        <View className=" gap-y-4 ">
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold tracking-wide text-center text-neutral-800"
          >
            Sign In
          </Text>
          <View
            style={{ height: hp(7),width:wp(90) }}
            className="flex-row  px-4 text-center bg-neutral-100 items-center   rounded-xl"
          >
            <Octicons name="mail" color={"gray"} size={hp(2.7)} />
          </View>
          <View
            style={{ height: hp(7),width:wp(90) }}
            className="flex-row  px-4 text-center bg-neutral-100 items-center   rounded-xl"
          >
            <Octicons name="mail" color={"gray"} size={hp(2.7)} />
          </View>
        </View>
      </View>
    </View>
  );
}

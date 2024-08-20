import { View, Text, Image, TextInput, TouchableHighlight } from "react-native";
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
        <View className=" gap-y-6 ">
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold tracking-wide text-center text-neutral-800"
          >
            Sign In
          </Text>
          <View className="gap-y-5">
            <View
              style={{ height: hp(7), width: wp(90) }}
              className="flex-row  px-4 text-center bg-neutral-100 items-center   rounded-xl"
            >
              <Octicons name="mail" color={"gray"} size={hp(2.7)} />
              <TextInput
                style={{ fontSize: hp(2) }}
                placeholder="Email Address"
                className="flex-1 font-semibold text-neutral-700 ml-4"
              />
            </View>
            <View>
              <View
                style={{ height: hp(7), width: wp(90) }}
                className="flex-row  px-4 text-center bg-neutral-100 items-center   rounded-xl"
              >
                <Octicons name="lock" color={"gray"} size={hp(2.7)} />
                <TextInput
                  style={{ fontSize: hp(2) }}
                  placeholder="Password"
                  className="flex-1 font-semibold text-neutral-700 ml-4"
                />
              </View>
              <Text style={{ fontSize: hp(1.7) }} className="text-right font-semibold text-neutral-500">Forgot Password?</Text>
            </View>
            <View>
            <TouchableHighlight className="bg-emerald-500 py-3 rounded-xl">
              <Text style={{ fontSize: hp(2.8) }} className="text-white text-center font-semibold tracking-wider">Sign In</Text>
            </TouchableHighlight>
            <View className="flex-row gap-x-3 justify-center mt-3 ">
            <Text className="" style={{fontSize: hp(1.8)}}>
              Don't have an account?
            </Text>
            <Text className="" style={{fontSize: hp(1.8)}}>
              SignUp
            </Text>
            </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}


import React from 'react'
import { Stack } from 'expo-router'
import HomeHeader from '@/components/HomeHeader'
import { StatusBar } from 'expo-status-bar'

export default function _layout() {
  return (
    <Stack>
     
      <Stack.Screen name='home' options={{
        header:()=><HomeHeader/>
      }}/>
    </Stack>
  )
}
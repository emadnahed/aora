import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-4xl font-pblack'>Aora</Text>
      <StatusBar style="auto" />
      <Link  href="/home" className='text-blue-500'>Go to Home</Link>
    </View>
  )
}

export default index
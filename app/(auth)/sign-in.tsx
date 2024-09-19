import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'


const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" })
  return (
    <>
      <SafeAreaView style={{ height: "100%", backgroundColor: "#161622" }}>
        <View
          className="w-full justify-center px-4 my-6"
        >
          <Image source={images.logo} resizeMode='contain'
            className='w-[115px]  h-[35px]'
          />
          <Text className='text-3xl text-white text-semibold mt-10 font-psemibold'>Login to Aora</Text>
        </View>
        <FormField
          title="Email"
          value={form.email}
          onChangeText={(text) => setForm({ ...form, email: text })}
          otherStyles="w-90 mt-"
          keyBoardType="email-address"
        />

        <FormField
          title="Password"
          value={form.password}
          onChangeText={(text) => setForm({ ...form, password: text })}
          otherStyles="mt-7"
        />

        <CustomButton
          title="Sign in"
          handlePress={() => { router.push('/home') }}
          containerStyles="w-100 mt-9"
          
        />

      </SafeAreaView>
    </>
  )
}

export default SignIn
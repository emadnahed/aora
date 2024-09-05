import { View, Text, StatusBar, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import { images } from '../constants'
import CustomButton from '../components/CustomButton'


const index = () => {


  return (
    <SafeAreaView style={styles.container}>

      <ScrollView
        contentContainerStyle={{
          height: '100%'
        }}
      >
        <View
          className='w-full justify-center items-center h-full px-4'
        >
          <Image
            source={images.logo}
            className='w-[130px]  h-[84px]'
            resizeMode='contain'
          />

          <Image
            source={images.cards}
            className='max-w-[380px] w-full h-[300px]'
            resizeMode='contain'
          />
          <View className='relative mt-5'>
            <Text className='text-3xl font-bold text-white text-center'>Discover endless possibiliies with {" "}<Text className="text-secondary-200">Aora</Text></Text>
            <Image
              source={images.path}
              className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
              resizeMode='contain'
            />            
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
          Where creativity meets innovation: embark on a journey of limitless exploration with Aora
          </Text>
          
          <CustomButton
          title="Continue with  Email"
          handlePress={()=> {router.push('/sign-in')}}
          containerStyles="w-full mt-7"
          />
        

        </View>

      </ScrollView>
    </SafeAreaView>
  )


}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161622",
    height: '100%',

  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});


export default index
import { View, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
const Register = (props:any) => {
  const [visible,setVisible]=useState<boolean>(false)
  return (
    <KeyboardAvoidingView
        behavior='padding'
        style={{flex:1}}
    >
        <Image source={require('../assets/logo.png')} className="w-screen h-[20%]"/>
      <Text className='text-black mt-2 text-center text-xl uppercase font-semibold'>Register</Text>
      <View className='mt-5 overflow-y-auto'>
          <TextInput 
              className='w-3/4 border rounded-md mx-auto border-gray-400 px-2 text-black'
              placeholder='First Name'
              placeholderTextColor="gray"

          />
          <TextInput 
              className='w-3/4 border mt-5 rounded-md mx-auto border-gray-400 px-2 text-black'
              placeholder='Last Name'
              placeholderTextColor="gray"

          />
          <TextInput 
              className='w-3/4 border mt-5 rounded-md mx-auto border-gray-400 px-2 text-black'
              placeholder='Email Address'
              placeholderTextColor="gray"

          />
          <TextInput 
              className='w-3/4 border mt-5 rounded-md mx-auto border-gray-400 px-2 text-black'
              placeholder='Password'
              placeholderTextColor="gray"
              secureTextEntry

          />
          <View className='mt-5 w-3/4 mx-auto relative'>
              <TextInput 
                  className='w-full border rounded-md px-2 mx-auto border-gray-400 text-black'
                  placeholder='Confirm Password'
                  placeholderTextColor="gray"
                  secureTextEntry
              />
              {
                  visible ? <Icon 
                      onPress={()=>setVisible(false)} 
                      name="eye-slash" 
                      size={22} 
                      color="black"
                      style={{position:"absolute",top:12,right:10}}
                  />: <Icon 
                      onPress={()=>setVisible(true)} 
                      name="eye-slash" 
                      size={22} 
                      color="black"
                      style={{position:"absolute",top:12,right:10}}
                  />
              }
              
              
          </View>
          <TouchableOpacity className='w-3/4 mx-auto bg-black py-3 rounded-md mt-5'>
              <Text className='text-center text-white text-xl font-semibold uppercase'>Register</Text>
          </TouchableOpacity>
          <Text className='text-center text-black mt-5'>Have an Account ? <Text onPress={()=>props.navigation.navigate('Login')} className='underline text-blue-600 font-semibold'>Login</Text> </Text>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Register
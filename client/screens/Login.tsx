import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Login = (props:any) => {
    const [visible,setVisible]=useState<boolean>(false)
    const[value,setValue]=useState({
        email:'',
        password:''
    })
    
    const handleLogin=()=>{
        if(!value.email || !value.password){
             // @ts-ignore
            ToastAndroid('Email and Password are mandatory',ToastAndroid.SHORT,ToastAndroid.BOTTOM)
        }else{
            if(value.email === 'ghislain@gmail.com'  && value.password === 'password'){
                return props.navigation.navigate('home')
            }else{
                // @ts-ignore
                return ToastAndroid('Wrong Credentials',ToastAndroid.SHORT,ToastAndroid.BOTTOM)
            }
        }
    }

    const handleVisible=()=>{
        setVisible(!visible)
    }
  return (
    <KeyboardAwareScrollView>
        <KeyboardAvoidingView behavior='padding' style={{flex:1}} className='h-screen'>
            <Image source={require('../assets/logo.png')} className='w-screen h-[30%]'/>
            <View className='flex flex-col mt-5'>
                <Text className='text-2xl text-center font-semibold text-black uppercase'>Login</Text>
                <View className='mt-5 overflow-y-auto'>
                    <TextInput 
                        className='w-3/4 border rounded-md mx-auto border-gray-400 px-2 text-black'
                        placeholder='Email Address'
                        placeholderTextColor="gray"
                        autoCapitalize='none'
                        onChangeText={(text)=>setValue({...value,email:text})}

                    />
                    <View className='mt-7 w-3/4 mx-auto relative'>
                        <TextInput 
                            className='w-full border rounded-md px-2 mx-auto border-gray-400 text-black'
                            placeholder='Password'
                            placeholderTextColor="gray"
                            autoCapitalize='none'
                            secureTextEntry={visible}
                            onChangeText={(text)=>setValue({...value,password:text})}
                        />
                        {
                            visible ? <Icon 
                                onPress={handleVisible} 
                                name="eye" 
                                size={22} 
                                color="black"
                                style={{position:"absolute",top:12,right:10}}
                            />: <Icon 
                                onPress={handleVisible} 
                                name="eye-slash" 
                                size={22} 
                                color="black"
                                style={{position:"absolute",top:12,right:10}}
                            />
                        }
                    
                        
                        <Text className='text-blue-400 font-semibold text-right mr-2 text-sm mt-2 underline'>Forgot password ?</Text>
                    </View>
                    <TouchableOpacity onPress={handleLogin} className='w-3/4 mx-auto bg-black py-3 rounded-md mt-5'>
                        <Text className='text-center text-white text-xl font-semibold uppercase'>Login</Text>
                    </TouchableOpacity>
                    <Text className='text-center text-black mt-5'>Don't have an Account ? <Text onPress={()=>props.navigation.navigate('Register')} className='underline text-blue-600 font-semibold'>Register</Text> </Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    </KeyboardAwareScrollView>
  )
}

export default Login
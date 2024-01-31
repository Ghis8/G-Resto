import { View, Text, Image, TouchableOpacity, TextInput, FlatList, TouchableHighlight } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { foodCategories, mostPopularProducts, recommendedProducts } from '../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Home = (props:any) => {
  return (
    <KeyboardAwareScrollView>
      <View className='flex-1 px-3'>
        <View className='flex-row items-center justify-between py-3'>
            <Icon name='align-left' color="black" size={22}  />
            <TouchableOpacity
              onPress={()=>{props.navigation.navigate('Settings')}}
              className='flex items-center w-8 h-8 rounded-full bg-green-600 justify-center'
              >
              <Text className='font-bold'>G</Text>
            </TouchableOpacity>
        </View>
        <View className='flex flex-col'>
          <Text className='font-bold text-xl text-black'>Let's eat</Text>
          <Text className='text-2xl text-black font-thin'>Healthy foods.</Text>
        </View>
        <View className='relative w-full mt-2'>
          <TextInput
            placeholder='Search'
            placeholderTextColor='gray'
            className='bg-gray-200 pl-3 rounded-md'
          />
          <Icon name="search" color="black" size={22} style={{position:"absolute",right:10,top:12}} />
        </View>
        <View className='my-4'>
            <FlatList
              horizontal
              data={foodCategories}
              keyExtractor={(item:any)=>item.id}
              renderItem={({item})=>(
                <TouchableOpacity 

                  className='mr-4 py-2 px-2 rounded-md bg-orange-200'
                >
                  <View className='flex flex-row items-center'> 
                    <Image source={item.img} className='w-5 h-5 bg-transparent' />
                    <Text className='text-black ml-2'>{item.name}</Text>
                  </View>
                  
                </TouchableOpacity>
              )}
            />
        </View>
        <View className='flex flex-row items-center justify-between my-2'>
            <Text className='text-black font-bold'>Recommended Products</Text>
            <TouchableOpacity>
              <Text className='text-orange-500 text-sm'>See All</Text>
            </TouchableOpacity>
        </View>
        <View className='my-4'>
            <FlatList
              horizontal
              data={recommendedProducts}
              keyExtractor={(item)=>item.id}
              renderItem={({item})=>(
                <TouchableOpacity
                  className='px-2 py-2 bg-white rounded-md shadow-md mr-4' 
                >
                  <View className='flex flex-col'>
                    <Image source={item.img} className='w-24 h-16 bg-transparent mb-2' />
                    <View className='flex flex-row mt-2 items-center justify-between'>
                        <Text className='text-black text-xs'>{item.name}</Text>
                        <Text className='text-orange-500 text-xs font-bold'>${item.price}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
        </View>
        <View className='flex flex-row items-center justify-between my-2'>
            <Text className='text-black font-bold'>Most Popular</Text>
            <TouchableOpacity>
              <Text className='text-orange-500 text-sm'>See All</Text>
            </TouchableOpacity>
        </View>
        <View className='my-4'>
            <FlatList
              horizontal
              data={mostPopularProducts}
              keyExtractor={(item)=>item.id}
              renderItem={({item})=>(
                <TouchableOpacity
                  className='mr-4'
                >
                  <View className='flex flex-col'>
                    <Image source={item.img} className='w-24 h-16' />
                    <Text className='mt-4 text-center text-black'>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
        </View>


      </View>
    </KeyboardAwareScrollView>
  )
}

export default Home
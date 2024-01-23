import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const Home = () => {
  return (
    <View className='flex-1'>
      <View className='flex-row bg-[#5170ff]  justify-between px-2 py-3'>
          <Text className='text-white text-xl'>G-Resto</Text>
          <View className='flex-row items-center'>
            <Icon name="search" size={22} color='white' />
            <View className='p-2 w-8 h-8 flex bg-green-500 rounded-full ml-5'>
              <Text className='text-center font-bold'>G</Text>
            </View>
          </View>
      </View>
      <View className='grid grid-cols-2 gap-3'>

      </View>

    </View>
  )
}

export default Home
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface ButtonProps{
    onPress:()=>void
    className:string
}

const Button = () => {
  return (
    <TouchableOpacity className=''>
      <Text>Button</Text>
    </TouchableOpacity>
  )
}

export default Button
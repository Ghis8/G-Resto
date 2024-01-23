import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Register from '../screens/Register'

import { enableScreens } from 'react-native-screens'
import MyTabs from './BottomTabNavigation'

enableScreens(true)
const Stack=createNativeStackNavigator()
function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen  name='home' component={MyTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
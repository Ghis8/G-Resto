import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import Order from "../screens/Order";
import Settings from "../screens/Settings";
import Icon from 'react-native-vector-icons/FontAwesome'

const Tab=createBottomTabNavigator()

const MyTabs=()=>{
    return(
        <Tab.Navigator screenOptions={{
            headerShown:false
        }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon:(tabInfo)=>{
                    return (
                        <Icon name="home" size={24} color={tabInfo.focused ? "tomato":'gray'} />
                    )
                },
                
            }}/>
            <Tab.Screen  name="Favorites" component={Favorites} 
                options={{
                    tabBarIcon:(tabInfo)=>{
                        return (
                            <Icon name="heart" size={24} color={tabInfo.focused ? 'tomato':'gray'}/>
                        )
                    }
                }}
            />
            <Tab.Screen name="Order" component={Order} 
                options={{
                    tabBarIcon:(tabInfo)=>{
                        return (
                            <Icon name="coffee" size={24} color={tabInfo.focused ? 'tomato':'gray'}/>
                        )
                    }
                }}
            />
            <Tab.Screen name="Settings" component={Settings} 
                options={{
                    tabBarIcon:(tabInfo)=>{
                        return (
                            <Icon name="gear" size={24} color={tabInfo.focused ? 'tomato':'gray'}/>
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default MyTabs
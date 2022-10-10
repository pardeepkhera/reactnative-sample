import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeIcon from '../assets/home.png';
import SettingIcon from '../assets/settings.png';
import NotificationIcon from '../assets/bell.png';
import ProfileIcon from '../assets/profile.png';
import LoginScreen from '../screens/login/LoginScreen';
import HomeScreen from '../screens/Dashboard/HomeScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import NotificationScreen from '../screens/Notifications/NotificationScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainRoute = (navigation) => {

    const DashboardStack = ({ navigation }) => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        headerTitle: '',
                        headerStyle: { backgroundColor: '#ffffff', elevation: 15 },
                        headerLeft: () => (
                            <View></View>
                        ),
                        headerRight: () => (
                            <TouchableOpacity onPress={() => { navigation.navigate('Settings') }}>
                                <Image source={SettingIcon} style={styles.settingsIcon} />
                            </TouchableOpacity>
                        )
                    }} />

                <Stack.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        headerTitle: '',
                        headerStyle: { backgroundColor: '#ffffff', elevation: 15 },
                        headerRight: () => (
                            <View></View>
                        )
                    }}
                />
            </Stack.Navigator>
        )
    }

    const TabNavigator = () => {
        return (
            <Tab.Navigator
                initialRouteName='Dashboard'
                barStyle={{ backgroundColor: '#ffffff', elevation: 15 }}>
                <Tab.Screen
                    name="Dashboard"
                    component={DashboardStack}
                    options={{
                        tabBarLabel: 'Home', tabBarIcon: ({ focused, color, size }) => (<Image source={HomeIcon} style={[styles.imageStyle, { tintColor: focused ? '#8338bb' : '#AAAAAA' }]} />),
                    }} />
                <Tab.Screen
                    name="Notifications"
                    component={NotificationScreen}
                    options={{ tabBarIcon: ({ focused, color, size }) => (<Image source={NotificationIcon} style={[styles.imageStyle, { tintColor: focused ? '#8338bb' : '#AAAAAA' }]} />) }} />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{ tabBarIcon: ({ focused, color, size }) => (<Image source={ProfileIcon} style={[styles.imageStyle, { tintColor: focused ? '#8338bb' : '#AAAAAA' }]} />) }} />
            </Tab.Navigator>
        )
    }



    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{ headerShown: false }} />

                <Stack.Screen
                    name="Home"
                    component={TabNavigator}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainRoute;

const styles = StyleSheet.create({
    imageStyle: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    settingsIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        right: 15
    }
})
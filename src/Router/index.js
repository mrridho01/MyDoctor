import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { 
    GetStarted, 
    Login, 
    Register, 
    Splash, 
    UploadPhoto, 
    Doctor, 
    Messages, 
    Hospitals, 
    DoctorPerCategory, 
    Chatting, 
    UserProfile, 
    EditProfile,
    DoctorProfile
 } from "../pages";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigator } from "../components";

const Tab = createBottomTabNavigator ();
const Stack = createStackNavigator ();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar = {props => <BottomNavigator {...props} />}>
            <Tab.Screen 
            name = "Doctor"
            component = {Doctor} 
            />
            <Tab.Screen 
            name = "Messages"
            component = {Messages} 
            />
            <Tab.Screen 
            name = "Hospitals"
            component = {Hospitals} 
            />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName ="Splash">
            <Stack.Screen 
            name = "Splash" 
            component = {Splash} 
            options = {{headerShown: false}} 
            />
            <Stack.Screen 
            name = "GetStarted" 
            component = {GetStarted} 
            options = {{headerShown: false}} 
            />
            <Stack.Screen
            name = "Register"
            component = {Register}
            options = {{headerShown: false}} 
            />   
            <Stack.Screen
            name = "Login"
            component = {Login}
            options = {{headerShown: false}} 
            />
            <Stack.Screen
            name = "UploadPhoto"
            component = {UploadPhoto}
            options = {{headerShown: false}} 
            />
            <Stack.Screen
            name = "MainApp"
            component = {MainApp}
            options = {{headerShown: false}} 
            />
            <Stack.Screen
            name = "DoctorPerCategory"
            component = {DoctorPerCategory}
            options = {{headerShown: false}} 
            />
            <Stack.Screen
            name = "Chatting"
            component = {Chatting}
            options = {{headerShown: false}} 
            />
            <Stack.Screen
            name = "UserProfile"
            component = {UserProfile}
            options = {{headerShown: false}} 
            />
            <Stack.Screen
            name = "EditProfile"
            component = {EditProfile}
            options = {{headerShown: false}} 
            />
            <Stack.Screen
            name = "DoctorProfile"
            component = {DoctorProfile}
            options = {{headerShown: false}} 
            />
        </Stack.Navigator>
    )
}

export default Router;
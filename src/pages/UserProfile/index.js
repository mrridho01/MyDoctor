import React from 'react'
import { StyleSheet, View } from 'react-native'
import { List, Gap, Header, Profile } from '../../components'
import { colors } from '../../utils'

export default function UserProfile({navigation}) {
    return (
        <View style = {styles.page}>
            <Header text = "Profile" onPress = {() => navigation.goBack ()}/>
            <Gap height = {10} />
            <View style = {styles.profile}>
            <Profile 
            tipe = "user"
            nama = "Shayna Melinda" 
            jabatan = "Product Desgner"
            />
            </View>
            
            <List 
            nama = "Edit Profile" 
            gender = "Last updated yesterday"
            icon = "editprofile"
            onPress = {() => navigation.navigate ("EditProfile")}
            />
            <List 
            nama = "Language" 
            gender = "Available 12 languages"
            icon = "language"
            />
            <List 
            nama = "Give Us Rate" 
            gender = "On Gooogle Play Store"
            icon = "giveusrate"
            />
            <List 
            nama = "Help Center" 
            gender = "Read our guidelines"
            icon = "helpcenter"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.white,
        flex : 1
    },
    profile : {
        alignItems : "center",
        marginBottom : 30,
        
        
    }
})

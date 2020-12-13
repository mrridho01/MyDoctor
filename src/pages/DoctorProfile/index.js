import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILUserPhoto } from '../../assets'
import { Button, Gap, Header, Profile, ProfileItem } from '../../components'
import { colors } from '../../utils'

export default function DoctorProfile({navigation, route}) {
    const dataDoctor = route.params;

    return (
        <View style = {styles.page}>
            <Header text = "Profile" onPress = {() => navigation.goBack ()}/>
            <Profile 
            tipe = {dataDoctor.data.gender}
            nama = {dataDoctor.data.fullName} 
            jabatan = {dataDoctor.data.profession}
            photo = {{uri : dataDoctor.data.photo}}
            />
            <Gap height = {26} />
            <ProfileItem label = "Alumnus" description = {dataDoctor.data.university} />
            <ProfileItem label = "Tempat Praktik" description = {dataDoctor.data.hospital_address} />
            <ProfileItem label = "No. STR" description = {dataDoctor.data.str_number} />
            <View style = {styles.action}>
            <Button title = "Start Consultation" onPress = {() => navigation.navigate ("Chatting")} />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.white,
        flex : 1
    },
    action : {
        paddingHorizontal : 40,
        paddingTop : 23
    }
})

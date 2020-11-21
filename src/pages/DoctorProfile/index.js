import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Profile, ProfileItem } from '../../components'
import { colors } from '../../utils'

export default function DoctorProfile({navigation}) {
    return (
        <View style = {styles.page}>
            <Header text = "Profile" onPress = {() => navigation.goBack ()}/>
            <Profile 
            tipe = "dokterperempuan" 
            nama = "Nairobi Putri Hayza" 
            jabatan = "Dokter Anak"
            />
            <Gap height = {26} />
            <ProfileItem label = "Alumnus" description = "Universitas Indonesia, 2020" />
            <ProfileItem label = "Tempat Praktik" description = "Rumah Sakit Umum, Bandung" />
            <ProfileItem label = "No. STR" description = "0000116622081996" />
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

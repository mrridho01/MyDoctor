import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Input, Profile } from '../../components'
import { colors } from '../../utils'

export default function EditProfile({navigation}) {
    return (
        <View style = {styles.page}>
            <Header text = "Edit Profile" onPress = {() => navigation.goBack ()} />
            <ScrollView showsVerticalScrollIndicator = {false}>
            <Gap height = {10} />
            <View style = {styles.content}>
            <Profile tipe = "edituser"/>
            <Gap height = {26} />
            <Input title = "Full Name" />
            <Gap height = {24} />
            <Input title = "Pekerjaan" />
            <Gap height = {24} />
            <Input title = "Email Address" />
            <Gap height = {24} />
            <Input title = "Password" />
            <Gap height = {40} />
            <Button title = "Save Profile" />
            <Gap height = {48} />
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.white,
        flex : 1
    },
    content : {
        paddingHorizontal : 40
    }
})

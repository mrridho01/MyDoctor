import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import { fonts } from '../../utils'
import { colors } from '../../utils/colors'

export default function Login ({navigation}) {
    return (
        <View style = {styles.page}>
            <ILLogo />
            <Text style = {styles.title}>Masuk dan mulai berkonsultasi</Text>
            <Input title = "Email Address" />
            <Gap height = {24} />
            <Input title = "Password"/>
            <Gap height = {10} />
            <Link text = "Forgot My Password" size = {12}/>
            <Gap height = {40} />
            <Button title = "Sign In" onPress = {() => navigation.replace ("MainApp")} />
            <Gap height = {30} />
            <Link text = "Create New Account" size = {16} align = "center" onPress = {() => navigation.navigate ("Register")} />
        </View>
    )
}

const styles = StyleSheet.create({
    page : {
        padding : 40,
        flex : 1,
        backgroundColor: colors.white
    },
    title : {
        fontFamily: fonts.primary[600],
        fontSize: 20,
        color: colors.text.primary,
        marginTop: 40,
        marginBottom : 40,
        maxWidth: 160
    }
})

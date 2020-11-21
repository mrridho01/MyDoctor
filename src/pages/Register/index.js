import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Header, Input, Gap } from '../../components'
import { useForm } from '../../utils';
import { colors } from '../../utils/colors'

export default function Register({navigation}) {
   const [form, setForm] = useForm ({
        fullName : "",
        pekerjaan : "",
        email : "",
        password : ""
    })

    return (
    <View style = {styles.page}>
            <Header text = "Daftar Akun" onPress = {() => navigation.goBack()}/>
            <Gap height = {10} />
            <View style = {styles.LowerComponents}>
                <ScrollView showsVerticalScrollIndicator = {false}>
                <Input 
                title = "Full Name" 
                value ={form.fullName} 
                onChangeText = {(value) => setForm ("fullName", value)} 
                />
                <Gap height = {24} />
                <Input 
                title = "Pekerjaan" 
                value ={form.pekerjaan} 
                onChangeText = {(value) => setForm ("pekerjaan",value)} 
                />
                <Gap height = {24} />
                <Input 
                title = "Email Address" 
                value ={form.email} 
                onChangeText = {(value) => setForm ("email",value)} 
                />
                <Gap height = {24} />
                <Input 
                title = "Password" 
                value ={form.password} 
                onChangeText = {(value) => setForm ("password",value)} 
                secureTextEntry
                />
                <Gap height = {40} />
                <Button title = "Continue" onPress = {() =>navigation.navigate ("UploadPhoto")} />
            </ScrollView>
        </View>
    </View> 
    )
}

const styles = StyleSheet.create({
    page : {
        backgroundColor: colors.white,
        flex : 1
    },
    LowerComponents : {
        padding : 40,
        paddingTop: 0
    },
})

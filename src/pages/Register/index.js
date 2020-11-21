import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Header, Input, Gap } from '../../components'
import { colors } from '../../utils/colors'

export default function Register({navigation}) {
    const [fullName, setFullName] = useState ("");
    const [pekerjaan, setPekerjaan] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
     
    return (
    <View style = {styles.page}>
            <Header text = "Daftar Akun" onPress = {() => navigation.goBack()}/>
            <Gap height = {10} />
            <View style = {styles.LowerComponents}>
                <ScrollView showsVerticalScrollIndicator = {false}>
                <Input 
                title = "Full Name" 
                value ={fullName} 
                onChangeText = {(value) => setFullName (value)} 
                />
                <Gap height = {24} />
                <Input 
                title = "Pekerjaan" 
                value ={pekerjaan} 
                onChangeText = {(value) => setPekerjaan (value)} 
                />
                <Gap height = {24} />
                <Input 
                title = "Email Address" 
                value ={email} 
                onChangeText = {(value) => setEmail (value)} 
                />
                <Gap height = {24} />
                <Input 
                title = "Password" 
                value ={password} 
                onChangeText = {(value) => setPassword (value)} 
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

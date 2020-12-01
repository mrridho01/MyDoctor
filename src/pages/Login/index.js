import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { ILLogo } from '../../assets'
import { Button, Gap, Input, Link, Loading } from '../../components'
import { Firebase } from '../../config'
import { fonts, storeData, useForm } from '../../utils'
import { colors } from '../../utils/colors'

export default function Login ({navigation}) {
    const [form, setForm] = useForm ({
        email : "",
        password : ""
    });
    const [loading, setLoading] = useState (false);

    const login = () =>{
        console.log ("Login :" , form);
        setLoading (true);
        Firebase
        .auth()
        .signInWithEmailAndPassword(form.email, form.password)
        .then(res => {
            console.log ("success :" , res);
            setLoading (false);
            Firebase.database()
            .ref(`users/${res.user.uid}/`)
            .once('value')
            .then(resDB => {
                console.log ('data user:' , resDB.val());
                if (resDB.val()) {
                    storeData ("user", resDB.val());
                    navigation.replace ("MainApp");
                }
            });
        })
        .catch(err => {
            setLoading (false);
            showMessage ({
                message : err.message,
                backgroundColor : colors.flashMessageError,
                color : colors.white
            })
        })
    };
    return (
        <>
        <View style = {styles.page}>
            <ScrollView showsVerticalScrollIndicator = {false} >
            <Gap height = {40} />
            <ILLogo />
            <Text style = {styles.title}>Masuk dan mulai berkonsultasi</Text>
            <Input title = "Email Address" value = {form.email} onChangeText = {(value) => setForm ("email", value)} />
            <Gap height = {24} />
            <Input title = "Password" value = {form.password} onChangeText = {(value) => setForm ("password", value)} secureTextEntry />
            <Gap height = {10} />
            <Link text = "Forgot My Password" size = {12}/>
            <Gap height = {40} />
            <Button title = "Sign In" onPress = {login} />
            <Gap height = {30} />
            <Link text = "Create New Account" size = {16} align = "center" onPress = {() => navigation.navigate ("Register")} />
            </ScrollView>
            
        </View>
        {loading && <Loading/>}
        </>
    )
}

const styles = StyleSheet.create({
    page : {
        paddingHorizontal : 40,
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

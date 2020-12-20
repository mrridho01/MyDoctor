import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { ILLogo } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import { Firebase } from '../../config'
import { fonts, showError, storeData, useForm } from '../../utils'
import { colors } from '../../utils/colors'

export default function Login ({navigation}) {
    const [form, setForm] = useForm ({
        email : "",
        password : ""
    });
    const dispatch = useDispatch();

    const login = () =>{
        dispatch ({
            type : "SET_LOADING",
            value : true
        });
        Firebase
        .auth()
        .signInWithEmailAndPassword(form.email, form.password)
        .then(res => {
            dispatch ({
                type : "SET_LOADING",
                value : false
            });
            Firebase.database()
            .ref(`users/${res.user.uid}/`)
            .once('value')
            .then(resDB => {
                if (resDB.val()) {
                    storeData ("user", resDB.val());
                    navigation.replace ("MainApp");
                }
            });
        })
        .catch(err => {
            dispatch ({
                type : "SET_LOADING",
                value : false
            });
            showError (err.message);
        })
    };

    return (
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
            <Link text = "Create New Account" size = {16} align = "center" 
            onPress = {() => navigation.navigate ("Register")} />
            </ScrollView>
            
        </View>

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

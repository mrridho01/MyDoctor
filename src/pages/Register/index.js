import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Header, Input, Gap, Loading } from '../../components'
import { Firebase } from '../../config';
import { getData, storeData, useForm } from '../../utils';
import { colors } from '../../utils/colors';
import { showMessage, hideMessage } from "react-native-flash-message";

export default function Register({navigation}) {
   const [form, setForm] = useForm ({
        fullName : "",
        pekerjaan : "",
        email : "",
        password : ""
    });

    const [loading, setLoading] = useState (false);
  
    const onContinue = () => {
       
        setLoading (true);
        Firebase.auth()
        .createUserWithEmailAndPassword(form.email, form.password)
        .then((success) => {
            setLoading (false);
            // alert ("register success :", success);

            const data = {
                fullName : form.fullName,
                pekerjaan : form.pekerjaan,
                email : form.email
            };
            setForm ("reset");
            Firebase
            .database()
            .ref("users/" +success.user.uid + "/")
            .set({data});

            navigation.navigate ('UploadPhoto');
            storeData("user", form);
        })
        .catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            setLoading (false);
            showMessage ({
                message : errorMessage,
                backgroundColor : colors.flashMessageError,
                color : colors.white
            });
            // ...
          });
    };
    return (
    <>
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
                <Button title = "Continue" onPress = {onContinue} />
            </ScrollView>
        </View>
    </View>
    {loading && <Loading />}
    </>
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

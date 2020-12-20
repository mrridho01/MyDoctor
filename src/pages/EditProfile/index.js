import React, { useEffect, useState } from 'react'
import { ImagePickerIOS, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Input, Profile } from '../../components'
import { colors, getData, storeData } from '../../utils'
import { Firebase } from '../../config'
import { showMessage } from 'react-native-flash-message'
import ImagePicker from 'react-native-image-picker'
import { ILUserPhoto } from '../../assets'

export default function EditProfile({navigation}) {
    const [profile, setProfile] = useState ({
        fullName : "",
        pekerjaan : "",
        email : "",
    });

    const [password, setPassword] = useState ("");
    const [photo, setPhoto] = useState (ILUserPhoto);
    const [photoForDB, setPhotoForDB] = useState ("");

    useEffect (() => {
        getData ("user")
        .then (res => {
        const data = res;
        setPhoto ({uri : res.photo});
        setProfile (data);
        })
    }, []);

   
    const changeText = (key, value) => {
        setProfile ({
            ...profile,
            [key] : value
        })
    };

    const getImage = () => {
        ImagePicker.launchImageLibrary ({
            quality : 0.5,
            maxWidth : 200,
            maxHeight : 200
        }, (response) => {
            if (response.didCancel === true || response.error) {
                showMessage ({
                    message : "Anda tidak jadi memilih foto profile",
                    type : "default",
                    backgroundColor : colors.flashMessageError,
                    color : colors.white
                })
            } else {
                console.log("response getImage :", response);
                const sourcePhoto = {uri : response.uri};
               
                setPhotoForDB (`data:${response.type};base64, ${response.data}`);
                setPhoto (sourcePhoto);
            };
            
        })
    }
    
    const updatePassword = () => {
        Firebase
        .auth()
        .onAuthStateChanged ((user) => {
            if (user) {
                user.updatePassword (password)
                .catch((err) => {
                    showMessage ({
                        message : err.message,
                        type : "default",
                        backgroundColor : colors.flashMessageError,
                        color : colors.white
                        });
                })
            }
        });
    };

    const updateProfileData = () => {
        const data = profile;
        data.photo = photoForDB;
        Firebase
        .database()
        .ref(`users/${profile.uid}/`)
        .update(data)
        .then(() => {
            storeData ("user", data);
        })
        .catch ((err) =>
        showMessage ({
            message : err.message,
            type : "default",
            backgroundColor : colors.flashMessageError,
            color : colors.white
        })
        )
    };
    const saveProfile = () => {
        console.log ("Update : ", profile);
        console.log("New Password : " , password);

        if(password.length > 0) {
            if(password.length < 6) {
                showMessage ({
                   message : "Password kurang dari 6 karakter",
                   type : "default",
                   backgroundColor : colors.flashMessageError,
                   color : colors.white
                });
            } else {
               updatePassword();
               updateProfileData();
               navigation.replace("MainApp");
            } 
        } else {
        updateProfileData();
        navigation.replace("MainApp");         
        }
    };

    return (
        <View style = {styles.page}>
            <Header text = "Edit Profile" onPress = {() => navigation.goBack ()} />
            <ScrollView showsVerticalScrollIndicator = {false}>
            <Gap height = {10} />
            <View style = {styles.content}>
            <Profile tipe = "edituser" photo = {photo} onPress = {getImage} />
            <Gap height = {26} />
            <Input title = "Full Name" value = {profile.fullName} onChangeText = {(value) => changeText ("fullName" , value)} />
            <Gap height = {24} />
            <Input title = "Pekerjaan" value = {profile.pekerjaan} onChangeText = {(value) => changeText ("pekerjaan" , value)} />
            <Gap height = {24} />
            <Input title = "Email Address" value = {profile.email} disable />
            <Gap height = {24} />
            <Input title = "Password" secureTextEntry value = {password} onChangeText = {(value) => setPassword(value)} />
            <Gap height = {40} />
            <Button title = "Save Profile" onPress = {saveProfile} />
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

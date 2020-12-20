import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { showMessage } from 'react-native-flash-message';
import { ILUserPhoto } from '../../assets';
import { List, Gap, Header, Profile } from '../../components'
import { Firebase } from '../../config';
import { colors, getData } from '../../utils'

export default function UserProfile({navigation}) {
    const [profile, setProfile] = useState ({
        fullName : "",
        pekerjaan : "",
        photo : ILUserPhoto
    });

    useEffect (() => {
      getData ("user")
      .then (res => {
          const data = res;
          data.photo = {uri : res.photo};
          setProfile (data);
      });  
    }, [])

    const signOut = () => {
        Firebase
        .auth()
        .signOut()
        .then (res => {
            console.log ("Sign Out ");
            navigation.replace ("GetStarted");
        } )
        .catch (err => {
            showMessage ({
                message : err.message,
                type : "default",
            })
        })
    }

    return (
        <View style = {styles.page}>
            <Header text = "Profile" onPress = {() => navigation.goBack ()}/>
            <Gap height = {10} />
            <View style = {styles.profile}>
            {profile.fullName.length > 0 && <Profile 
            nama = {profile.fullName}
            jabatan = {profile.pekerjaan}
            photo = {profile.photo}
            /> }
            
            </View>
            
            <List 
            nama = "Edit Profile" 
            gender = "Last updated yesterday"
            icon = "editprofile"
            onPress = {() => navigation.navigate ("EditProfile")}
            />
            <List 
            nama = "Language" 
            gender = "Available 12 languages"
            icon = "language"
            />
            <List 
            nama = "Give Us Rate" 
            gender = "On Gooogle Play Store"
            icon = "giveusrate"
            />
            <List 
            nama = "Logout" 
            gender = "Read our guidelines"
            icon = "helpcenter"
            onPress = {signOut}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.white,
        flex : 1
    },
    profile : {
        alignItems : "center",
        marginBottom : 30,
        
        
    }
})

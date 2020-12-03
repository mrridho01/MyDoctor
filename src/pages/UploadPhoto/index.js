import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ICAddPhoto, ICRemovePhoto, ILUserPhoto } from '../../assets'
import { Button, Gap, Header, Link } from '../../components'
import { colors, fonts, storeData } from '../../utils'
import ImagePicker from 'react-native-image-picker'
import { showMessage } from "react-native-flash-message";
import { Firebase } from '../../config'

export default function UploadPhoto({navigation, route}) {
const {fullName, pekerjaan, uid} = route.params;
const [photoForDB, setPhotoForDB] = useState("");
const [hasPhoto,setHasPhoto] = useState (false);
const options = {
    quality : 0.5,
    maxWidth : 200,
    maxHeight : 200
};
const [photo, setPhoto] = useState(ILUserPhoto);

const getImage = () => {
    ImagePicker.launchImageLibrary (options, (response) => {
        if (response.didCancel === true || response.error) {
            showMessage ({
                message : "Anda tidak jadi memilih foto profile",
                type : "default",
                backgroundColor : colors.flashMessageError,
                color : colors.white
            })
        } else {
            console.log("response getImage :", response);
            setPhotoForDB (`data:${response.type};base64, ${response.data}`);
                        
            const sourcePhoto = {uri : response.uri};
            setPhoto (sourcePhoto);
            setHasPhoto (true);
        };
        
    })
};

    const uploadAndContinue = () => {
        Firebase
        .database()
        .ref("users/" + uid + "/")
        .update({photo : photoForDB});

        const data = route.params;
        data.photo = photoForDB;

        storeData("user",data);

        navigation.replace ("MainApp")
    }
    return (
        <View style = {styles.page}>
            <Header text = "Upload Photo" />
            <View style = {styles.content}>
                <View style = {styles.profile}>
                    <TouchableOpacity style = {styles.avatarWrapper} onPress = {getImage} >
                        <Image source = {photo} style = {styles.avatar} />
                        {hasPhoto && <ICRemovePhoto style = {styles.addPhoto}/>  }
                        {!hasPhoto && <ICAddPhoto style = {styles.addPhoto}/> }
                    </TouchableOpacity>
                        <Text style = {styles.textUserName}>{fullName}</Text>
                        <Gap height = {4} />
                    <Text style = {styles.textOccupation}>{pekerjaan}</Text>
                </View>
            
                <View>
                    <Button disable = {!hasPhoto} title = "Upload and Continue" onPress = {uploadAndContinue} />
                    <Gap height = {30} />
                    <Link text = "Skip for this" size = {16} align ="center" onPress = {() => navigation.replace ("MainApp")} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content : {
        paddingHorizontal: 40,
        justifyContent: "space-between",
        flex : 1,
        paddingBottom : 40
    },
    page : {
        backgroundColor : colors.white,
        flex : 1,
    },
    profile : {
        alignItems: "center",
        flex : 1,
        justifyContent: "center"
    },
    avatar : {
        width : 110,
        height : 110,
        borderRadius : 110/2
    },
    avatarWrapper : {
        width : 130,
        height : 130,
        borderWidth: 1,
        borderColor: colors.border.borderColor,
        borderRadius : 130/2,
        alignItems : "center",
        justifyContent: "center",
    },
    addPhoto : {
        position: "absolute",
        bottom : 8,
        right : 6

    },
    textUserName : {
        fontSize: 24,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        textAlign: "center"
    },
    textOccupation : {
        fontSize: 18,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
        textAlign: "center"
    }
})

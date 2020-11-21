import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ICAddPhoto, ILUserPhoto } from '../../assets'
import { Button, Gap, Header, Link } from '../../components'
import { colors, fonts } from '../../utils'

export default function UploadPhoto({navigation}) {
    return (
        <View style = {styles.page}>
            <Header text = "Upload Photo" />
            <View style = {styles.content}>
                <View style = {styles.profile}>
                    <View style = {styles.avatarWrapper} >
                        <Image source = {ILUserPhoto} style = {styles.avatar} />
                        <ICAddPhoto style = {styles.addPhoto}/>
                    </View>
                        <Text style = {styles.textUserName}>Shayna Melinda</Text>
                        <Gap height = {4} />
                    <Text style = {styles.textOccupation}>Product Designer</Text>
                </View>
            
                <View>
                    <Button title = "Upload and Continue" onPress = {() => navigation.replace ("MainApp")} />
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

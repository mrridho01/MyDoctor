import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ChatList, Gap } from '../../components'
import { Firebase } from '../../config'
import { colors, fonts, getData } from '../../utils'

export default function Messages({navigation}) {
    const getDataUserFromLocal = () => {
        getData ("user").then (res => {
            setUser (res);
        });
    };
    const [user,setUser] = useState ({});
    const [historyChat, setHistoryChat] = useState([]);

    useEffect (() => {
        const rootDB = Firebase.database().ref();
        const urlHistory = `messages/${user.uid}/`;
        const messageDB = rootDB.child(urlHistory);
        
        getDataUserFromLocal();
        messageDB
        .on("value", async snapshot => {
            if(snapshot.val()) {
                console.log("isi snapshot val() : ", snapshot.val());
                const snapShotVal = snapshot.val();
                const historyMessage = [];

                const promises = await Object.keys(snapShotVal)
                .map(async isiChat => {
                    const urlUidDoctor = `doctors/${snapShotVal[isiChat].uidPartner}`;
                    const detailDoctor = await rootDB.child(urlUidDoctor).once("value");
                    const valueDetailDoctor = detailDoctor.val();
                    console.log("urlUidDoctor : ", urlUidDoctor);
                    console.log("DetailDoctor : ", valueDetailDoctor);
                    historyMessage.push({
                        id : isiChat,
                        DetailDoctor : valueDetailDoctor,
                        data : snapShotVal[isiChat]
                    });
                });
                await Promise.all(promises);

                console.log("history message : ", historyMessage);
                setHistoryChat(historyMessage);
            };
        })

    }, [user.uid])
    return (
        <View style = {styles.page}>
            <View style = {styles.content}>
                <View style = {styles.titleWrapper}>
                <Text style = {styles.title}>Message</Text>
                <Gap height = {16} />
                </View>
                {
                    historyChat.map (chatDoctors => {
                        const dataDoctor = {
                            id : chatDoctors.DetailDoctor.uid,
                            data : chatDoctors.DetailDoctor
                        };
                        return <ChatList 
                        key = {chatDoctors.id}
                        foto = {{uri : chatDoctors.DetailDoctor.photo}} 
                        nama = {chatDoctors.DetailDoctor.fullName} 
                        chat = {chatDoctors.data.lastContentChat}
                        onPress = {() => navigation.navigate ("Chatting", dataDoctor)}/>
                    })
                }
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.secondary,
        flex : 1,
    },
    title : {
       fontSize : 20,
       fontFamily : fonts.primary[600],
       color : colors.text.primary
    },
    titleWrapper : {
        marginTop : 30,
        marginHorizontal : 16
    },
    content : {
        backgroundColor : colors.white,
        flex : 1,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20
    }
})

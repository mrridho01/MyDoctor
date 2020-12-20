import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ChatItem, Header, InputChat } from '../../components'
import { Firebase } from '../../config';
import { colors, fonts, getChatTime, getData, setDateChat, showError } from '../../utils'

export default function Chatting({navigation, route}) {
    const dataDoctor = route.params;
    const [chatContent, setChatContent] = useState ("");
    const [user,setUser] = useState ({});
    const [chatData, setChatData] = useState ([]);

    useEffect (() => {
        getDataUserFromLocal();
        const chatId =`${user.uid}_${dataDoctor.data.uid}`;
        const urlFirebase = `chatting/${chatId}/allChat/`;
        Firebase
        .database()
        .ref(urlFirebase)
        .on("value", (snapshot) => {
            console.log ("data chat : ", snapshot.val());
            if(snapshot.val()) {
                const allDataChat = [];
                
                Object.keys(snapshot.val())
                .map(key => {
                    const dataChat = snapshot.val()[key];
                    const newDataChat = [];
                    Object.keys(snapshot.val()[key]).map(isiData => {
                        newDataChat.push({
                            id : isiData,
                            data : dataChat[isiData]
                        });
                    });

                    allDataChat.push({
                        id : key,
                        data : newDataChat
                    });
                });
                // Dibuat array untuk melooping bagian date nya, yang tak alin adalah id dari allDataChat
                console.log ("all data chat : ", allDataChat);
                setChatData (allDataChat);
            }
        })
    }, [dataDoctor.data.uid, user.uid ]);

    const getDataUserFromLocal = () => {
        getData ("user").then (res => {
            setUser (res);
        });
    };

    const sendChat = () => {
        const 
            today = new Date(),
            chatId = `${user.uid}_${dataDoctor.data.uid}`,
            urlFirebase = `chatting/${chatId}/allChat/${setDateChat(today)}`,
            urlMessageUser = `messages/${user.uid}/${chatId}`,
            urlMessageDoctor = `messages/${dataDoctor.data.uid}/${chatId}`,
            dataHistoryChatForUser = {
                lastContentChat : chatContent  ,
                lastChatDate : today.getTime(),
                uidPartner : dataDoctor.data.uid
            },
            dataHistoryChatForDoctor = {
                lastContentChat : chatContent  ,
                lastChatDate : today.getTime(),
                uidPartner : user.uid
            };

        const dataChat = {
            sendBy : user.uid,
            chatDate : today.getTime(),
            chatTime : getChatTime(today),
            chatContent : chatContent
        };       
        
        Firebase
        .database()
        .ref(urlFirebase)
        .push(dataChat)
        .then(()=> {
            setChatContent ("");
            //set history for user
            Firebase.database()
            .ref(urlMessageUser)
            .set(dataHistoryChatForUser);

            //set History for Doctor
            Firebase.database()
            .ref(urlMessageDoctor)
            .set(dataHistoryChatForDoctor);

        })
        .catch(err => {
            showError(err.message);
        });

    };

    return (
        <View style = {styles.page}>
            <Header 
            type = "dark-profile" 
            onPress = {() => navigation.goBack ()} 
            nama = {dataDoctor.data.fullName} 
            jabatan = {dataDoctor.data.profession} 
            photo = {{uri : dataDoctor.data.photo}}
            />
            <View style = {styles.content}>
                <ScrollView showsVerticalScrollIndicator = {false} >
                {chatData.map(chat => {
                    return (
                        <View key = {chat.id}>
                            <Text style = {styles.date}>{chat.id}</Text>
                            {chat.data.map (itemChat => {
                                const isMe = itemChat.data.sendBy === user.uid;
                                return (
                                <ChatItem 
                                    key = {itemChat.id}
                                    isMe = {isMe}
                                    text = {itemChat.data.chatContent}
                                    time = {itemChat.data.chatTime} 
                                    photo = {isMe ? null : {uri : dataDoctor.data.photo}}
                                    />)
                            })}
                        </View>
                    )
                })}
                </ScrollView>
            </View>
            <InputChat 
            value = {chatContent}
            onChangeText = {(value) => setChatContent(value)}
            onButtonPress = {sendChat}  
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.white,
        flex : 1,
    },
    date : {
        fontSize : 11,
        fontFamily : fonts.primary.normal,
        color : colors.text.secondary,
        textAlign : "center",
        marginVertical : 20
    },
    content : {
        flex : 1,
    }
})

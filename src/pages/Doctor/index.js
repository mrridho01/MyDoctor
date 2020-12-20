import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ILUserPhoto, JSONTopRatedDoctor } from "../../assets"
import { DoctorType, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components'
import { Firebase } from '../../config'
import { colors, fonts, showError } from '../../utils'

export default function Doctor({navigation}) {
    const [news, setNews] = useState ([]);
    const [categoryDokter, setCategoryDokter] = useState([]);
    const [doctor, setDoctor] = useState ([]);
    useEffect (() => {
        getCategoryDoctor (); 
        getTopRatedDoctors ();
        getNews();     
    }, []);

    const getTopRatedDoctors =() => {
        Firebase
        .database()
        .ref("doctors/")
        .orderByChild("rate")
        .limitToLast(3)
        .once("value")
        .then ((res) => {
            if (res.val()) {
                const oldData = res.val();
                const data = [];
                Object.keys(oldData).map(key => {
                    data.push ({
                        id : key,
                        data : oldData[key]
                    });
                });
               setDoctor (data);
            };
        })
        .catch ((err) => {
            showError(err.message);
        });
    };
    const getCategoryDoctor = () => {
        Firebase
        .database()
        .ref("category_dokter/")
        .once("value")
        .then ((res) => {     

            if (res.val()) {
                const data = res.val();
                const filterData = data.filter ((el) => el !== null);

                setCategoryDokter(filterData);
            };
        })
        .catch ((err) => {
            showError(err.message);
        });
    };

    const getNews = () => {
        Firebase
        .database()
        .ref("news/")
        .once("value")
        .then ((res) => {
            if (res.val()) {
                const data = res.val();
                const filterData = data.filter ((el) => el !== null);
                setNews(filterData);
            };
        })
        .catch ((err) => {
            showError(err.message);
        });
    };
 
    return (
        <View style = {styles.mainPage}>
            <View style = {styles.contentPage}>
                <ScrollView showsVerticalScrollIndicator = {false}>
                    <Gap height = {30} />
                    <View style = {styles.wrapperSection}>
                    <HomeProfile onPress = {() => navigation.navigate ("UserProfile")}/>
                    <Gap height = {30} />
                    <Text style = {styles.welcomeText}>Mau konsultasi dengan siapa hari ini?</Text>
                    <Gap height = {16} />
                    </View>
                <View style = {styles.wrapperScrollHorizontal}>
                <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
                    <View style = {styles.doctorCategory}>
                    <Gap width = {32} />
                        {
                            categoryDokter.map(CategoryDoctor => {
                                return (<DoctorType 
                                key = {CategoryDoctor.id}
                                tipe = {CategoryDoctor.tipe}
                                text = {CategoryDoctor.text}
                                onPress = {() => {navigation.navigate("DoctorPerCategory", CategoryDoctor)}}
                                />);
                            })
                        }
                    <Gap width = {22} />
                    </View>
                </ScrollView>
                </View>
                <View style = {styles.wrapperSection}>
                <Gap height = {30} />      
                <Text style = {styles.labelSection}>Top Rated Doctor</Text>
                <Gap height = {16} />
                {doctor.map((doctor) => {
                    return <RatedDoctor 
                    key = {doctor.id}
                    nama = {doctor.data.fullName}
                    jabatan = {doctor.data.profession}
                    photo = {{uri : doctor.data.photo}}
                    onPress = {() => navigation.navigate ("DoctorProfile", doctor)}
                    />
                })}
            
                <Gap height = {14} />      
                <Text style = {styles.labelSection}>Good News</Text>
                <Gap height = {16} />
                </View>
                {news.map ((item) => {
                    return (<NewsItem 
                    key = {item.id}
                    text = {item.title}
                    time = {item.date}
                    image = {item.image}/>)
                })}
                          
                </ScrollView>
                
            </View>          
        </View>
       
    )
};

const styles = StyleSheet.create({
    mainPage : {
        backgroundColor : colors.secondary,
        flex : 1
    },
    contentPage : {
        backgroundColor : colors.white,
        flex : 1,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20
    },
    welcomeText : {
        fontFamily : fonts.primary[600],
        fontSize : 20,
        color : colors.text.primary,
        maxWidth: 209
    },
    doctorCategory : {
        flexDirection: "row"    
    },
    wrapperScrollHorizontal: {
        marginHorizontal : -16,
    },
    labelSection : {
        fontSize : 16,
        fontFamily : fonts.primary[600],
        color : colors.text.primary
    },
    wrapperSection : {
        paddingHorizontal : 16
    }
    
})

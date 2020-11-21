import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { JSONCategoryDoctor, JSONTopRatedDoctor } from "../../assets"
import { DoctorType, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components'
import { colors, fonts } from '../../utils'

export default function Doctor({navigation}) {
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
                            JSONCategoryDoctor.data.map (CategoryDoctor => {
                                return <DoctorType 
                                key = {CategoryDoctor.id}
                                tipe = {CategoryDoctor.tipe}
                                text = {CategoryDoctor.text}
                                onPress = {() => {navigation.navigate("DoctorPerCategory")}}/>
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
                {
                    JSONTopRatedDoctor.data.map (TopRatedDoctor => {
                        return <RatedDoctor 
                        key = {TopRatedDoctor.id}
                        nama = {TopRatedDoctor.nama}
                        jabatan = {TopRatedDoctor.jabatan}
                        onPress = {() => navigation.navigate ("DoctorProfile")}
                        />
                    })
                }
                <Gap height = {14} />      
                <Text style = {styles.labelSection}>Good News</Text>
                <Gap height = {16} />
                </View>
                <NewsItem text = "Is it safe to stay at home during coronavirus?" time = "today"/>
                <Gap height = {16} />
                <NewsItem text = "Consume yellow citrus helps you healthier" time = "today"/>
                <Gap height = {16} />
                <NewsItem text = "Learn how to make a proper orange juice at home" time = "today"/> 
                <Gap height = {30} />
                       
                </ScrollView>
                
            </View>          
        </View>
       
    )
}

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

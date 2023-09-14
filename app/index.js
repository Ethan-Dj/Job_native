import {useState} from "react"
import {View, Text, ScrollView, SafeAreaView} from "react-native"
import { Stack, useRouter } from "expo-router" // like react router
import {COLORS, icons, images, SIZES} from "../constants"
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from "../components"

const Home = () => { 

    const router = useRouter()

    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{headerStyle: COLORS.lightWhite,
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimensions="60%"/>
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={icons.profile} dimensions="10%" />
                ),
                headerTitle:"jjhbkjbkjn"
                }}
                />
                <ScrollView showsVerticalScrollIndicator={false}>

                </ScrollView>
        </SafeAreaView>
    )
}

export default Home
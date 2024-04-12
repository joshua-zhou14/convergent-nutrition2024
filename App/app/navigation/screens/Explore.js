import { StyleSheet, Text, View, SafeAreaView, Platform, FlatList, Image, Pressable} from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from "axios";

import colors from '../../../config/colors.js';

// const serverUrl = "http://127.0.0.1:5000";

// const http = axios.create({
//     baseURL: serverUrl,
// });


export default function Explore({navigation}) { 
    // let tags;
    // const [coaches, setCoaches] = useState([{}]);
    // const fetchData = () => {
    //     // const baseURL = "http://127.0.0.1:5000";
    //     http.get(`/events/get`).then((response) => coaches = response.data).catch(error => console.log("Error: " + error));
    // };
    // useEffect(() => {
    //     fetch("http://127.0.0.1:5000/events/get").then(
    //         res=>res.json()
    //     ).then(
    //         // console.log("here"),
    //         data=>{
    //             console.log("hi"),
    //             setCoaches(data),
    //             console.log(data)
    //         }
    //     ).catch(error => console.log("Error: " + error));
    // }, []);

    //example tags list for now, will need to connect backend to this later
    const tags = ["Volleyball", "Basketball", "Soccer"];

    //example coaches list for now, will need to connect to backend/database
    const coaches = [
        {
            id: '1',
            name: 'Rikhil Kalidindi',
            description: 'I have no experience',
            img: '../assets/temp1.jpg',
        },
        {
            id: '2',
            name: 'Rikky Dindikal',
            description: 'I hate Rikhil Kalidindi',
            img: '../assets/temp2.jpg',
        },
        {
            id: '3',
            name: 'Dikhil Ralidindi',
            description: 'I am related to Kikhil. I also hate Rikhil Kalidindi.',
            img: '../assets/temp1.jpg',
        },
        {
            id: '4',
            name: 'Kikhil Ralidindi',
            description: 'I am related to Dikhil. I secretly love Rikhil Kalidindi, but I will never tell him.',
            img: '../assets/temp2.jpg',
        },
        {
            id: '5',
            name: 'Rikhil Kalidindi',
            description: 'I have no experience',
            img: '../assets/temp1.jpg',
        },
        {
            id: '6',
            name: 'Rikky Dindikal',
            description: 'I hate Rikhil Kalidindi',
            img: '../assets/temp2.jpg',
        },
        {
            id: '7',
            name: 'Dikhil Ralidindi',
            description: 'I am related to Kikhil. I also hate Rikhil Kalidindi.',
            img: '../assets/temp1.jpg',
        },
        {
            id: '8',
            name: 'Kikhil Ralidindi',
            description: 'I am related to Dikhil. I secretly love Rikhil Kalidindi, but I will never tell him.',
            img: '../assets/temp2.jpg',
        },
        {
            id: '9',
            name: 'Kikhil Ralidindi',
            description: 'I am related to Dikhil. I secretly love Rikhil Kalidindi, but I will never tell him.',
            img: '../assets/temp2.jpg',
        },
        {
            id: '10',
            name: 'Kikhil Ralidindi',
            description: 'I am related to Dikhil. I secretly love Rikhil Kalidindi, but I will never tell him.',
            img: '../assets/temp2.jpg',
        },
        {
            id: '11',
            name: 'Kikhil Ralidindi',
            description: 'I am related to Dikhil. I secretly love Rikhil Kalidindi, but I will never tell him.',
            img: '../assets/temp2.jpg',
        },
    ];
    
    const Item = ({name, description, pfp}) => (
        <View style={styles.eachCoach}>
            <Pressable onPress={() => navigation.navigate('ExploreProfile', {profilename: name})}>
                <Image style={styles.image} source={require('../../assets/temp2.jpg')}/>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('ExploreProfile', {profilename: name})}>
                <View style={styles.coachText}>
                    <Text style={styles.coachTitle}>{name}</Text>
                    <Text textWrap = "on" style={styles.coachDescription}>{description}</Text>
                </View>
            </Pressable>
        </View>
    );

    return (
    <SafeAreaView style={styles.SAVcontainer}>
        <View style={styles.container}>

            <View style={styles.tagContainer}>
                <Text style={styles.title}>EXPLORE</Text>
                {/* Tags */}
                <View style={styles.tags}>
                    {tags.map((item, index) => 
                        <View key={index} style={styles.eachTag}> 
                            <Text style={styles.tagText}>{item}</Text> 
                        </View>)}
                    
                </View>
                <Image style={styles.map} source={require('../../assets/map.png')}/>
            </View>

            {/* Coach List */}
            <View style={styles.coachContainer}>
                <View style={styles.space}/>
                <View style={styles.findCoach}>
                    <Text style={styles.findCoachText}>Find coaches near you.</Text>
                </View>
                <View style={styles.findCoachListView}>
                    <FlatList 
                        data={coaches}
                        renderItem={({item}) => <Item name={item.name} description={item.description} img={item.pfp} />}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>

            <View style={styles.navbar}>
            </View>
        </View>
    </SafeAreaView>
    );
}

//StyleSheets for the actual content; sorted alphabetically
const styles = StyleSheet.create({
    coachContainer:{
        marginTop: 20,
        flex: 3.25,
    },
    tagContainer:{
        flex:2,
        display: 'flex',
        marginTop: Platform.OS === 'android' ? 40 : 0,

    },
    coachDescription:{
        fontSize: 12,
        color: colors.whitetext,
    },
    coachText: {
        flexDirection:'column',
        width:280,
    },
    coachTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom:5,
        color: colors.whitetext,
    },
    SAVcontainer:{
        flex: 1,
        backgroundColor: colors.primary,
    },
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
    },
    eachCoach:{
        height:75,
        width: '100%',
        borderBottomColor: colors.secondary,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    eachTag:{
        backgroundColor: colors.secondary,
        width: 90,
        height: 25,
        marginBottom:10,
        marginRight: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    findCoach:{
        width: '88%',
        height: 20,
        alignItems: 'flex-start',
    },
    findCoachListView:{
        width: '88%',
    },
    findCoachText: {
        fontWeight: 'bold',
        fontSize: 12,
        color: colors.whitetext,
    },
    image:{
        height: 55,
        width: 55,
        borderRadius: 100,
        marginRight: 10,
    },
    map:{
        flex:1,
        width:'100%',
        maxHeight:200,
        alignSelf: 'center',
    },
    navbar: {
        backgroundColor: colors.primary,
        width: '100%',
        flex:0.15
    },
    space:{
        flex:2,
    },
    tags:{
        height: 100,
        //backgroundColor: 'blue',
        width: "85%",
        alignItems: 'center',
        flexDirection: 'row', 
        flexWrap: 'wrap',
        flex:0.5,
        justifyContent: 'space-between',
    },
    tagContainer: {
        width: '90%',
        flex: 2,
        paddingTop: 40,
    },
    tagText:{
        fontSize: 14,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.whitetext,
    },
});
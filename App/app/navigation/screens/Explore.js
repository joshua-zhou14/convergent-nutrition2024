import { StyleSheet, Text, View, SafeAreaView, Platform, FlatList, Image, Pressable} from 'react-native';

import colors from '../../../config/colors.js';
import MainContainer from './MainContainer.js';


export default function Explore({navigation}) {

    //example tags list for now, will need to connect backend to this later
    const tags = ["Volleyball", "Basketball", "Soccer", "Tennis"];

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
    ];
    
    const Item = ({name, description, img}) => (
        <View style={styles.eachCoach}>
            <Pressable onPress={() => navigation.navigate('ExploreProfile', {profilename: name})}>
                <Image style={styles.image} source={require('../../assets/temp2.jpg')}/>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('ExploreProfile', {profilename: name})}>
                <View style={styles.coachText}>
                    <Text style={styles.coachTitle}>{name}</Text>
                    <Text style={styles.coachDescription}>{description}</Text>
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
                        renderItem={({item}) => <Item name={item.name} description={item.description} img={item.img} />}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>

            {/* NavBar */}
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
        flex: 3.25
    },
    tagContainer:{
        flex:1,
        display: 'flex',
        marginTop: Platform.OS === 'android' ? 40 : 0,

    },
    coachDescription:{
        fontSize: 12,
    },
    coachText: {
        flexDirection:'column',
    },
    coachTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom:5,
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
        width: 100,
        height: 30,
        marginBottom: 20,
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

        //backgroundColor: colors.secondary,
    },
    findCoachText: {
        fontWeight: 'bold',
        fontSize: 12,
    },
    image:{
        height: 55,
        width: 55,
        borderRadius: 100,
        marginRight: 10,
    },
    navbar: {
        backgroundColor: colors.primary,
        width: '100%',
        height: 40, 
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
        justifyContent: 'space-between',
    },
    tagText:{
        fontSize: 14,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});
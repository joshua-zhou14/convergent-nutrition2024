import { StyleSheet, Text, View, SafeAreaView, Platform, FlatList, Image} from 'react-native';

import colors from '../../config/colors.js';

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
    ];
    
    const Item = ({name, description, img}) => (
        <View style={styles.eachCoach} onTouchEnd={() =>
            navigation.navigate('Profile', {profilename: name})}>
            <Image style={styles.image} source={require('../assets/temp2.jpg')}/>
            <View style={styles.coachText}>
                <Text style={styles.coachTitle}>{name}</Text>
                <Text style={styles.coachDescription}>{description}</Text>
            </View>
        </View>
    );

    return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>EXPLORE</Text>

        {/* Tags */}
        <View style={styles.tags}>
            {tags.map((item, index) => 
                <View key={index} style={styles.eachTag}> 
                    <Text style={styles.tagText}>{item}</Text> 
                </View>)}
        </View>
        
        {/* Filler */}
        <View style={styles.filler}/>

        {/* Coach List */}
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

        {/* NavBar */}
        <View style={styles.navbar}><Text>Navigation Bar goes here</Text></View>
    </SafeAreaView>
    );
}

//StyleSheets for the actual content; sorted alphabetically
const styles = StyleSheet.create({
    coachDescription:{
        fontSize: 12,
    },
    coachText: {
        flexDirection:'column',
        width: 280,
        height: 65,
    },
    coachTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom:5,
    },
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? 80 : 0,
    },
    eachCoach:{
        height:75,
        width: '100%',
        borderBottomColor: colors.secondary,
        borderBottomWidth: 1,
        flexDirection: 'row',
        //justifyContent: 'center',
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
    filler:{
        height: 75,
        width: '100%',
        //backgroundColor: colors.secondary,
    },
    findCoach:{
        width: '88%',
        height: 20,
        alignItems: 'flex-start',
    },
    findCoachListView:{
        width: '88%',
        height: 425,
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
        height: 50,
        backgroundColor: colors.secondary,
        width: '100%',
        position: 'absolute',
        bottom: 0,
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
        position: 'absolute',
        left:29,
        top: Platform.OS === 'android' ? 40 : 0,
    },
});
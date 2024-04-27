import React from 'react';
import { Text, SafeAreaView, View, Button, StyleSheet, Platform, Image, Pressable, FlatList, Dimensions } from 'react-native';
import colors from '../../../config/colors.js';
import { Video } from 'expo-av';
import Ionicons from 'react-native-vector-icons/Ionicons'


const windowWidth = Dimensions.get('window').width;

export default function Profile({route, navigation}){
    const { profilename, bio } = route.params;

    // Sample data for the FlatList
    const data = [
        { id: '1', name: 'Item 1', video: require('../../assets/vballspike.mp4') },
        { id: '2', name: 'Item 2', video: require('../../assets/spike2.mp4') },
        { id: '3', name: 'Item 3', video: require('../../assets/airball.mp4') },
        { id: '4', name: 'Item 4', video: require('../../assets/pass3.mp4') },
        { id: '5', name: 'Item 5', video: require('../../assets/serve.mp4') },
        { id: '6', name: 'Item 6', video: require('../../assets/spike.mp4') },
        { id: '7', name: 'Item 7', video: require('../../assets/block.mp4') },
        { id: '8', name: 'Item 8', video: require('../../assets/block3.mp4') },
        { id: '9', name: 'Item 9', video: require('../../assets/hazard.mp4') },
        // Add more items as needed
    ];

    // Function to render each item in the FlatList
    const renderItem = ({ item}) => (
        <View style={styles.item}>
            <Pressable onPress={() => navigation.navigate('OneVideoScreen')}>
                <Video
                    style={styles.itemVideo}
                    source={item.video}
                    shouldPlay={false}
                />
            </Pressable>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-outline" size={30} color='white'></Ionicons>
                </Pressable>   
            </View>
            <Image style={styles.profileimg} source={require('../../assets/temp8.jpg')}></Image>
            <Text style={styles.profileTxtHead}>@{profilename}</Text>
            <View style={styles.bioContainer}>
                <Text style={styles.bioText}>I am an amazing Volleyball player who would've been D1 but got injured</Text>
            </View>
            <View style={styles.buttons}>
                <Pressable style={styles.buttonStyle}>
                    <Text>+</Text>
                </Pressable>
                <Pressable style={styles.buttonStyle}>
                    <Text>Message</Text>
                </Pressable>
            </View>
            {/* FlatList with rows of 3 */}
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={3}
                contentContainerStyle={styles.flatListContainer}
            />
        </SafeAreaView>
    );
}

// StyleSheets for the actual content; sorted alphabetically
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingTop: Platform.OS === 'android' ? 40 : 0,
        alignItems: 'center',
    },
    profileimg: {
        height: 130,
        width: 130,
        marginTop: 20,
        borderRadius: 100,
        marginBottom: 10,
    },
    profileTxtHead: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.whitetext,
    },
    buttonContainer: {
        position: 'absolute',
        top: 50,
        left: 20,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '40%',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    buttonStyle: {
        backgroundColor: colors.secondary,
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
    },
    bioText: {
        margin: 10,
        color: colors.whitetext,
        textAlign: 'center'
    },
    bioImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        marginBottom: 10,
        borderRadius: 10,
    },
    bioContainer: {
        width: '80%',
    },
    flatListContainer: {
        paddingHorizontal: 10,
    },
    itemVideo: {
        width: (windowWidth - 40) / 3.2, // Adjust this calculation as needed
        height: (windowWidth - 40) / 3.1 * (16 / 9), // Assuming a 16:9 aspect ratio, adjust as needed
    },
    item: {
        paddingHorizontal: 2,
        alignItems: 'center',
    },
});
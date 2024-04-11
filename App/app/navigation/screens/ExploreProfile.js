import React from 'react';
import { Text, SafeAreaView, View, Button, StyleSheet, Platform, Image, Pressable, FlatList } from 'react-native';
import colors from '../../../config/colors.js';


export default function Profile({ route, navigation }) {
    const { profilename } = route.params;

    // Sample data for the FlatList
    const data = [
        { id: '1', name: 'Item 1', image: require('../../assets/black_image.jpg') },
        { id: '2', name: 'Item 2', image: require('../../assets/black_image.jpg') },
        { id: '3', name: 'Item 3', image: require('../../assets/black_image.jpg') },
        { id: '4', name: 'Item 4', image: require('../../assets/black_image.jpg') },
        { id: '5', name: 'Item 5', image: require('../../assets/black_image.jpg') },
        { id: '6', name: 'Item 6', image: require('../../assets/black_image.jpg') },
        { id: '7', name: 'Item 7', image: require('../../assets/black_image.jpg') },
        { id: '8', name: 'Item 8', image: require('../../assets/black_image.jpg') },
        { id: '9', name: 'Item 9', image: require('../../assets/black_image.jpg') },
        { id: '10', name: 'Item 10', image: require('../../assets/black_image.jpg') },
        { id: '11', name: 'Item 11', image: require('../../assets/black_image.jpg') },
        { id: '12', name: 'Item 12', image: require('../../assets/black_image.jpg') },
        { id: '13', name: 'Item 13', image: require('../../assets/black_image.jpg') },
        { id: '14', name: 'Item 14', image: require('../../assets/black_image.jpg') },
        { id: '15', name: 'Item 15', image: require('../../assets/temp2.jpg') },
        // Add more items as needed
    ];

    // Function to render each item in the FlatList
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image style={styles.itemImage} source={item.image} />
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button style={styles.backbutton}
                    title="<-"
                    onPress={() => navigation.goBack()}
                />
            </View>
            <Image style={styles.profileimg} source={require('../../assets/temp2.jpg')}></Image>
            <Text style={styles.profileTxtHead}>@{profilename}</Text>
            <View style={styles.bioContainer}>
                <Text style={styles.bioText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</Text>
            </View>
            <View style={styles.buttons}>
                <Pressable style={styles.buttonStyle}>
                    <Text>Sync</Text>
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
        top: 50, // Adjust this value as needed for spacing from the top
        left: 20, // Adjust this value as needed for spacing from the left
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '40%',
        justifyContent: 'space-between'
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
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    itemImage: {
        width: 120,
        height: 140,
    },
    item: {
        padding: 1,
        alignItems: 'center',
    },
});

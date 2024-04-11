import {Text, SafeAreaView, View, Button, StyleSheet, Platform, Image, Pressable} from 'react-native';

import colors from '../../../config/colors.js';

export default function Profile({route, navigation}){
    const {profilename} = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
            <Button style = {styles.backbutton} 
                    title="<-"
                    // change the button to an image
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
                    <Text>+</Text>
                </Pressable>
                <Pressable style={styles.buttonStyle}>
                    <Text>Message</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

//StyleSheets for the actual content; sorted alphabetically
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
    buttonContainer:{
        position: 'absolute',
        top: 50, // Adjust this value as needed for spacing from the top
        left: 20, // Adjust this value as needed for spacing from the left
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '35%',
        justifyContent: 'space-between'
    },
    buttonStyle:{
        backgroundColor: colors.secondary,
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
    },
    bioText:{
        margin: 10,
        color: colors.whitetext,
        textAlign: 'center'
    },
    bioContainer: {
        width: '80%',
    }
});
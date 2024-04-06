import {Text, SafeAreaView, View, Button, StyleSheet, Platform, Image} from 'react-native';

import colors from '../../../config/colors.js';

export default function Profile({route, navigation}){
    const {profilename} = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <Button style = {styles.backbutton} 
                    title="<-"
                    onPress={() => navigation.goBack()}
                    />
            <Image style={styles.profileimg} source={require('../../assets/temp2.jpg')}></Image>
            <Text style={styles.profileTxtHead}>{profilename}</Text>
            <View style={styles.buttons}>
                <Button title="Sync"></Button>
                <Button title="Message"></Button>
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
        marginTop: 30,
        borderRadius: 100,
        marginBottom: 10,
    },
    profileTxtHead: {
        fontSize: 20,
        fontWeight: 'bold',

    },
    profileTxt: {
        
    },
});
import {Text, SafeAreaView, StyleSheet, Platform, Image} from 'react-native';

import colors from '../../../config/colors.js';

export default function Profile({route, navigation}){
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.profileimg} source={require('../../assets/temp2.jpg')}></Image>
            <Text style={styles.profileTxtHead}></Text>
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
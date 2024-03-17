import {Text, SafeAreaView, StyleSheet, Platform} from 'react-native';

import colors from '../../config/colors.js';

export default function Profile({route, navigation}){
    const {profilename} = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <Text>This is {profilename}'s profile </Text>
        </SafeAreaView>
    );
}

//StyleSheets for the actual content; sorted alphabetically
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingTop: Platform.OS === 'android' ? 40 : 0,
    },
});
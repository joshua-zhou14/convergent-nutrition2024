// import {Video} from 'expo-av'
// import { View, Text, StyleSheet } from 'react-native'
// import colors from '../../../config/colors'

// export default function OneVideoScreen() {
//     return (
//         <Video 
//             style={styles.container}
//             source={require('../../assets/vballspike.mp4')}
//             shouldPlay={true}
//         />
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         position: 'absolute',
//         top: 0,
//         bottom: 0,
//         right: 0,
//         left: 0,
//         backgroundColor: colors.primary
//     }
// })

import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Pressable } from 'react-native';
import { Video } from 'expo-av';
import colors from '../../../config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'


const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default function VideoOverlayExample({navigation}) {
    const [videoStatus, setVideoStatus] = useState({});

    const handlePlaybackStatusUpdate = (status) => {
        setVideoStatus(status);
    };

    return (
        <View style={styles.container}>
            <Video
                source={require('../../assets/vballspike.mp4')}
                shouldPlay
                isLooping
                onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
                style={styles.video}
            />
            <View style={styles.overlay}>
                <View style={styles.overlayText}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back-outline" size={30} color='white'></Ionicons>
                    </Pressable>                
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    video: {
        width: windowWidth,
        height: windowHeight,
    },
    overlay: {
        position: 'absolute',
        top: 40,
        left: 20,

    },
    overlayText: {
        color: 'white',
        fontSize: 20,
    },
});

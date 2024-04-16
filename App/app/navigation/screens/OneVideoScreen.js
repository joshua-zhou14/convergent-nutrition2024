import {Video} from 'expo-av'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../../../config/colors'

export default function OneVideoScreen() {
    return (
        <Video 
            style={styles.container}
            source={require('../../assets/vballspike.mp4')}
            shouldPlay={true}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: colors.primary
    }
})
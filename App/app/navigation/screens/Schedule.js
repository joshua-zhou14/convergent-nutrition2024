import { StyleSheet, Text, View, SafeAreaView, Platform, FlatList, Image, Pressable} from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../../config/colors.js';

export default function Schedule({ route, navigation }) { 
    const {name} = route.params;
    return (
        <SafeAreaView style={styles.SAVcontainer}>
            <Text>Schedule a meeting with {name}</Text>
            {/* horizontal flatlist of flatlists? The horizontal one are the dates */}
            <FlatList>
                {/* flatlist of buttons with times, 
                    some grayed out to indicate scheduled.
                    When an available is pressed, it turns gray 
                    and add a message saying meeting scheduled for #### am/pm? */}
            </FlatList>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    SAVcontainer: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.primary,
    },
});
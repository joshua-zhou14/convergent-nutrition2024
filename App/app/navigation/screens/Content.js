import React, { useRef, useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Dimensions, TouchableOpacity, Text, Image } from 'react-native';
import { Video } from 'expo-av';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default function VideoScreen() {
    const videos = [
        { id: '1', video: require('../../assets/vballspike.mp4'), profilePicture: require('../../assets/temp1.jpg'), bio: 'Greg was nice today. What a crazy spike. Im Him lol', profileName: 'John Doe'},
        { id: '2', video: require('../../assets/hazard.mp4'), profilePicture: require('../../assets/temp2.jpg'), bio: 'Soccer == Football, no arguments. Look at that control', profileName: 'EdenHazard'},
        { id: '3', video: require('../../assets/airball.mp4'), profilePicture: require('../../assets/temp1.jpg'), bio: 'Damn I suck at basketball someone help me plz needa coach hella bad', profileName: 'John Doe'},
        // Add more video objects here...
    ];

    const videoRefs = useRef([]);

    const [currentVideoIndex, setCurrentVideoIndex] = useState(null);

    // Function to handle viewable items change
    const handleViewableItemsChanged = ({ viewableItems }) => {
        const firstVisibleIndex = viewableItems[0]?.index;
        setCurrentVideoIndex(firstVisibleIndex);
    };

    // Render each video item
    const renderItem = ({ item, index }) => (
        <View style={styles.videoContainer}>
            <Video
                ref={ref => (videoRefs.current[index] = ref)}
                style={styles.video}
                source={item.video}
                resizeMode="cover"
                isLooping
                shouldPlay={currentVideoIndex === index}
            />
            {/* Right-side buttons for liking and commenting */}
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={{marginBottom: 10}}>
                    <Ionicons name="heart" size={32} color="white" />
                </TouchableOpacity>
                    <Ionicons name="chatbubble-outline" size={32} color="white" />
            </View>
            {/* Profile section at the bottom of the video */}
            <View style={styles.profileContainer}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={item.profilePicture} style={styles.profilePicture} />
                    <Text style={{color: 'white'}}>{item.profileName}</Text>
                </View>
                <Text style={styles.bioText}>{item.bio}</Text>
            </View>
        </View>
    );

    // Pause the current video when navigating away from the screen
    useFocusEffect(() => {
        return () => {
            if (currentVideoIndex !== null && videoRefs.current[currentVideoIndex]) {
                videoRefs.current[currentVideoIndex].pauseAsync();
            }
        };
    });

    useEffect(() => {
        if (currentVideoIndex !== null) {
            // Pause the video at the previous index
            if (videoRefs.current[currentVideoIndex - 1]) {
                videoRefs.current[currentVideoIndex - 1].pauseAsync();
            }
   
            // Play the video at the current index
            if (videoRefs.current[currentVideoIndex]) {
                videoRefs.current[currentVideoIndex].playAsync();
            }
        }
    }, [currentVideoIndex]);
   

    return (
        <View style={styles.container}>
            <FlatList
                data={videos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                pagingEnabled
                showsVerticalScrollIndicator={false}
                onViewableItemsChanged={handleViewableItemsChanged}
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 50,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    videoContainer: {
        width: 400,
        height: 785,
        position: 'relative', // To position the buttons and profile section properly
    },
    video: {
        flex: 1,
    },
    buttonsContainer: {
        position: 'absolute',
        right: 20,
        bottom: 100,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    profileContainer: {
        position: 'absolute',
        bottom: 0,
        left: 20,
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        width: '80%',

    },
    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 20, // Circular profile picture
        marginRight: 10,
    },
    bioText: {
        color: 'white',
        fontSize: 14,
        width: '80%',
        ellipsizeMode: 'tail', 
    },

});

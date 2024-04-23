import React, { useRef, useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { useFocusEffect } from '@react-navigation/native';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default function VideoScreen() {
    const videos = [
        { id: '1', video: require('../../assets/vballspike.mp4') },
        { id: '2', video: require('../../assets/hazard.mp4') },
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
        width: windowWidth,
        height: windowHeight,
    },
    video: {
        flex: 1,
    },
});

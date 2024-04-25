// import React, { useRef, useEffect, useState } from 'react';
// import { View, FlatList, StyleSheet, Dimensions, TouchableOpacity, Text, Image, Pressable } from 'react-native';
// import { Video } from 'expo-av';
// import { useFocusEffect } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';

// import colors from '../../../config/colors.js';

// const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

// export default function VideoScreen() {
//     const videos = [
//         { id: '1', video: require('../../assets/vballspike.mp4'), profilePicture: require('../../assets/temp1.jpg'), bio: 'Greg was nice today. What a crazy spike. Im Him lol', profileName: 'John Doe'},
//         { id: '2', video: require('../../assets/hazard.mp4'), profilePicture: require('../../assets/temp2.jpg'), bio: 'Soccer == Football, no arguments. Look at that control', profileName: 'EdenHazard'},
//         { id: '3', video: require('../../assets/airball.mp4'), profilePicture: require('../../assets/temp1.jpg'), bio: 'Damn I suck at basketball someone help me plz needa coach hella bad', profileName: 'John Doe'},
//         // Add more video objects here...
//     ];

//     const videoRefs = useRef([]);

//     const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
//     const [buttonText, setButtonText] = useState("Sync");
//     const [heartColor, setHeartColor] = useState("white");

//     // Function to handle viewable items change
//     const handleViewableItemsChanged = ({ viewableItems }) => {
//         const firstVisibleIndex = viewableItems[0]?.index;
//         setCurrentVideoIndex(firstVisibleIndex);
//     };

//     // Render each video item
//     const renderItem = ({ item, index }) => (
//         <View style={styles.videoContainer}>
//             <Video
//                 ref={ref => (videoRefs.current[index] = ref)}
//                 style={styles.video}
//                 source={item.video}
//                 resizeMode="cover"
//                 isLooping
//                 repeat
//                 shouldPlay={currentVideoIndex === index}
//             />
//             {/* Right-side buttons for liking and commenting */}
//             <View style={styles.buttonsContainer}>
//                 <TouchableOpacity style={{marginBottom: 15}} onPress={() => heartColor == "white" ? setHeartColor("red"): setHeartColor("white")}>
//                     <Ionicons name="heart" size={36} color={heartColor} />
//                 </TouchableOpacity>
//                     <Ionicons name="chatbubble-outline" size={36} color="white" />
//             </View>
//             {/* Profile section at the bottom of the video */}
//             <View style={styles.profileContainer}>
//                 <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
//                     <Image source={item.profilePicture} style={styles.profilePicture} />
//                     <Text style={{color: 'white'}}>{item.profileName}</Text>
//                     <Pressable onPress={() => buttonText == "Sync" ? setButtonText("Synced"): setButtonText("Sync")} style={styles.follow}><Text style={{color: 'white'}}>{buttonText}</Text></Pressable>
//                 </View>
//                 <Text style={styles.bioText}>{item.bio}</Text>
//             </View>
//         </View>
//     );

//     // Pause the current video when navigating away from the screen
//     useFocusEffect(() => {
//         return () => {
//             if (currentVideoIndex !== null && videoRefs.current[currentVideoIndex]) {
//                 videoRefs.current[currentVideoIndex].pauseAsync();
//             }
//         };
//     });

//     useEffect(() => {
//         if (currentVideoIndex !== null) {
//             // Pause the video at the previous index
//             if (videoRefs.current[currentVideoIndex - 1]) {
//                 videoRefs.current[currentVideoIndex - 1].pauseAsync();
//             }
   
//             // Play the video at the current index
//             if (videoRefs.current[currentVideoIndex]) {
//                 videoRefs.current[currentVideoIndex].playAsync();
//             }
//         }
//     }, [currentVideoIndex]);
   

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={videos}
//                 renderItem={renderItem}
//                 keyExtractor={item => item.id}
//                 pagingEnabled
//                 showsVerticalScrollIndicator={false}
//                 onViewableItemsChanged={handleViewableItemsChanged}
//                 viewabilityConfig={{
//                     itemVisiblePercentThreshold: 50,
//                 }}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     videoContainer: {
//         width: 400,
//         height: 785,
//         position: 'relative', // To position the buttons and profile section properly
//     },
//     video: {
//         flex: 1,
//     },
//     buttonsContainer: {
//         position: 'absolute',
//         right: 20,
//         bottom: 87,
//         alignItems: 'center',
//     },
//     buttonText: {
//         color: 'white',
//         marginTop: 5,
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     profileContainer: {
//         position: 'absolute',
//         bottom: 0,
//         left: 20,
//         flexDirection: 'column',
//         alignItems: 'flex-start',
//         padding: 10,
//         borderRadius: 10,
//         marginBottom: 20,
//         width: '90%',

//     },
//     profilePicture: {
//         width: 30,
//         height: 30,
//         borderRadius: 20, // Circular profile picture
//         marginRight: 10,
//     },
//     bioText: {
//         color: 'white',
//         fontSize: 14,
//         width: '80%',
//         ellipsizeMode: 'tail', 
//     },
//     follow:{
//         borderColor: colors.gray,
//         borderWidth: 1,
//         borderRadius: 7,
//         paddingTop: 1,
//         paddingBottom: 1,
//         paddingRight: 15,
//         paddingLeft: 15,
//         marginLeft: 15,
//     }
// });

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { View, FlatList, StyleSheet, Dimensions, TouchableOpacity, Text, Image, Pressable } from 'react-native';
import { Video } from 'expo-av';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../../../config/colors.js';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default function VideoScreen() {
    const videos = [
        { id: '1', video: require('../../assets/vballspike.mp4'), profilePicture: require('../../assets/temp1.jpg'), bio: 'Greg was nice today. What a crazy spike. Im Him lol', profileName: 'John Doe'},
        { id: '2', video: require('../../assets/hazard.mp4'), profilePicture: require('../../assets/temp2.jpg'), bio: 'Soccer == Football, no arguments. Look at that control', profileName: 'EdenHazard'},
        { id: '3', video: require('../../assets/airball.mp4'), profilePicture: require('../../assets/temp1.jpg'), bio: 'Damn I suck at basketball someone help me plz needa coach hella bad', profileName: 'John Doe'},
        // Add more video objects here...
    ];

    const videoRefs = useRef([]);
    
    // State to store sync and heart status for each video
    const [videoStatus, setVideoStatus] = useState(videos.map(() => ({ synced: false, heartColor: 'white' })));

    // Function to toggle sync status
    const toggleSyncStatus = useCallback((index) => {
        setVideoStatus(prevStatus => {
            const newStatus = [...prevStatus];
            newStatus[index] = { ...newStatus[index], synced: !newStatus[index].synced };
            return newStatus;
        });
    }, []);

    // Function to toggle heart color
    const toggleHeartColor = useCallback((index) => {
        setVideoStatus(prevStatus => {
            const newStatus = [...prevStatus];
            newStatus[index] = { ...newStatus[index], heartColor: newStatus[index].heartColor === 'white' ? 'red' : 'white' };
            return newStatus;
        });
    }, []);

    // Function to handle viewable items change
    const handleViewableItemsChanged = useCallback(({ viewableItems }) => {
        const firstVisibleIndex = viewableItems[0]?.index;
        setCurrentVideoIndex(firstVisibleIndex);
    }, []);

    const [currentVideoIndex, setCurrentVideoIndex] = useState(null);

    // Render each video item
    const renderItem = useCallback(({ item, index }) => (
        <VideoItem
            item={item}
            index={index}
            currentVideoIndex={currentVideoIndex}
            toggleSyncStatus={() => toggleSyncStatus(index)}
            toggleHeartColor={() => toggleHeartColor(index)}
            synced={videoStatus[index].synced}
            heartColor={videoStatus[index].heartColor}
            ref={(ref) => (videoRefs.current[index] = ref)}
        />
    ), [currentVideoIndex, videoStatus]);

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

const VideoItem = React.memo(({ item, index, currentVideoIndex, toggleSyncStatus, toggleHeartColor, synced, heartColor }) => {
    return (
        <View style={styles.videoContainer}>
            <Video
                ref={ref => ref}
                style={styles.video}
                source={item.video}
                resizeMode="cover"
                isLooping
                repeat
                shouldPlay={currentVideoIndex === index}
            />
            {/* Right-side buttons for liking and commenting */}
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={{marginBottom: 15}} onPress={toggleHeartColor}>
                    <Ionicons name="heart" size={36} color={heartColor} />
                </TouchableOpacity>
                <Ionicons name="chatbubble-outline" size={36} color="white" />
            </View>
            {/* Profile section at the bottom of the video */}
            <View style={styles.profileContainer}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                    <Image source={item.profilePicture} style={styles.profilePicture} />
                    <Text style={{color: 'white'}}>{item.profileName}</Text>
                    <Pressable onPress={toggleSyncStatus} style={styles.follow}><Text style={{color: 'white'}}>{synced ? 'Synced' : 'Sync'}</Text></Pressable>
                </View>
                <Text style={styles.bioText}>{item.bio}</Text>
            </View>
        </View>
    );
});

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
        bottom: 87,
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
        width: '90%',
    },
    profilePicture: {
        width: 30,
        height: 30,
        borderRadius: 20, // Circular profile picture
        marginRight: 10,
    },
    bioText: {
        color: 'white',
        fontSize: 14,
        width: '80%',
        ellipsizeMode: 'tail', 
    },
    follow:{
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 7,
        paddingTop: 1,
        paddingBottom: 1,
        paddingRight: 15,
        paddingLeft: 15,
        marginLeft: 15,
    }
});

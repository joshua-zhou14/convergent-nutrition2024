// import { StyleSheet, Text, View, SafeAreaView, Platform, FlatList, Image, Pressable} from 'react-native';
// import React, { useState, useEffect } from 'react';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import colors from '../../../config/colors.js';

// export default function Schedule({ route, navigation }) { 
//     const {name} = route.params;
//     return (
//         <SafeAreaView style={styles.SAVcontainer}>
//             <Text>Schedule a meeting with {name}</Text>
//             {/* horizontal flatlist of flatlists? The horizontal one are the dates */}
//             <FlatList>
//                 {/* flatlist of buttons with times, 
//                     some grayed out to indicate scheduled.
//                     When an available is pressed, it turns gray 
//                     and add a message saying meeting scheduled for #### am/pm? */}
//             </FlatList>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     SAVcontainer: {
//         height: '100%',
//         width: '100%',
//         backgroundColor: colors.primary,
//     },
// });


import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import colors from '../../../config/colors.js';

const datesData = [
  { id: '1', date: 'May 01', times: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'] },
  { id: '2', date: 'May 02', times: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'] },
  { id: '3', date: 'May 03', times: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'] },
  { id: '4', date: 'May 04', times: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'] },
  { id: '5', date: 'May 05', times: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'] },
];

export default function Schedule({ route, navigation }) {
  const { name } = route.params;
  const [selectedDate, setSelectedDate] = useState(null);

  const renderDateItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.dateItem, selectedDate === item.id && styles.selectedDateItem]}
        onPress={() => setSelectedDate(item.id)}>
        <Text style={styles.dateText}>{item.date}</Text>
      </TouchableOpacity>
    );
  };

  const renderTimeItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.timeItem}>
        <Text style={styles.timeText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Schedule a meeting with {name}</Text>
      <FlatList
        data={datesData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderDateItem}
      />
      <FlatList
        data={selectedDate ? datesData.find((item) => item.id === selectedDate).times : []}
        keyExtractor={(item, index) => `${selectedDate}-${index}`} // Unique keys
        renderItem={renderTimeItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  dateItem: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  selectedDateItem: {
    backgroundColor: 'white',
  },
  dateText: {
    color: 'white',
  },
  timeItem: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  timeText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});
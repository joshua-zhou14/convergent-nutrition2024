import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Pressable } from 'react-native';
import colors from '../../../config/colors.js';
import { Ionicons } from '@expo/vector-icons';

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
      <View style={styles.buttonContainer}>
          <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-outline" size={30} color='white'></Ionicons>
          </Pressable>   
      </View>
      <Text style={styles.headerText}>Schedule a meeting with {name}</Text>
      <View style={styles.datesView}>
        <FlatList
            data={datesData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={renderDateItem}
        />
      </View>
      
      <FlatList
        data={selectedDate ? datesData.find((item) => item.id === selectedDate).times : []}
        keyExtractor={(item, index) => `${selectedDate}-${index}`} // Unique keys
        renderItem={renderTimeItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        top: 50,
        left: 20,
    },
    container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40,
    textAlign: 'left',
    marginLeft: 9,
    color: 'white',
  },
  dateItem: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1,
    // borderColor: 'white',
    flex: 1,
    minWidth: 100,
    backgroundColor: colors.secondary,
  },
  selectedDateItem: {
    backgroundColor: 'white',
  },
  dateText: {
    // color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  datesView: {
    flex: 0.25,
    maxHeight: 50,
    width: '90%',
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
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeServicesScreen({ navigation }) {
  const [balance, setBalance] = useState('55,800');

  // Data for the service icons
  const services = [
    { id: '1', name: 'Water', icon: 'water-outline', color: '#1E90FF' },
    { id: '2', name: 'ECB', icon: 'bulb-outline', color: '#FFA500' },
    { id: '3', name: 'Gas', icon: 'flame-outline', color: '#FF4500' },
    { id: '4', name: 'Shopping', icon: 'cart-outline', color: '#FF69B4' },
    { id: '5', name: 'Phone', icon: 'call-outline', color: '#1E90FF' },
    { id: '6', name: 'Credit Card', icon: 'card-outline', color: '#228B22' },
    { id: '7', name: 'Insurance', icon: 'shield-outline', color: '#6A0DAD' },
    { id: '8', name: 'Mortgage', icon: 'home-outline', color: '#DC143C' },
    { id: '9', name: 'Other Bills', icon: 'document-text-outline', color: '#808080' },
  ];

  // Handle service button press
  const handleServicePress = (serviceName) => {
    Alert.alert('Service Selected', `You selected ${serviceName}`);
  };

  // Render each service item
  const renderService = ({ item }) => (
    <TouchableOpacity style={[styles.serviceItem, { backgroundColor: item.color }]} onPress={() => handleServicePress(item.name)}>
      <Ionicons name={item.icon} size={40} color="white" />
      <Text style={styles.serviceText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu-outline" size={28} color="white" />
        <Text style={styles.headerTitle}>SERVICES</Text>
        <Ionicons name="settings-outline" size={28} color="white" />
      </View>

      {/* User Balance Section */}
      <View style={styles.balanceSection}>
        <Ionicons name="person-circle-outline" size={80} color="#90CAF9" />
        <Text style={styles.balanceText}>BALANCE</Text>
        <Text style={styles.balanceAmount}>Rs. {balance}</Text>
      </View>

      {/* Services Section */}
      <Text style={styles.sectionTitle}>Other Services</Text>
      <FlatList
        data={services}
        renderItem={renderService}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.servicesList}
      />

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A237E',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  balanceSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  balanceText: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
  },
  balanceAmount: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionTitle: {
    color: '#03A9F4',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  servicesList: {
    paddingBottom: 20,
  },
  serviceItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 10,
    padding: 15,
    height: 100,
  },
  serviceText: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#303F9F',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});



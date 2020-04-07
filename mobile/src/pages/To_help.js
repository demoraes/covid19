import React, { useState, useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, AsyncStorage, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import api from '../services/api';

import logo from '../assets/logo.png';


export default function To_help({ navigation }) {
  const [incidents, setIncidents] = useState([]);

  function navigateToDetail() {
    navigation.navigate('Detail');
  }

  async function loadIncidents() {
    const response = await api.get('help');

    setIncidents(response.data.helps);
  }

  useEffect(() => {
    loadIncidents();
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
      </View>

      <Text style={styles.title}>Bem Vindo</Text>
      <Text style={styles.description}>Escolha um dos casos ededew</Text>

      <FlatList
        data={incidents}
        style={styles.incidentList}
        keyExtractor={incident => String(incident.id)}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ENTIDADE:</Text>
            <Text style={styles.incidentValue}>{incident.user.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Image style={styles.thumbnail} source={{ uri: incident.thumbnail_url }} />
            <Text style={styles.incidentValue}>{incident.description}</Text>

            <Text style={styles.incidentProperty}>COMO CONTRIBUIR:</Text>
            <Text style={styles.incidentValue}>
              {incident.contribution}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToDetail}

            >

              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <FontAwesome5 name="angle-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}


      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 15,
    color: '#737380',
  },

  headerTextBold: {
    fontWeight: 'bold',
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131a',
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380',
  },

  incidentList: {
    marginTop: 32,
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#EBEBEB',
    marginBottom: 16,
    marginBottom: 16,
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },

  incidentValue: {
    marginTop: 1,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380',
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailsButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold',
  },

  thumbnail: {
    width: 250,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 2,
  }


});
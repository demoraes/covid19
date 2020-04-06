import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, Image, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import logo from '../assets/logo.png';
import casos from '../imagens/casos/corona.jpg';



export default function Detail({ navigation }) {

  function navigateBack() {
    navigation.goBack()
  }

  return (


    <FlatList
      data={[1]}
      style={styles.incidentList}
      renderItem={() => (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={logo} />

            <TouchableOpacity onPress={navigateBack}>
              <FontAwesome5 name="angle-left" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>

          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ENTIDADE:</Text>
            <Text style={styles.incidentValue}>Hospital do cancer</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Image source={casos} style={styles.caso} />
            <Text style={styles.incidentValue}>Devido a super lotação não temos comida e material de hiegiene suficiente para todo mundo</Text>

            <Text style={styles.incidentProperty}>COMO CONTRIBUIR:</Text>
            <Text style={styles.incidentValue}>
              Precisamos de cestas basicas e materiais de higiene
            </Text>
          </View>

          <View style={styles.contactBox}>
            <Text style={styles.heroTitle}>Salve o dia</Text>
            <Text style={styles.heroTitle}>Seja o heroi desse caso</Text>

            <Text style={styles.heroDescription}>Entre em contato</Text>

            <View style={styles.actions}>
              <TouchableOpacity style={styles.action} onPress={() => { }}>
                <Text style={styles.actionText}>Whatsapp</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.action} onPress={() => { }}>
                <Text style={styles.actionText}>E-mail</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 10,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#EBEBEB',
    marginBottom: 16,
    marginTop: 48,
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    marginTop: 24,
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#737380',
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#EBEBEB',
    marginBottom: 16,
  },

  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131a',
    lineHeight: 30,
  },

  heroDescription: {
    fontSize: 15,
    color: '#737380',
    marginTop: 16,
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  action: {
    backgroundColor: '#E02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },

  caso: {
    width: 250,
    height: 150
  }

});

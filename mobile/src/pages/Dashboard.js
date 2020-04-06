import React, { useState, useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import {
  View,
  ImageBackground,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import Avatar from '../imagens/avatar/gabriel.jpg';


export default function Dashboard({ navigation }) {


  async function help() {
    navigation.navigate('Help');
  }
  async function to_help() {
    navigation.navigate('To_help');
  }
  async function support() {
    navigation.navigate('Support');
  }

  return (
    <ImageBackground source={require('../assets/background.png')}
      style={styles.container}>

      <Image source={Avatar} style={styles.avatar} />
      <FontAwesome5 name="plus-square" size={80} color="#fff" onPress={help} />
      <Text style={styles.label}>PRECISO DE AJUDA</Text>

      <View style={styles.buttonGroup}>
        <View style={styles.button}>
          <FontAwesome5 name="hands-helping" size={80} color="#fff" onPress={to_help} />
          <Text style={styles.label} >AJUDAR ALGUÉM</Text>
        </View>
        <View style={styles.button}>
          <FontAwesome5 name="people-carry" size={80} color="#fff" onPress={support} />
          <Text style={styles.label}>APOIADORES</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30,
  },
  label: {
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderColor: '#fff',
    borderWidth: 5,
    borderRadius: 5,
    marginBottom: 30
  }
});
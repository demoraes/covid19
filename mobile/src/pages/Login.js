import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, AsyncStorage, KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import api from '../services/api';

import logo from '../assets/logo.png';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('Dashboard');
      }
    })
  }, []);

  async function handleSubmit() {
    // incluir chamada a api
    //@morpa está fazendo a api
    const id = email;
    console.log(senha);


    await AsyncStorage.setItem('usser', id);

    navigation.navigate('Dashboard');
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image source={logo} />

      <View style={styles.form}>
        <Text style={styles.label}>SEU E-MAIL *</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>SENHA *</Text>
        <TextInput
          style={styles.input}
          placeholder="*******"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>ENCONTRAR AJUDA</Text>
        </TouchableOpacity>
        <Text style={styles.register}>
          <AntDesign name="login" size={16} color="#3aa4a4ff" />
           Não possui cadastro?
        </Text>
      </View>
    </KeyboardAvoidingView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30,
  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },

  button: {
    height: 42,
    backgroundColor: '#3aa4a4ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  register: {
    paddingLeft: 10,
    paddingTop: 10,
    color: '#3aa4a4ff',
    fontWeight: 'bold',
    fontSize: 16,
  },

});
import React from 'react';
import { View, FlatList, AsyncStorage, KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import logo from '../assets/logo.png';
import casos from '../imagens/casos/corona.jpg';



export default function Detail({ navigation }) {


  return (

    <FlatList
      data={[1]}
      style={styles.incidentList}
      renderItem={() => (

        <KeyboardAvoidingView style={styles.container}>

          <Image source={logo} />

          <View style={styles.form}>
            <Text style={styles.label}>PROBLEMA</Text>
            <TextInput
              style={styles.input}
              placeholder="Seu e-mail"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Text style={styles.label}>ENTIDADE</Text>
            <TextInput
              style={styles.input}
              placeholder="*******"
              placeholderTextColor="#999"
              autoCapitalize="words"
              autoCorrect={false}
            />

            <Text style={styles.label}>DESCRIÇÃO</Text>
            <TextInput
              style={styles.input}
              placeholder="*******"
              placeholderTextColor="#999"
              autoCapitalize="words"
              autoCorrect={false}
            />

            <Text style={styles.label}>COMO CONTRIBUIR</Text>
            <TextInput
              style={styles.input}
              placeholder="*******"
              placeholderTextColor="#999"
              autoCapitalize="words"
              autoCorrect={false}
            />

            <Text style={styles.label}>CONTATO</Text>
            <TextInput
              style={styles.input}
              placeholder="*******"
              placeholderTextColor="#999"
              autoCapitalize="words"
              autoCorrect={false}
            />

            <Text style={styles.label}>EMAIL</Text>
            <TextInput
              style={styles.input}
              placeholder="*******"
              placeholderTextColor="#999"
              autoCapitalize="words"
              autoCorrect={false}
            />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SALVAR</Text>
            </TouchableOpacity>

          </View>

        </KeyboardAvoidingView>
      )}
    />
  );
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
    marginTop: 100,
    marginBottom:30
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

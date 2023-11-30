import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { validateEmail } from '../utils/validations';
import firebase from 'firebase/compat';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const [errores, setErrores] = useState({
    errorCorreo: false,
    errorPassword: false,
  });

  const validarDatos = async () => {
    // Resetear errores
    setErrores({
      errorCorreo: false,
      errorPassword: false,
    });

    // Validar campos no vacíos
    if (
      formData.email.trim() === '' ||
      formData.password.trim() === '' ||
      formData.repeatPassword.trim() === ''
    ) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    // Validar email
    if (!validateEmail(formData.email)) {
      Alert.alert('Error', 'Correo electrónico incorrecto');
      return;
    }

    // Validar longitud de la contraseña
    if (formData.password.length < 6) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // Validar contraseñas iguales
    if (formData.password !== formData.repeatPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    // Registrar usuario
    try {
      await firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password);
      // Éxito
      Alert.alert('Registro Exitoso', 'Usuario registrado exitosamente.');
    } catch (error) {
      // Manejar errores de Firebase
      Alert.alert('Error', `Error al registrar usuario: ${error.message}`);
    }
  };

  return (
    <>
      <Text style={styles.title}>Registro</Text>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor="#cbcbcb"
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        placeholder="Password"
        style={styles.input}
        placeholderTextColor="#cbcbcb"
        onChangeText={(text) => setFormData({ ...formData, password: text })}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text style={styles.label}>Confirm Password:</Text>
      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
        placeholderTextColor="#cbcbcb"
        onChangeText={(text) => setFormData({ ...formData, repeatPassword: text })}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TouchableOpacity style={styles.btn} onPress={validarDatos}>
        <Text style={styles.texto}>Submit</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '85%',
    padding: 11,
    backgroundColor: 'white',
    borderRadius: 15,
    color: 'black',
    fontSize: 16,
    marginVertical: 4,
  },
  btn: {
    width: '85%',
    borderRadius: 12,
    padding: 11,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#0f4c5c',
  },
  texto: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    color: 'white',
    padding: 15,
    
    
  },
  label: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    color: 'white',
    marginBottom: 20,
    fontFamily: 'serif',
    fontWeight: 'bold',
  },
});

export default RegisterForm;
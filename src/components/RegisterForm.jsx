import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { validateEmail } from '../utils/validations';
import firebase from "firebase/compat";

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        repeatPassword: ''
    });

    const [errores, setErrores] = useState({});

    const validarDatos = () => {
        if (
            formData.email !== "" &&
            formData.password !== "" &&
            formData.repeatPassword !== ""
        ) {
            if (!validateEmail(formData.email)) {
                setErrores({ errorCorreo: true });
                Alert.alert("Error", "Por favor, coloca el correo correctamente");
                return;
            }
            if (formData.password !== formData.repeatPassword) {
                setErrores({ errorPassword: true });
                Alert.alert("Error", "Las contraseñas no coinciden");
                return;
            }

            if (formData.password.length < 6) {
                Alert.alert("Advertencia", "La contraseña debe tener al menos 6 caracteres");
                return;
            }

            firebase
                .auth()
                .createUserWithEmailAndPassword(formData.email, formData.password)
                .then(() => {
                  
                    Alert.alert("Éxito", "Registro exitoso");
                })
                .catch((error) => {
                    console.error("Error en el registro:", error.message);
                    Alert.alert("Error", "Error en el registro: " + error.message);
                });
        } else {
            setErrores({
                errorCorreo: true,
                errorPassword: true,
            });
            Alert.alert("Error", "Por favor, completa todos los campos");
        }
    };

    return (
        <>
            <Text style={styles.text}>Registro</Text>

            <TextInput
                placeholder='email'
                style={styles.input}
                placeholderTextColor={'#cbcbcb'}
                onChangeText={(text) => setFormData({ ...formData, email: text })}
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
            />

            <TextInput
                placeholder='Password'
                style={styles.input}
                placeholderTextColor={'#cbcbcb'}
                onChangeText={(text) => setFormData({ ...formData, password: text })}
                secureTextEntry={true}
                autoCapitalize='none'
                autoCorrect={false}
            />

            <TextInput
                placeholder='Repeat password'
                style={styles.input}
                placeholderTextColor={'#cbcbcb'}
                onChangeText={(text) => setFormData({ ...formData, repeatPassword: text })}
                secureTextEntry={true}
                autoCapitalize='none'
                autoCorrect={false}
            />

            <TouchableOpacity style={styles.btn} onPress={validarDatos}>
                <Text style={styles.texto}>Registrate</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        width: '80%',
        padding: 15,
        backgroundColor: '#334',
        borderRadius: 15,
        color: 'white',
        fontSize: 16,
        marginVertical: 10,
    },
    btn: {
        width: '50%',
        backgroundColor: 'black',
        borderRadius: 12,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    text: {
        fontSize: 20,
        color: 'black',
        padding: 15,
    },
    texto: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
});

export default RegisterForm;

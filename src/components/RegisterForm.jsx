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
                console.log("coloca los campos correctamente");
                setErrores({ errorCorreo: true });
            }
            if (formData.password !== formData.repeatPassword) {
                console.log("coloca los datos correctamente");
                setErrores({ errorPassword: true });
            }

            if (formData.password.length < 6) {
                Alert.alert("Advertencia", "La contraseña debe tener al menos 6 caracteres");
                return;
            }

            console.log("los datos pasaron");
            firebase
                .auth()
                .createUserWithEmailAndPassword(formData.email, formData.password)
                .then(() => {
                    // Handle successful registration if needed
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

            <Text style={styles.texto1}>La contraseña debe tener al menos 6 caracteres</Text>
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

            {errores.errorCorreo && <Text>coloca los datos Correctamente</Text>}
            {errores.errorPassword && <Text>mal</Text>}

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
    texto1: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
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

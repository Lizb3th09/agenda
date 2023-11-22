import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { validateEmail } from '../utils/validations'
import React, { useState } from 'react'
import firebase from "firebase/compat";



// la contraseña debe tener 6 digitos

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
                console.log("email incorrecto");
                setErrores({ errorCorreo: true });
            }
            if (formData.password !== formData.repeatPassword) {
                console.log("password incorrecto");
                setErrores({ errorPassword: true });
            }

            console.log("los datos pasaron");
            firebase
                .auth()
                .createUserWithEmailAndPassword(formData.email, formData.password);
        } else {
            setErrores({
                errorCorreo: true,
                errorPassword: true,
            });
        }
    };

    

    return (
        <>
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

            {errores.errorCorreo && <Text>Error: Email incorrecto</Text>}
            {errores.errorPassword && <Text>Error: Contraseñas no coinciden</Text>}


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
        padding: 10, // Añade relleno para hacer el botón más estilizado
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
      }
      ,
      texto: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center', 
      }
});

export default RegisterForm;

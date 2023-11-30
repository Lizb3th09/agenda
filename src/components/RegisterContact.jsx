"use client";
import React, { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { FIRESTORE_DB } from "../utils/firebase";

import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from "dayjs";

const RegisterContact = ({ currentUser }) => {
  const [value, setValue] = useState(dayjs());
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {}, []);

  const validarDatos = () => {
    if (!name || !phone || !email ) {
      mostrarAlerta('Error', 'Todos los campos son obligatorios');
      return false;
    }

    // Puedes agregar otras validaciones según tus necesidades

    return true;
  };

  const addUser = async () => {
    if (!validarDatos()) {
      return;
    }

    try {
      const user = await addDoc(collection(FIRESTORE_DB, currentUser.uid), {
        name: name,
        phone: phone,
        email: email,
        date: value,
      });

      console.log(user);

      // Éxito al agregar usuario
      mostrarAlerta('Éxito', 'Contacto agregado exitosamente.');
    } catch (error) {
      // Manejar errores al agregar usuario
      console.error("Error al agregar usuario:", error.message);
      mostrarAlerta('Error', `Error al agregar contacto: ${error.message}`);
    }
  };

  const mostrarAlerta = (titulo, mensaje) => {
    Alert.alert(titulo, mensaje);
  };
	

	return (
		<View style={styles.mainContainer}>
			<Text style={styles.titleText}>Registrar Contactos</Text>
			<ScrollView>
				<Text style={styles.text}>Contact Name</Text>
				<View>
					<TextInput
						placeholder="Contact Name"
						style={styles.input}
						placeholderTextColor={"#cbcbcb"}
						onChangeText={(text) => setName(text)}
						value={name}
						secureTextEntry={false}
						autoCapitalize="none"
						autoCorrect={false}
					/>
				</View>
				<Text style={styles.text}>Phone Number</Text>
				<TextInput
					placeholder="Phone"
					style={styles.input}
					placeholderTextColor={"#cbcbcb"}
					onChangeText={(text) => setPhone(text)}
					value={phone}
					secureTextEntry={false}
					autoCapitalize="none"
					autoCorrect={false}
				/>
				<Text style={styles.text}>Email</Text>
				<TextInput
					placeholder="Email"
					style={styles.input}
					placeholderTextColor={"#cbcbcb"}
					onChangeText={(text) => setEmail(text)}
					value={email}
					secureTextEntry={false}
					autoCapitalize="none"
					autoCorrect={false}
				/>
				<View style={styles.container}>
					<DateTimePicker
						value={value}
						onValueChange={(date) => setValue(date)}
						mode={"date"}
						headerTextStyle={(color = "white")}
					/>
				</View>
				<TouchableOpacity style={styles.btn} onPress={addUser}>

					<Text style={styles.textinput}>Add contact</Text>
				</TouchableOpacity>
				{/* <Button onPress={addUser} title="Add User" disabled={name === ""} /> */}
				
			</ScrollView>
		</View>
	);
};
const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		width: "100%",
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		width: 330,
		padding: 20,
		borderRadius: 20,
		marginTop:44,
	},
	input: {
		width: 250,
		height: 30,
		backgroundColor:'white',
		borderRadius: 10,
		color: "black",
		fontSize: 16,
		marginVertical: 10,
	},
	btn: {
		marginTop:20,
		width: "90%",
		backgroundColor: "#0f4c5c",
		borderRadius: 12,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		marginHorizontal:11,
	},
	titleText: {
		color: "black",
		fontSize: 22,
		marginBottom: 15,
		fontFamily: 'serif',
	},
	text: {
		color: "black",
	},
	textinput:{
		color: 'white',
		fontFamily: 'serif',
		
	},
	container:{
		marginTop:30
	}
});

export default RegisterContact;
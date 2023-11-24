import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import firebase from "../utils/firebase";
import Formulario from "./Formulario";
import List from "./List";


const Logout = () => {
	const [showForm, setShowForm] = useState(false);
	const closeSession = () => {
		firebase.auth().signOut();
	};
	const formToggle = () => {
		showForm == true ? setShowForm(false) : setShowForm(true);
	};

	return (
		<View style={styles.mainContainer}>
			<View style={styles.contactsContainer}>
				{showForm ? (
					<Formulario showForm={showForm} setShowForm={setShowForm} />
				) : (
					<List/>
				)}
			</View>

			<View style={styles.buttonContainer}>
				<Button onPress={formToggle} title="Agregar" color="#5e548e"  />
				<Button onPress={closeSession} title="salir" color="#5e548e"/>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	text: {
		color: "white",
	},
	mainContainer: {
		flex: 1,
	},
	contactsContainer: {
		flex: 14,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonContainer: {
		flex: 1,
		gap: 50,
		paddingVertical: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
    
	},
});
export default Logout;
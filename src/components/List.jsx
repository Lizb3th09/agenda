import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FIRESTORE_DB } from "../utils/firebase";
import { collection, onSnapshot } from "firebase/firestore";

const List = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userRef = collection(FIRESTORE_DB, "contactos");
    const subscriber = onSnapshot(userRef, (snapshot) => {
      const updatedUsers = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(updatedUsers);
    });

    return () => subscriber();
  }, []); // El arreglo vacío [] asegura que useEffect solo se ejecute una vez al montar el componente.

  return (
    <View style={styles.container}>
      <>
        <Text style={styles.titleCont}>contactos Uwu</Text>
        {users.length > 0 && (
          <View style={styles.contactsCont}>
            {users.map((user) => (
              <View style={styles.contactCard} key={user.id}>
                <Text style={styles.text}>Email: {user.email}</Text>
                <Text style={styles.text}>Name: {user.name}</Text>
                <Text style={styles.text}>Phone: {user.phone}</Text>
              </View>
            ))}
          </View>
        )}
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 33,
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    borderRadius: 20,
  },
  contactsCont: {
    flex: 14,
    gap: 10,
    marginBottom: 25,
  },
  titleCont: {
    fontSize: 20,
    flex: 1,
    color: "black",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 30,
  },
  contactCard: {
    backgroundColor: "#dee2ff",
    flexDirection: "column",
    color: "white",
    padding: 10,
    borderRadius: 15,
  },
  text: {
    color: "white",
  },
});

export default List;

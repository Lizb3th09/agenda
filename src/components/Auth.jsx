import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert,Image } from "react-native";
import RegisterForm from "./RegisterForm";
import firebase from "../utils/firebase";
import Icon from "react-native-vector-icons/FontAwesome";

const Auth = () => {
  const [show, setShow] = useState(false);
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(true); // Agrega el estado para mostrar/ocultar la contraseña

  const iniciarSesion = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(dataLogin.email, dataLogin.password);
      // Éxito al iniciar sesión
      // console.log("Inicio de sesión exitoso");
    } catch (error) {
      // Manejar errores al iniciar sesión
      // console.error("Error al iniciar sesión:", error.message);
      mostrarAlerta('Error', 'Coloque los datos correctamente');
    }
  };

  const mostrarAlerta = (titulo, mensaje) => {
    Alert.alert(titulo, mensaje);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
     <View><Image style={styles.image} source={{uri:'https://s3.getstickerpack.com/storage/uploads/sticker-pack/lovely-tuji/sticker_8.gif?00a9faeaaa5073217d2489a9ce3ea937'}}></Image></View>
      {!show ? (
        <>
          <Text style={styles.title}>Agenda</Text>
          <>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              placeholder="Enter your email"
              style={styles.input}
              placeholderTextColor="#cbcbcb"
              onChange={(e) =>
                setDataLogin({ ...dataLogin, email: e.nativeEvent.text })
              }
              secureTextEntry={false}
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Text style={styles.label}>Password:</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                placeholder="Enter your password"
                style={styles.input}
                placeholderTextColor="#cbcbcb"
                onChange={(e) =>
                  setDataLogin({ ...dataLogin, password: e.nativeEvent.text })
                }
                secureTextEntry={showPassword} // Usa el estado para mostrar/ocultar la contraseña
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
                
              </TouchableOpacity>
            </View>
          </>

          <TouchableOpacity style={styles.loginButton} onPress={iniciarSesion}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setShow(!show)}>
            <Text style={styles.registerText}>No account? Sign up</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <RegisterForm show={show} setShow={setShow} />

          <TouchableOpacity style={styles.cancelButton} onPress={() => setShow(!show)}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#83c5be",
    width: "100%",
  },
  
  title: {
    fontSize: 30,
    color: "#0f4c5c",
    marginBottom: 20,
    fontFamily: 'serif',
    fontWeight: 'bold',
   
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  
  label: {
    fontSize: 16,
    color: "white",
    alignSelf: "flex-start",
    marginLeft: 30,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    width: "85%",
    padding: 11,
    backgroundColor: "#fffffa",
    borderRadius: 15,
    color: "black",
    fontSize: 16,
    marginVertical: 10,
  },
  loginButton: {
    width: "85%",
    backgroundColor: "#0f4c5c",
    borderRadius: 12,
    padding: 9,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  registerText: {
    color: "white",
    fontSize: 17,
    marginTop: 20,
   
  },
  cancelButton: {
    width: "85%",
    backgroundColor: "black",
    borderRadius: 12,
    padding: 11,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 11,
    
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: 'bold',
  },
  image:{
    width: 200,
    height: 200,
    borderRadius: 100,
    
  },
});

export default Auth;
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet,Text,TextInput,TouchableOpacity,} from "react-native";
import RegisterForm from "./RegisterForm";
import firebase from "../utils/firebase";




const Auth = () => {
  const [show, setShow] = useState(false);
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const iniciarSesion = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(dataLogin.email, dataLogin.password);
  };


  return (
    <>
    
      <SafeAreaView style={styles.container}>
        {!show ? (
          <>
           <>
           <Text style={styles.text}>INICIO DE SECCION</Text>

<TextInput
  placeholder="Username"
  style={styles.input}
  placeholderTextColor={"#cbcbcb"}
  onChange={(e) =>
    setDataLogin({ ...dataLogin, email: e.nativeEvent.text })
  }
  secureTextEntry={false}
  autoCapitalize="none"
  autoCorrect={false}
/>
<TextInput
  placeholder="Password"
  style={styles.input}
  placeholderTextColor={"#cbcbcb"}
  onChange={(e) =>
    setDataLogin({ ...dataLogin, password: e.nativeEvent.text })
  }
  secureTextEntry={true}
  autoCapitalize="none"
  autoCorrect={false}
/>

<TouchableOpacity onPress={() => {setShow(!show);}}>
    <TouchableOpacity style={styles.btn} onPress={iniciarSesion}>
      <Text style={styles.texto}>Iniciar </Text>
    </TouchableOpacity>
</TouchableOpacity>


  <TouchableOpacity onPress={() => {setShow(!show);}}>
    <Text style={styles.tex}>Register</Text>
  </TouchableOpacity>  
           
           </>

          </>
        ) : (
          <>
            <RegisterForm show={show} setShow={setShow} />
            <TouchableOpacity style={styles.btn} onPress={()=>{
                 setShow(!show)
                }}>
                <Text style={styles.texto}>cancelar</Text> 
            </TouchableOpacity>

          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    padding: 15,
    backgroundColor: '#334',
    borderRadius: 15,
    color: 'white',
    fontSize: 16,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
    padding: 15,
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
  texto: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  tex: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    padding: 14,
  },
});

export default Auth;
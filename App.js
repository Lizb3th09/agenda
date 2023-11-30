import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import firebase from './src/utils/firebase';
import 'firebase/compat/auth';
import Auth from './src/components/Auth';
import Logout from './src/components/Logout';

import { initializeApp } from "firebase/app";


export default function App() {

  const [user, setUser] = useState(undefined)
  
  useEffect(()=>{
    firebase.auth().onAuthStateChanged(response => {
      setUser(response)
    })
  },[])

  
  if (user === undefined) return null

  return (
    <>
      <SafeAreaView style={styles.container}>
      {user ? <Logout /> : <Auth />}
      
        
      </SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%'
  
  }
});
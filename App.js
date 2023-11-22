import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import firebase from './src/utils/firebase';
import 'firebase/compat/auth';
import Auth from './src/components/Auth';

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
        {user ? <Text>Estas logeado</Text> : <Auth/>}
      </SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15212B',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%'
  
  }
});
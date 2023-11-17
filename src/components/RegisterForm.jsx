import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const RegisterForm = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        repeatPassword: ''
    })

  return (
    <>
        <TextInput 
        placeholder = 'email' 
        style={styles.input}
        placeholderTextColor={'#cbcbcb'}
        onChange={e=>setFormData({...formData,email:e.nativeEvent.text})}
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}
        />
        <TextInput 
        placeholder = 'Password' 
        style={styles.input}
        placeholderTextColor={'#cbcbcb'}
        onChange={e=>setFormData({...formData,password:e.nativeEvent.text})}
        secureTextEntry={true}
        // keyboardType={'visible-password'}
        autoCapitalize='none'
        autoCorrect={false}
        />

<TextInput 
        placeholder = 'Repeat password' 
        style={styles.input}
        placeholderTextColor={'#cbcbcb'}
        onChange={e=>setFormData({...formData,repeatPassword:e.nativeEvent.text})}
        secureTextEntry={true}
        // keyboardType='visible-password'
        autoCapitalize='none'
        autoCorrect={false}
        />
        
        <TouchableOpacity style={styles.btn} onPress={()=>{
            console.log(formData);
                
        }}>

        <Text style={styles.texto}>Registrate</Text>
        </TouchableOpacity>

    </>
  )
}
const styles = StyleSheet.create({
    input:{
        width: '80%',
        padding: 15,
        backgroundColor: '#333',
        borderRadius: 15,
        color: 'white',
        fontSize: 16,
        marginVertical: 10,
    },
    texto:{
        color:'white',
        marginTop: 20,
        fontSize: 20,
    },
    btn:{
        marginTop: 20,
        width: '80%',
        backgroundColor: '#243e36',
        borderRadius: 12,
        alignItems: 'center',
        padding: 10,
    },
})

export default RegisterForm

import { View, Text, TouchableOpacity, StyleSheet ,TextInput} from 'react-native'
import React, { useState } from 'react'
import RegisterForm from './RegisterForm'

const Auth = () => {
  
  const [show,setShow] = useState(false)

  return (

    
    <>
    {
      !show ?
      <>
       <>
       <Text style={styles.text}>INICIO DE SECCION</Text>
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

            <TouchableOpacity style={styles.btn} TouchableOpacity>
                <Text style={styles.texto}>Iniciar Secion</Text> 
            </TouchableOpacity>
    </>


        <TouchableOpacity
            onPress={()=>{
            setShow(!show)
            }}>
              <Text style={styles.tex}>Registrarse</Text>
         </TouchableOpacity>
        
      </>
      :
      <>

        <RegisterForm/>

            <TouchableOpacity style={styles.btn} onPress={()=>{
                 setShow(!show)
                }}>
                <Text style={styles.texto}>cancelar</Text> 
            </TouchableOpacity>
            
      </>

        
    }
       
    </>

  )
 
}


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
  
  text:{
    fontSize: 20,
    color: 'white',
    padding:15,
  },
 
  btn: {
  width: '50%',
  backgroundColor: 'black',
  borderRadius: 12,
  padding: 10, 
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
}
,
texto: {
  color: 'white',
  fontSize: 15,
  textAlign: 'center', 
},

tex: {
  color: 'white',
  fontSize: 15,
  textAlign: 'center', 
  padding:14,
},

})


export default Auth
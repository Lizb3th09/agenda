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
        <TouchableOpacity
          onPress={()=>{
            setShow(!show)
          }}
        >
          <Text style={styles.text}>Inicio seccion </Text>
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

        </>
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
  text:{
    fontSize: 20,
    color: 'white'
  },
  btn: {
    marginTop: 10,
    width: '50%',
    backgroundColor: 'black',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
   
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
})


export default Auth
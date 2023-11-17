import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
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
          <Text style={styles.text}>Registrate</Text>
        </TouchableOpacity>
      </>
      :
      <>
        <RegisterForm/>
      </>
     
    }


    </>
  )
}


const styles = StyleSheet.create({
  text:{
    fontSize: 20,
    color: 'white'
  }
})


export default Auth
import { StyleSheet, Text, View, Image } from 'react-native'
import React, { FC, useEffect } from 'react'
import { Colors } from '@utils/Constants';
import Logo from '@assets/images/logo.jpeg';
import { screenWidth } from '@utils/Scaling';
import { navigate } from '@utils/NavigationUtils';

const SplashScreen:FC = () => {



    useEffect(() =>{

        const navigateUser = async () => {
            try {
             navigate('CustomerLogin');   
            } catch (error) {
                console.log(error);
            }
        }


        const timeOutId = setTimeout(() => {
            navigateUser();
        }, 1000)
        return () => clearTimeout(timeOutId);
    },[])


  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo}/>
      {/* <Text style={styles.text}>SplashScreen</Text> */}
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  logo: {
    width: screenWidth * 0.3,
    height: screenWidth * 0.3,
    resizeMode: 'contain',
  },
})
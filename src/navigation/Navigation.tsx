import { StyleSheet, View, Text } from 'react-native'
import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef } from '@utils/NavigationUtils'


//screens
//auth
import SplashScreen from '@features/auth/SplashScreen'
import CustomerLogin from '@features/auth/CustomerLogin'
import DeliveryLogin from '@features/auth/DeliveryLogin'


const Stack = createNativeStackNavigator();

const Navigation: FC = () => {



  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator 
        initialRouteName='SplashScreen'
        screenOptions={{
            headerShown: false
        }}
      >
        <Stack.Screen 
          name="SplashScreen" 
          component={SplashScreen}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }} 
        />
        <Stack.Screen 
          name="CustomerLogin" 
          component={CustomerLogin}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }} 
        />
        <Stack.Screen 
          name="DeliveryLogin" 
          component={DeliveryLogin}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
})

export default Navigation
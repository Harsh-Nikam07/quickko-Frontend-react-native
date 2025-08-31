import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler'
import CustomSafeAeraView from '@components/global/CustomSafeAeraView'
import ProductSlider from '@components/login/ProductSlider'
import { Colors } from '@utils/Constants'

const CustomerLogin:FC = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <CustomSafeAeraView>
          <ProductSlider/>
        </CustomSafeAeraView>
      </View>
    </GestureHandlerRootView>
  )
}

export default CustomerLogin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
})


//1:09
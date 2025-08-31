import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@utils/Constants'

const ProductSlider = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProductSlider</Text>
    </View>
  )
}

export default ProductSlider

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
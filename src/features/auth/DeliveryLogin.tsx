import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DeliveryLogin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DeliveryLogin</Text>
    </View>
  )
}

export default DeliveryLogin

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
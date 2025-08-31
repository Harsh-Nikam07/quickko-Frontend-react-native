import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { FC } from 'react'
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler'
import CustomSafeAeraView from '@components/global/CustomSafeAeraView'
import ProductSlider from '@components/login/ProductSlider'
import { Colors } from '@utils/Constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import { screenHeight } from '@utils/Scaling'

const CustomerLogin: FC = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <View style={styles.container}>
        <CustomSafeAeraView >
          <ProductSlider />
          {/* <Text style={styles.text}>Login</Text> */}
          <View style={styles.footer}>
            {/* <SafeAreaView /> */}
            <Text style={styles.text}>Login</Text>
          </View>
        </CustomSafeAeraView>
        
      </View>

    </GestureHandlerRootView>
  )
}

export default CustomerLogin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  footer: {
    height: screenHeight * 0.5,
    borderTopWidth: 0.8,
    borderTopColor: Colors.border,
    paddingBottom: 10,
    zIndex: 22,
    position: 'absolute',
    bottom: screenHeight * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.background,
    width: '100%',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
})
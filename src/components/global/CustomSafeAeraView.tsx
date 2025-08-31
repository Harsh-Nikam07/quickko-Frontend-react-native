import { Colors } from "@utils/Constants"
import { FC, ReactNode } from "react"
import { StyleSheet, ViewStyle } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

interface CustomSafeAeraViewProps {
  children: ReactNode
  style?: ViewStyle
}

const CustomSafeAeraView: FC<CustomSafeAeraViewProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container, style]} edges={["top"]}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
})

export default CustomSafeAeraView

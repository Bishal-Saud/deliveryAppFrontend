import { View, Text ,ViewStyle, StyleSheet, SafeAreaView} from 'react-native'
import React, { FC } from 'react'
import { ReactNode } from 'react'

interface CustomSafeAreaViewProps{
    children:ReactNode,
    style?:ViewStyle
}

const CustomSafeAreaView:FC<CustomSafeAreaViewProps> = ({children,style}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView/>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    }
})

export default CustomSafeAreaView
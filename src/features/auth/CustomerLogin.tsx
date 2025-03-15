import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import {GestureHandlerRootView,PanGestureHandler,State} from 'react-native-gesture-handler'
import CustomSafeAreaView from '@components/global/CustomSafeAreaView'
import ProductSlider from '@components/login/ProductSlider'

const CustomerLogin = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
     <View style={styles.container}>
        <CustomSafeAreaView>
            <ProductSlider/>
        </CustomSafeAreaView>

<View style={styles.footer}>
  <SafeAreaView/>
</View>

     </View>
    </GestureHandlerRootView>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    footer:{

    }
    
})

export default CustomerLogin
import { View, Text, StyleSheet, SafeAreaView, Animated } from 'react-native'
import React, { useState } from 'react'
import {GestureHandlerRootView,PanGestureHandler,State} from 'react-native-gesture-handler'
import CustomSafeAreaView from '@components/global/CustomSafeAreaView'
import ProductSlider from '@components/login/ProductSlider'
import CustomText from '@components/ui/CustomText'
import { RFValue } from 'react-native-responsive-fontsize'
import { resetAndNavigate } from '@utils/NavigationUtils'
import { Colors } from '@utils/Constants'


const CustomerLogin = () => {

  const [gestureSequence,setGestureSequence] = useState<string[]>([])

  const handleGesture = ({nativeEvent}:any) =>{
    if(nativeEvent.state === State.END){
      const {translationX,translationY} = nativeEvent
      let direction =''
      if(Math.abs(translationX) > Math.abs(translationY)){
        direction = translationX > 0 ? "right":"left"
      } else{
        direction = translationY > 0 ? "down":"up"
      }
      const newSequence = [...gestureSequence,direction].slice(-5)
      setGestureSequence(newSequence)
      if(newSequence?.join(' ')=== 'up up down left right'){
        setGestureSequence([ ])
        resetAndNavigate("DeliveryLogin")
      }


    }
  }

  return (
    <GestureHandlerRootView style={styles.container}>
     <View style={styles.container}>
        <CustomSafeAreaView>
            <ProductSlider/>
            <PanGestureHandler onHandlerStateChange={handleGesture}>
              <Animated.ScrollView bounces={false}
              keyboardDismissMode="on-drag"
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={styles.subContainer}
              >

              </Animated.ScrollView>
            </PanGestureHandler>
        </CustomSafeAreaView>

<View style={styles.footer}>
  <SafeAreaView/>
  <CustomText fontSize={RFValue(9)}>
    By Continuing, you agree to our Terms of Service & Privacy Policy.
  </CustomText>
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
    subContainer:{
      flex:1,
      justifyContent:'flex-end',
      alignItems:"center",
      marginBottom:20
    },
    footer:{
      borderTopWidth:0.8,
      borderColor:Colors.border,
      paddingBottom:10,
      zIndex:22,
      position:'absolute',
      bottom:0,
      justifyContent:'center',
      alignItems:"center",
      padding:10,
      backgroundColor:"#f8f9fc",
      width:"100%"
    }
    
})

export default CustomerLogin
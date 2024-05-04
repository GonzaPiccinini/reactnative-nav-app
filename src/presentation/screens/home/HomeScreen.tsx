import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { useNavigation } from '@react-navigation/native'
import { PrimaryButton } from '../../components/shared/PrimaryButton'

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={globalStyles.container}>
      <PrimaryButton 
      label='Productos' 
      onPress={() => navigation.navigate('Products' as never)}
      />
      <PrimaryButton 
      label='Configuración' 
      onPress={() => navigation.navigate('Settings' as never)}
      />
    </View>
  )
}

export default HomeScreen

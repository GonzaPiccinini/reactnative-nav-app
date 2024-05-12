import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../../routes/StackNavigator'

const ProductScreen = () => {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params
  const navigation = useNavigation()
  
  useEffect(() => {
    navigation.setOptions({
      title: `Producto ${params.id}`
    })
  }, [])

  return (
    <View>
      <Text>Product Screen</Text>

      <Text style={{
        fontSize: 20, 
        textAlign: 'center',
        marginTop: 20
        }}>
        {params.id} - {params.name}
      </Text>
    </View>
  )
}

export default ProductScreen

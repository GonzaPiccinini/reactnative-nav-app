import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './presentation/routes/StackNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator>

      </StackNavigator>
    </NavigationContainer>
  )
}

export default App
import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator'
import { ButtonTabsNavigator } from './presentation/routes/ButtonTabsNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <SideMenuNavigator />
      {/* <ButtonTabsNavigator /> */}
    </NavigationContainer>
  )
}

export default App
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { TabNavigationParcial } from './components/TabNavigationParcial';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigationParcial />
    </NavigationContainer>
  );
}

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {NavigationMain} from './src/navigation';
import {AuthProvider, PermissionsProvider, ThemeProvider} from './src/context';

function App(): JSX.Element {
  return (
    <AppState>
      <NavigationContainer>
        <NavigationMain />
      </NavigationContainer>
    </AppState>
  );
}

function AppState({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  return (
    // <AuthProvider>
    //   <ThemeProvider>
    //     <PermissionsProvider>
    //       <OTsProvider>
    //         <InventoryProvider>
    //           <UIProvider>{children}</UIProvider>
    //         </InventoryProvider>
    //       </OTsProvider>
    //     </PermissionsProvider>
    //   </ThemeProvider>
    // </AuthProvider>
    <AuthProvider>
      <ThemeProvider>
        <PermissionsProvider>{children}</PermissionsProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

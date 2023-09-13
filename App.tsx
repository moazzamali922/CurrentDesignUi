import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SignIn from './src/SignIn';
import Screen1 from './src/Screen1';
import Screen2 from './src/Screen2';
import Screen3 from './src/Screen3';
import SignUp from './src/SignUp';
import {Provider as PaperProvider} from 'react-native-paper';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
/**
 * Screen Navigations with drawer componet
 */

function DrawerComponent() {
  return (
    <Drawer.Navigator
      initialRouteName="Screen2"
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: '#5dbf06',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          fontFamily: 'DMSans-Bold',
          fontSize: 15,
        },
        drawerStyle: {
          width: '40%',
        },
      }}>
      <Drawer.Screen
        name={'Screen1'}
        component={Screen1}
        options={{
          title: 'Screen1',
          headerTitleStyle: {fontFamily: 'DMSans-Bold'},
          headerTitleAlign: 'center',
          headerShown: false,
          headerStyle: {backgroundColor: '#F5F5F5'},
        }}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name={'Screen2'}
        component={Screen2}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name={'Screen3'}
        component={Screen3}
      />
    </Drawer.Navigator>
  );
}

/**
 * Screen Navigations
 */

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          {/* <Stack.Screen
            name={'SignIn'}
            component={SignIn}
            options={{
              headerShown: false,
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#5d0e70',
              },
            }}
          />
          <Stack.Screen
            name={'SignUp'}
            component={SignUp}
            options={{
              headerShown: false,
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#5d0e70',
              },
            }}
          /> */}

          <Stack.Screen
            name="Root"
            component={DrawerComponent}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
export default App;

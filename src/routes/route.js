import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Configurações from '../pages/Configurações'
import AddAluno from '../pages/AddAluno';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabBar() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarInactiveTintColor: '#fff',
                tabBarActiveTintColor: '#00FFFF',
                tabBarStyle: {
                    paddingBottom: 5,
                    paddingTop: 5,
                    backgroundColor: '#1C1C1C',
                    borderTopColor: '#00FFFF'
                },
            }}
        >
            <Tab.Screen name="TelaHome" component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen name="AddAluno" component={AddAluno}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen name="Configuração" component={Configurações}
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

export default function routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Home" component={TabBar}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="Login" component={Login}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name='Cadastro' component={Cadastro}
                    options={{
                        // headerShown: false
                        headerTitle: 'VOLTAR',
                        headerStyle: {
                            backgroundColor: '#000',
                            borderBottomColor: 'transparent',
                        },
                        headerTitleStyle: {
                            color: '#fff',
                            fontWeight: '800'
                        },
                        headerTintColor: '#fff'
                    }}
                />
                <Stack.Screen name='Configuração' component={Configurações}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
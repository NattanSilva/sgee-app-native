import { SessionProvider, useSession } from '@/contexts/SessionProvider'
import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <SessionProvider>
      <RootStack />
    </SessionProvider>
  )
}

function RootStack() {
  const { isLogged } = useSession()

  return (
    <Stack>
      <Stack.Protected guard={isLogged}>
        <Stack.Screen name='index' options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Screen
        name='sign-in/index'
        options={{
          headerShown: false,
          animation: 'slide_from_left',
        }}
      />

      <Stack.Screen
        name='sign-up/index'
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />
    </Stack>
  )
}

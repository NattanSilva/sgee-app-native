import { SessionProvider, useSession } from '@/contexts/SessionProvider'
import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <SessionProvider>
      <ProtectedRoutes />
    </SessionProvider>
  )
}

function ProtectedRoutes() {
  const { isLogged } = useSession()

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={isLogged}>
        <Stack.Screen
          name='index'
          options={{ headerShown: false, animation: 'fade_from_bottom' }}
        />
        <Stack.Screen
          name='loan-request/index'
          options={{ headerShown: false, animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name='loan-details/index'
          options={{ headerShown: false, animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name='support/index'
          options={{ headerShown: false, animation: 'slide_from_right' }}
        />
      </Stack.Protected>

      <Stack.Screen
        name='sign-in/index'
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name='sign-up/index'
        options={{ headerShown: false, animation: 'slide_from_left' }}
      />
    </Stack>
  )
}

import { useSession } from '@/contexts/SessionProvider'
import { useRouter } from 'expo-router'
import { Bell, LogOut } from 'lucide-react-native'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Shadow } from 'react-native-shadow-2'
import { styles } from './styles'

export function UserTab() {
  const router = useRouter()
  const { setIsLogged } = useSession()

  function handleLogout() {
    setIsLogged(false)
    router.replace('/sign-in')
  }

  return (
    <Shadow
      style={styles.container}
      distance={6}
      startColor='rgba(0, 130, 0, 0.45)'
      endColor='rgba(0, 130, 0, 0.05)'
      offset={[0, 0]}
    >
      <Image
        style={styles.avatar}
        source={{
          uri: 'https://avatars.githubusercontent.com/u/103470844?v=4',
        }}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Hello, Nattan Silva!</Text>
        <Text style={styles.infoMessage}>What's on your mind?</Text>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.bellContainer}>
          <Bell color={'#FFF'} size={24} style={styles.bellIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleLogout}
          activeOpacity={0.8}
          style={styles.logoutContainer}
        >
          <LogOut color={'#FFF'} size={24} style={styles.logoutIcon} />
        </TouchableOpacity>
      </View>
    </Shadow>
  )
}

import { Bell } from 'lucide-react-native'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Shadow } from 'react-native-shadow-2'
import { styles } from './styles'

export function UserTab() {
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
      <TouchableOpacity style={styles.bellContainer}>
        <Bell color={'#FFF'} size={24} style={styles.bellIcon} />
      </TouchableOpacity>
    </Shadow>
  )
}

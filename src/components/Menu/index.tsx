import { useRouter } from 'expo-router'
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  CircleDollarSign,
  CircleQuestionMark,
  ClockIcon,
} from 'lucide-react-native'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export function Menu() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          onPress={(e) => router.push('/loan-request')}
          activeOpacity={0.8}
          style={styles.optionContainer}
        >
          <Text style={styles.optionTitle}>Request Loan</Text>
          <ArrowLeftCircle color={'black'} size={32} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.optionContainer}>
          <Text style={styles.optionTitle}>Return Request</Text>
          <ArrowRightCircle color={'black'} size={32} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.optionContainer}>
          <Text style={styles.optionTitle}>Available Equipment</Text>
          <ClockIcon color={'black'} size={32} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.optionContainer}>
          <Text style={styles.optionTitle}>Pay Penalties</Text>
          <CircleDollarSign color={'black'} size={32} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push('/support')}
          activeOpacity={0.8}
          style={styles.optionContainer}
        >
          <Text style={styles.optionTitle}>Support</Text>
          <CircleQuestionMark color={'black'} size={32} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

import { LoanRequestForm } from '@/components/forms/LoanRequest'
import { useRouter } from 'expo-router'
import { ArrowLeft } from 'lucide-react-native'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

export default function LoanRequest() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={styles.backButton}
        activeOpacity={0.8}
      >
        <ArrowLeft color={'white'} size={24} />
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.saudationContainer}>
        <Text style={styles.saudationTitle}>Solicitar Empréstimo</Text>
        <Text style={styles.saudationText}>
          Preencha os dados para solicitar o empréstimo de equipamento
        </Text>
      </View>
      <LoanRequestForm />
    </View>
  )
}

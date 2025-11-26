import { LoanDetailsView } from '@/components/LoanDetailsView'
import { useLocalSearchParams } from 'expo-router'
import { View } from 'react-native'
import styles from './styles'

export default function LoanDetails() {
  const params = useLocalSearchParams()

  // Dados do empréstimo - em produção, isso viria de uma API ou contexto
  // Por enquanto, usando dados mockados ou dos parâmetros
  const loanData = {
    clientName: (params.clientName as string) || 'Nattan Silva',
    equipmentId: (params.equipmentId as string) || 'EQ-001',
    loanDate: (params.loanDate as string) || '25-11-2025',
    expectedReturnDate: (params.expectedReturnDate as string) || '28-11-2025',
    actualReturnDate: (params.actualReturnDate as string) || undefined,
    status: (params.status as string) || 'Em Aberto',
    fineAmount: params.fineAmount ? parseFloat(params.fineAmount as string) : 0,
  }

  return (
    <View style={styles.container}>
      <LoanDetailsView loanData={loanData} />
    </View>
  )
}

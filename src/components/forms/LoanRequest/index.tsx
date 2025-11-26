import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'expo-router'
import { Controller, useForm } from 'react-hook-form'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '../styles'
import { loanRequestSchema, type LoanRequestData } from './schemas'

function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}-${month}-${year}`
}

function formatDateInput(text: string): string {
  // Remove tudo que não é número
  const numbers = text.replace(/\D/g, '')

  // Limita a 8 dígitos (DDMMYYYY)
  const limited = numbers.slice(0, 8)

  // Formata como DD-MM-YYYY
  if (limited.length <= 2) {
    return limited
  } else if (limited.length <= 4) {
    return `${limited.slice(0, 2)}-${limited.slice(2)}`
  } else {
    return `${limited.slice(0, 2)}-${limited.slice(2, 4)}-${limited.slice(4)}`
  }
}

export function LoanRequestForm() {
  const now = new Date()
  const formattedStartDate = formatDate(now)

  const { control, handleSubmit } = useForm<LoanRequestData>({
    resolver: zodResolver(loanRequestSchema),
    defaultValues: {
      equipmentId: '',
      startDate: formattedStartDate,
      returnDate: '',
    },
  })
  const router = useRouter()

  function handleLoanRequest(data: LoanRequestData) {
    console.log('Loan request data:', data)
    // Aqui você pode adicionar a lógica para enviar a solicitação
    alert('Solicitação de empréstimo enviada com sucesso!')
    router.back()
  }

  return (
    <View style={styles.formContainer}>
      <Controller
        control={control}
        name='equipmentId'
        render={({ field, fieldState }) => (
          <View style={styles.inputContainer}>
            <Text style={styles.formLabel}>ID do Equipamento</Text>
            <TextInput
              placeholderTextColor='#52525c'
              value={field.value}
              onChangeText={field.onChange}
              style={styles.formInput}
              placeholder='Ex: EQ-001'
              autoCapitalize='characters'
            />
            {fieldState.error?.message && (
              <Text style={styles.formInputErrorMessage}>
                {fieldState.error.message}
              </Text>
            )}
          </View>
        )}
      />

      <Controller
        control={control}
        name='startDate'
        render={({ field }) => (
          <View style={styles.inputContainer}>
            <Text style={styles.formLabel}>Data de Início</Text>
            <TextInput
              placeholderTextColor='#52525c'
              value={field.value}
              editable={false}
              style={[styles.formInput, { opacity: 0.6 }]}
              placeholder='DD-MM-YYYY'
            />
          </View>
        )}
      />

      <Controller
        control={control}
        name='returnDate'
        render={({ field, fieldState }) => (
          <View style={styles.inputContainer}>
            <Text style={styles.formLabel}>Data de Retorno</Text>
            <TextInput
              placeholderTextColor='#52525c'
              value={field.value}
              onChangeText={(text) => field.onChange(formatDateInput(text))}
              style={styles.formInput}
              placeholder='DD-MM-YYYY'
              keyboardType='numeric'
              maxLength={10}
            />
            {fieldState.error?.message && (
              <Text style={styles.formInputErrorMessage}>
                {fieldState.error.message}
              </Text>
            )}
          </View>
        )}
      />

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.formButtonContainer}
        onPress={handleSubmit(handleLoanRequest)}
      >
        <Text style={styles.formButtonText}>Solicitar Empréstimo</Text>
      </TouchableOpacity>
    </View>
  )
}
